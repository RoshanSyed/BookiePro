import { ActionTypes, LoadingStatus, ObjectPrefix } from '../constants';
import {  CommunicationService } from '../services';
import NotificationActions from './NotificationActions';
import MyAccountPageActions from './MyAccountPageActions';
import BetActions from './BetActions';
import log from 'loglevel';
import _ from 'lodash';
import Queue from 'promise-queue';

// Create a check for new history queue with max concurrent 1 and max pending 1 (only 1 check can run at each time with 1 pending)
const checkForNewRawHistoryQueue = new Queue(1, 1);

/**
 * Private actions
 */
class RawHistoryPrivateActions {

  static setInitRawHistoryLoadingStatusAction(loadingStatus) {
    return {
      type: ActionTypes.RAW_HISTORY_SET_INIT_RAW_HISTORY_LOADING_STATUS,
      loadingStatus
    }
  }

  static setInitRawHistoryErrorAction(error) {
    return {
      type: ActionTypes.RAW_HISTORY_SET_INIT_RAW_HISTORY_ERROR,
      error
    }
  }

  static prependRawTransactionsToRawHistoryAction(accountId, transactions) {
    return {
      type: ActionTypes.RAW_HISTORY_PREPEND_RAW_TRANSACTIONS_TO_RAW_HISTORY,
      accountId,
      transactions
    }
  }

  static setCheckForNewRawHistoryLoadingStatusAction(loadingStatus) {
    return {
      type: ActionTypes.RAW_HISTORY_SET_CHECK_FOR_NEW_RAW_HISTORY_LOADING_STATUS,
      loadingStatus
    }
  }

  static setCheckForNewRawHistoryErrorAction(error) {
    return {
      type: ActionTypes.RAW_HISTORY_SET_CHECK_FOR_NEW_RAW_HISTORY_ERROR,
      error
    }
  }
}

/**
 * Public actions
 */
class RawHistoryActions {
  /**
   * Init transaction history when the user logs in (fetch the history of the user to the beginning of time)
   */
  static initRawHistory() {
    return (dispatch, getState) => {
      const accountId = getState().getIn(['account', 'account', 'id']);
      if (accountId) {
        // Init history
        const latestTransactionId = getState().getIn(['rawHistory', 'rawHistoryByAccountId', accountId, 0, 'id']);
        const stopTxHistoryId = latestTransactionId || (ObjectPrefix.OPERATION_HISTORY_PREFIX + '.0');
        // Set loading status
        dispatch(RawHistoryPrivateActions.setInitRawHistoryLoadingStatusAction(LoadingStatus.LOADING));
        CommunicationService.fetchRecentHistory(accountId, stopTxHistoryId).then((transactions) => {
          // TODO: remove dummy history later
          const persistedRawHistory = getState().getIn(['rawHistory', 'rawHistoryByAccountId', accountId]);
          const isBeginningOfHistory = !persistedRawHistory || persistedRawHistory.size === 0;
          if (isBeginningOfHistory) {
            const dummyAdditionalTransactions = CommunicationService.fetchDummyTransactionHistorySynchronously(accountId);
            dispatch(RawHistoryPrivateActions.prependRawTransactionsToRawHistoryAction(accountId, dummyAdditionalTransactions));
          }
          // Prepend transaction history
          dispatch(RawHistoryPrivateActions.prependRawTransactionsToRawHistoryAction(accountId, transactions));
          // Init transaction history
          dispatch(MyAccountPageActions.initTransactionHistory());
          // Init my bets
          dispatch(BetActions.initMyBets());
          // Set loading status
          dispatch(RawHistoryPrivateActions.setInitRawHistoryLoadingStatusAction(LoadingStatus.DONE));
          log.debug('Init raw history succeed.');
        }).catch((error) => {
          // Set error
          dispatch(RawHistoryPrivateActions.setInitRawHistoryErrorAction(error));
          log.error('Init raw history error', error);
        })

      }
    }
  }

  /**
   * Check for new transaction history and prepend it to the current list of transaction history
   */
  static checkForNewRawHistory() {
    return (dispatch, getState) => {
      const accountId = getState().getIn(['account', 'account', 'id']);
      if (accountId) {
        // Create function to check new raw history so we can add it to the queue (to prevent duplicate, i.e running concurrently)
        const doTheCheck = () => {
          // Init history
          const latestTransactionId = getState().getIn(['rawHistory', 'rawHistoryByAccountId', accountId, 0, 'id']);
          const stopTxHistoryId = latestTransactionId || (ObjectPrefix.OPERATION_HISTORY_PREFIX + '.0');
          // Set loading status
          dispatch(RawHistoryPrivateActions.setCheckForNewRawHistoryLoadingStatusAction(LoadingStatus.LOADING));
          return CommunicationService.fetchRecentHistory(accountId, stopTxHistoryId).then((transactions) => {
            // Prepend transaction history
            dispatch(RawHistoryPrivateActions.prependRawTransactionsToRawHistoryAction(accountId, transactions));
            // Set loading status
            dispatch(RawHistoryPrivateActions.setCheckForNewRawHistoryLoadingStatusAction(LoadingStatus.DONE));
            // Update transaction history
            dispatch(MyAccountPageActions.updateTransactionHistory(transactions));
            // Update my bets
            dispatch(BetActions.checkForNewMyBets(transactions));
            // Update notification
            dispatch(NotificationActions.updateNotifications(transactions));
            log.debug('Check for new raw history succeed.');
          }).catch((error) => {
            // Set error
            dispatch(RawHistoryPrivateActions.setCheckForNewRawHistoryLoadingStatusAction(error));
            log.error('Check for raw history error', error);
          })
        }
        // Add to the queue
        checkForNewRawHistoryQueue.add(doTheCheck);
      }
    }
  }

}

export default RawHistoryActions;
