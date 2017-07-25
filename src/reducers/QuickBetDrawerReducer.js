import Immutable from 'immutable';
import { LoadingStatus, ActionTypes, BettingDrawerStates } from '../constants';
import { BettingModuleUtils } from '../utility';

let initialState = Immutable.fromJS({
  bets: Immutable.List(),
  overlay: BettingDrawerStates.NO_OVERLAY,
  betsToBeDeleted: Immutable.List(),
  eventInDeleteBetsConfirmation: '',
});

export default function(state = initialState, action) {
  const oldBets = state.get('bets');
  switch (action.type) {
    case ActionTypes.QUICK_BET_DRAWER_ADD_ONE_BET: {
      const newBet = action.bet
                     .set('stake', undefined)
                     .set('profit', undefined)
                     .set('liability', undefined)
                     .update('odds', odds => odds !== '' ? odds.toFixed(2) : '');
      // If no match, returns -1
      const index = oldBets.findIndex(
        b => b.get('bet_type') === newBet.get('bet_type') &&
             b.get('betting_market_id') === newBet.get('betting_market_id')
      );
      // IF there exists a bet with the same bet type from the same betting market, REPLACE it.
      if (index >= 0) {
        return state.merge({
          bets: oldBets.set(index, newBet)
        });
      }
      // ELSE just append
      return state.merge({
        bets: oldBets.push(newBet)
      });
    }
    case ActionTypes.QUICK_BET_DRAWER_DELETE_ONE_BET: {
      return state.merge({
        bets: oldBets.filterNot(b => b.get('id') === action.betId),
        // In case the sucess screen is on, we should turn it off after deleting a bet
        overlay: BettingDrawerStates.NO_OVERLAY,
      });
    }
    case ActionTypes.QUICK_BET_DRAWER_SHOW_DELETE_BETS_CONFIRMATION: {
      return state.merge({
        betsToBeDeleted: action.bets,
        overlay: BettingDrawerStates.DELETE_BETS_CONFIRMATION,
        eventNameInDeleteBetsConfirmation: action.eventName,
      })
    }
    case ActionTypes.QUICK_BET_DRAWER_HIDE_DELETE_BETS_CONFIRMATION: {
      return state.merge({
        betsToBeDeleted: Immutable.List(),
        overlay: BettingDrawerStates.NO_OVERLAY,
        eventNameInDeleteBetsConfirmation: '',
      })
    }
    case ActionTypes.QUICK_BET_DRAWER_DELETE_MANY_BETS: {
      return state.merge({
        bets: oldBets.filterNot(b => action.listOfBetIds.includes(b.get('id'))),
        // In case the success screen is on, we should turn it off after deleting bets
        overlay: BettingDrawerStates.NO_OVERLAY,
        betsToBeDeleted: Immutable.List(),
        eventNameInDeleteBetsConfirmation: '',
      });
    }
    case ActionTypes.QUICK_BET_DRAWER_DELETE_ALL_BETS: {
      return state.merge({
        bets: Immutable.List(),
        // In case the success screen is on, we should turn it off after deleting bets
        overlay: BettingDrawerStates.NO_OVERLAY,
        betsToBeDeleted: Immutable.List(),
        eventInDeleteBetsConfirmation: ''
      });
    }
    case ActionTypes.QUICK_BET_DRAWER_UPDATE_ONE_BET: {
      const index = oldBets.findIndex(b => b.get('id') === action.delta.get('id'));
      const { delta } = action;
      let bet = oldBets.get(index).set(delta.get('field'), delta.get('value'));
      // Calculate the profit/liability of a bet based on the latest odds and stake value
      if (bet.has('stake')) {
        const profit = BettingModuleUtils.getProfitOrLiability(bet.get('stake'), bet.get('odds'));
        bet = bet.set('profit', profit).set('liability', profit);
      }
      return state.merge({
        bets: oldBets.set(index, bet)
      })
    }
    case ActionTypes.QUICK_BET_DRAWER_SHOW_BETSLIP_CONFIRMATION: {
      return state.merge({
        overlay: BettingDrawerStates.BET_SLIP_CONFIRMATION,
      });
    }
    case ActionTypes.BET_SET_MAKE_BETS_LOADING_STATUS: {
      let overlay = BettingDrawerStates.NO_OVERLAY;
      if (action.loadingStatus === LoadingStatus.LOADING) {
        overlay = BettingDrawerStates.BET_SLIP_WAITING;
      } else if (action.loadingStatus === LoadingStatus.DONE) {
        overlay = BettingDrawerStates.BET_SLIP_SUCCESS;
      }
      return state.merge({
        bets: action.loadingStatus === LoadingStatus.DONE ? Immutable.List() : oldBets,
        overlay,
      })
    }
    case ActionTypes.BET_SET_MAKE_BETS_ERROR: {
      return state.merge({
        overlay: BettingDrawerStates.BET_SLIP_ERROR,
      })
    }
    case ActionTypes.QUICK_BET_DRAWER_SHOW_INSUFFICIENT_BALANCE_ERROR: {
      return state.merge({
        overlay: BettingDrawerStates.INSUFFICIENT_BALANCE_ERROR,
      })
    }
    case ActionTypes.QUICK_BET_DRAWER_SNOW_DISCONNECTED_ERROR: {
      return state.merge({
        overlay: BettingDrawerStates.DISCONNECTED_ERROR,
      })
    }
    // All these state set the betting drawer to the initial state
    case ActionTypes.QUICK_BET_DRAWER_HIDE_BETSLIP_CONFIRMATION:
    case ActionTypes.QUICK_BET_DRAWER_HIDE_BETSLIP_ERROR:
    case ActionTypes.QUICK_BET_DRAWER_HIDE_INSUFFICIENT_BALANCE_ERROR:
    case ActionTypes.QUICK_BET_DRAWER_HIDE_DISCONNECTED_ERROR: {
      return state.merge({
        overlay: BettingDrawerStates.NO_OVERLAY,
      })
    }
    default:
      return state;
  }
};
