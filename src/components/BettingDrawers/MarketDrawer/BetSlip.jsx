import React, { PureComponent } from 'react';
import SplitPane from 'react-split-pane';
import { I18n } from 'react-redux-i18n';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import Ps from 'perfect-scrollbar';
import { Button } from 'antd';
import { BetActions, MarketDrawerActions, NavigateActions } from '../../../actions';
import { BettingModuleUtils, CurrencyUtils } from '../../../utility';
import BetTable from '../BetTable';
import './BetSlip.less';
import { Empty, Overlay, Waiting, PlaceBetConfirm } from '../Common';
import { BettingDrawerStates } from '../../../constants';

const renderContent = (props) => (
  <div className='content' ref='unconfirmedBets'>
    { props.bets.isEmpty() &&
      <Empty
        showSuccess={ props.showBetSlipSuccess }
        className='market_drawer.unconfirmed_bets'
        navigateTo={ props.navigateTo }
      />
    }
    { !props.bets.isEmpty() &&
      <BetTable
        data={ props.bets }
        title={ I18n.t('market_drawer.unconfirmed_bets.header') }
        deleteOne={ props.deleteUnconfirmedBet }
        deleteMany={ props.clickDeleteUnconfirmedBets }
        updateOne={ props.updateUnconfirmedBet }
        dimmed={ props.obscureContent }
        currencyFormat={ props.currencyFormat }
      />
    }
  </div>
);

class BetSlip extends PureComponent {
  componentDidMount() {
    Ps.initialize(ReactDOM.findDOMNode(this.refs.unconfirmedBets));
  }

  componentDidUpdate() {
    Ps.update(ReactDOM.findDOMNode(this.refs.unconfirmedBets));
  }

  render() {
    const { overlay } = this.props;
    return (
      <div className='betslip'>
        <SplitPane
          split='horizontal'
          minSize={ 40 }
          defaultSize={ 40 }
          primary='second'
          allowResize={ false }
          pane1Style={ { 'overflowY': 'hidden' } }
        >
          { renderContent(this.props) }
          {
            !this.props.bets.isEmpty() &&
            <div className={ `footer ${this.props.obscureContent ? 'dimmed' : ''}` }>
              <Button
                className={ `btn place-bet btn-regular${this.props.numberOfGoodBets > 0 ? '' : '-disabled'}` }
                onClick={ () => this.props.clickPlaceBet(this.props.totalBetAmountFloat, this.props.currencyFormat) }
                disabled={ this.props.numberOfGoodBets === 0  }
              >
                { I18n.t('market_drawer.unconfirmed_bets.content.place_bet_button', { amount : this.props.totalBetAmountString }) }
              </Button>
            </div>
          }
        </SplitPane>
        { overlay === BettingDrawerStates.SUBMIT_BETS_CONFIRMATION &&
          <PlaceBetConfirm
             className='market_drawer.unconfirmed_bets.confirmation'
             goodBets={ this.props.numberOfGoodBets }
             badBets={ this.props.numberOfBadBets }
             amount={ this.props.totalBetAmountString }
             cancelAction={ this.props.cancelPlaceBet }
             confirmAction={ () => this.props.makeBets(this.props.originalBets) }
          />
        }
        { overlay === BettingDrawerStates.SUBMIT_BETS_ERROR &&
          <Overlay
            className='market_drawer.unconfirmed_bets.error'
            cancelAction={ this.props.cancelPlaceBet }
            confirmAction={ () => this.props.makeBets(this.props.originalBets) }
          />
        }
        { overlay === BettingDrawerStates.DELETE_BETS_CONFIRMATION &&
          <Overlay
            className='market_drawer.unconfirmed_bets.delete_bets'
            cancelAction={ this.props.cancelDeleteUnconfirmedBets }
            confirmAction={ () => this.props.deleteUnconfirmedBets(this.props.unconfirmedbetsToBeDeleted) }
          />
        }
        { overlay === BettingDrawerStates.INSUFFICIENT_BALANCE_ERROR &&
          <Overlay
            className='market_drawer.unconfirmed_bets.insufficient_balance'
            confirmAction={ this.props.hideInsufficientBalanceError }
          />
        }
        { overlay === BettingDrawerStates.DISCONNECTED_ERROR &&
          <Overlay
            className='market_drawer.unconfirmed_bets.disconnected'
            cancelAction={ this.props.hideDisconnectedError }
          />
        }
        { overlay === BettingDrawerStates.SUBMIT_BETS_WAITING && <Waiting/> }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const originalBets = state.getIn(['marketDrawer', 'unconfirmedBets']);
  let page = Immutable.Map();
  originalBets.forEach((bet) => {
    const betType = bet.get('bet_type');

    // Page content are grouped by market type (back or lay)
    if (!page.has(betType)) {
      page = page.set(betType, Immutable.List());
    }
    // Add the bet to the list of bets with the same market type
    let betListByBetType = page.get(betType);
    betListByBetType = betListByBetType.push(bet);
    // Put everything back in their rightful places
    page = page.set(betType, betListByBetType);
  });
  // Total Bet amount
  const totalAmount = originalBets.reduce((total, bet) => {
    const stake = parseFloat(bet.get('stake'));
    return total + (isNaN(stake) ? 0.0 : stake);
  }, 0.0);
  // Number of Good bets
  const numberOfGoodBets = originalBets.reduce((sum, bet) => {
    return sum + (BettingModuleUtils.isValidBet(bet) | 0);
  }, 0);
  // Overlay
  const overlay = state.getIn(['marketDrawer', 'overlay']);
  const obscureContent = overlay !== BettingDrawerStates.NO_OVERLAY && overlay !== BettingDrawerStates.SUBMIT_BETS_SUCCESS;
  return {
    originalBets,
    bets: page,
    overlay,
    obscureContent,
    unconfirmedbetsToBeDeleted: state.getIn(['marketDrawer', 'unconfirmedbetsToBeDeleted']),
    numberOfGoodBets,
    numberOfBadBets: originalBets.size - numberOfGoodBets,
    totalBetAmountFloat: totalAmount,
    totalBetAmountString: CurrencyUtils.getCurruencySymbol(ownProps.currencyFormat) +
                          CurrencyUtils.toFixed('stake', totalAmount, ownProps.currencyFormat),
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    navigateTo: NavigateActions.navigateTo,
    deleteUnconfirmedBet: MarketDrawerActions.deleteUnconfirmedBet,
    clickDeleteUnconfirmedBets: MarketDrawerActions.clickDeleteUnconfirmedBets,
    cancelDeleteUnconfirmedBets: MarketDrawerActions.cancelDeleteUnconfirmedBets,
    deleteUnconfirmedBets: MarketDrawerActions.deleteUnconfirmedBets,
    updateUnconfirmedBet: MarketDrawerActions.updateUnconfirmedBet,
    clickPlaceBet: MarketDrawerActions.clickPlaceBet,
    cancelPlaceBet: MarketDrawerActions.cancelPlaceBet,
    makeBets: BetActions.makeBets,
    hideInsufficientBalanceError: MarketDrawerActions.hideInsufficientBalanceError,
    hideDisconnectedError: MarketDrawerActions.hideDisconnectedError,

  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BetSlip);
