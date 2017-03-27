import _ from 'lodash';
import Immutable from 'immutable';

const bets = [
  {
    id: '1.106.1',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.27',
    amount_to_bet: '1.0',
    amount_to_win: '1.25',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '1.0',
    remaining_amount_to_win: '1.25',
    cancelled: false
  },
  {
    id: '1.106.2',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.12',
    amount_to_bet: '2.15',
    amount_to_win: '5.29',
    back_or_lay: 'Lay',
    remaining_amount_to_bet: '2.15',
    remaining_amount_to_win: '5.29',
    cancelled: false
  },
  {
    id: '1.106.3',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.1',
    amount_to_bet: '2.5',
    amount_to_win: '4.5',
    back_or_lay: 'Lay',
    remaining_amount_to_bet: '0',
    remaining_amount_to_win: '4.5',
    cancelled: false
  },
  {
    id: '1.106.4',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.2',
    amount_to_bet: '3.5',
    amount_to_win: '6.5',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '0',
    remaining_amount_to_win: '6.5',
    cancelled: false
  },
  {
    id: '1.106.5',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.1',
    amount_to_bet: '2.5',
    amount_to_win: '4.5',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '1.5',
    remaining_amount_to_win: '4.5',
    cancelled: false
  },
  {
    id: '1.106.6',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.2',
    amount_to_bet: '3.5',
    amount_to_win: '6.5',
    back_or_lay: 'Lay',
    remaining_amount_to_bet: '1.5',
    remaining_amount_to_win: '6.5',
    cancelled: false
  },
  {
    id: '1.106.7',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.21',
    amount_to_bet: '3.14',
    amount_to_win: '8.4',
    back_or_lay: 'Lay',
    remaining_amount_to_bet: '3.14',
    remaining_amount_to_win: '8.4',
    cancelled: false
  },
  {
    "id": "1.106.8",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.55",
    "amount_to_bet": "4.4",
    "amount_to_win": "9.3",
    "back_or_lay": "lay",
    "remaining_amount_to_bet": "4.4",
    "remaining_amount_to_win": "9.3",
    "cancelled": false
  },
  {
    id: '1.106.9',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.24',
    amount_to_bet: '3.5',
    amount_to_win: '4.8',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '0',
    remaining_amount_to_win: '0',
    cancelled: false
  },
  {
    "id": "1.106.10",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.61",
    "amount_to_bet": "5.8",
    "amount_to_win": "6.8",
    "back_or_lay": "back",
    "remaining_amount_to_bet": "5.8",
    "remaining_amount_to_win": "6.8",
    "cancelled": false
  },
  {
    id: '1.106.11',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.20',
    amount_to_bet: '5.5',
    amount_to_win: '6.8',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '0',
    remaining_amount_to_win: '0',
    cancelled: false
  },
  {
    id: '1.106.12',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.25',
    amount_to_bet: '1.15',
    amount_to_win: '4.6',
    back_or_lay: 'Lay',
    remaining_amount_to_bet: '1.15',
    remaining_amount_to_win: '4.6',
    cancelled: false
  },
  {
    id: '1.106.13',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.26',
    amount_to_bet: '4.5',
    amount_to_win: '5.8',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '0',
    remaining_amount_to_win: '0',
    cancelled: false
  },
  {
    "id": "1.106.14",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.66",
    "amount_to_bet": "5.5",
    "amount_to_win": "6.5",
    "back_or_lay": "back",
    "remaining_amount_to_bet": "5.5",
    "remaining_amount_to_win": "6.5",
    "cancelled": false
  },
  {
    id: '1.106.15',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.32',
    amount_to_bet: '4.5',
    amount_to_win: '5.8',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '0',
    remaining_amount_to_win: '0',
    cancelled: false
  },
  {
    id: '1.106.16',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.37',
    amount_to_bet: '0.23',
    amount_to_win: '0.33',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '0.23',
    remaining_amount_to_win: '0.33',
    cancelled: false
  },
  {
    id: '1.106.17',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.38',
    amount_to_bet: '4.5',
    amount_to_win: '5.8',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '0',
    remaining_amount_to_win: '0',
    cancelled: false
  },
  {
    id: '1.106.18',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.43',
    amount_to_bet: '6.21',
    amount_to_win: '22.05',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '6.21',
    remaining_amount_to_win: '22.05',
    cancelled: false
  },
  {
    id: '1.106.19',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.44',
    amount_to_bet: '2.5',
    amount_to_win: '3.8',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '0',
    remaining_amount_to_win: '0',
    cancelled: false
  },
  {
    "id": "1.106.20",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.72",
    "amount_to_bet": "6.8",
    "amount_to_win": "9.5",
    "back_or_lay": "back",
    "remaining_amount_to_bet": "6.8",
    "remaining_amount_to_win": "9.5",
    "cancelled": false
  },
  {
    id: '1.106.21',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.50',
    amount_to_bet: '6.5',
    amount_to_win: '7.8',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '0',
    remaining_amount_to_win: '0',
    cancelled: false
  },
  {
    id: '1.106.22',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.21',
    amount_to_bet: '4.5',
    amount_to_win: '5.8',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '4.5',
    remaining_amount_to_win: '5.8',
    cancelled: false
  },
  {
    id: '1.106.23',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.22',
    amount_to_bet: '7.5',
    amount_to_win: '8.8',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '0',
    remaining_amount_to_win: '0',
    cancelled: false
  },
  {
    id: '1.106.24',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.27',
    amount_to_bet: '4.5',
    amount_to_win: '5.8',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '4.5',
    remaining_amount_to_win: '5.8',
    cancelled: false
  },
  {
    id: '1.106.25',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.28',
    amount_to_bet: '7.5',
    amount_to_win: '8.8',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '0',
    remaining_amount_to_win: '0',
    cancelled: false
  },
  {
    id: '1.106.26',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.33',
    amount_to_bet: '2.5',
    amount_to_win: '3.8',
    back_or_lay: 'Lay',
    remaining_amount_to_bet: '2.5',
    remaining_amount_to_win: '3.8',
    cancelled: false
  },
  {
    id: '1.106.27',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.34',
    amount_to_bet: '7.5',
    amount_to_win: '8.8',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '0',
    remaining_amount_to_win: '0',
    cancelled: false
  },
  {
    id: '1.106.28',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.39',
    amount_to_bet: '3.5',
    amount_to_win: '4.8',
    back_or_lay: 'Lay',
    remaining_amount_to_bet: '3.5',
    remaining_amount_to_win: '4.8',
    cancelled: false
  },
  {
    id: '1.106.29',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.40',
    amount_to_bet: '3.5',
    amount_to_win: '4.8',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '0',
    remaining_amount_to_win: '0',
    cancelled: false
  },{
    id: '1.106.30',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.45',
    amount_to_bet: '7.5',
    amount_to_win: '8.8',
    back_or_lay: 'Lay',
    remaining_amount_to_bet: '7.5',
    remaining_amount_to_win: '8.8',
    cancelled: false
  },{
    id: '1.106.31',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.46',
    amount_to_bet: '3.5',
    amount_to_win: '4.8',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '0',
    remaining_amount_to_win: '0',
    cancelled: false
  },{
    id: '1.106.32',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.51',
    amount_to_bet: '5.5',
    amount_to_win: '6.8',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '5.5',
    remaining_amount_to_win: '6.8',
    cancelled: false
  },{
    id: '1.106.33',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.52',
    amount_to_bet: '3.5',
    amount_to_win: '4.8',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '0',
    remaining_amount_to_win: '0',
    cancelled: false
  },
  {
    id: '1.106.34',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.15',
    amount_to_bet: '0.43',
    amount_to_win: '3.4',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '0.43',
    remaining_amount_to_win: '3.4',
    cancelled: false
  },
  {
    id: '1.106.35',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.24',
    amount_to_bet: '2.5',
    amount_to_win: '3.8',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '0',
    remaining_amount_to_win: '0',
    cancelled: false
  },{
    id: '1.106.36',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.29',
    amount_to_bet: '2.5',
    amount_to_win: '3.8',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '5.5',
    remaining_amount_to_win: '6.8',
    cancelled: false
  },{
    id: '1.106.37',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.30',
    amount_to_bet: '5.5',
    amount_to_win: '6.8',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '0',
    remaining_amount_to_win: '0',
    cancelled: false
  },{
    id: '1.106.38',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.35',
    amount_to_bet: '5.5',
    amount_to_win: '6.8',
    back_or_lay: 'Lay',
    remaining_amount_to_bet: '5.5',
    remaining_amount_to_win: '6.8',
    cancelled: false
  },{
    id: '1.106.39',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.36',
    amount_to_bet: '6.5',
    amount_to_win: '7.8',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '0',
    remaining_amount_to_win: '0',
    cancelled: false
  },
  {
    id: '1.106.40',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.49',
    amount_to_bet: '5.5',
    amount_to_win: '6.8',
    back_or_lay: 'Lay',
    remaining_amount_to_bet: '5.5',
    remaining_amount_to_win: '6.8',
    cancelled: false
  },
  {
    id: '1.106.41',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.42',
    amount_to_bet: '2.5',
    amount_to_win: '3.8',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '0',
    remaining_amount_to_win: '0',
    cancelled: false
  },
  {
    id: '1.106.42',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.47',
    amount_to_bet: '3.5',
    amount_to_win: '3.8',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '3.5',
    remaining_amount_to_win: '4.8',
    cancelled: false
  },
  {
    id: '1.106.43',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.48',
    amount_to_bet: '4.5',
    amount_to_win: '5.8',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '0',
    remaining_amount_to_win: '0',
    cancelled: false
  },
  {
    id: '1.106.44',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.53',
    amount_to_bet: '7.5',
    amount_to_win: '8.8',
    back_or_lay: 'Lay',
    remaining_amount_to_bet: '7.5',
    remaining_amount_to_win: '8.8',
    cancelled: false
  },
  {
    id: '1.106.45',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.54',
    amount_to_bet: '4.5',
    amount_to_win: '5.8',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '0',
    remaining_amount_to_win: '0',
    cancelled: false
  },
  {
    id: '1.106.46',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.23',
    amount_to_bet: '5.5',
    amount_to_win: '6.8',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '5.5',
    remaining_amount_to_win: '6.8',
    cancelled: false
  },
  {
    "id": "1.106.47",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.56",
    "amount_to_bet": "7.5",
    "amount_to_win": "9.5",
    "back_or_lay": "back",
    "remaining_amount_to_bet": "7.5",
    "remaining_amount_to_win": "9.5",
    "cancelled": false
  },
  {
    "id": "1.106.48",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.57",
    "amount_to_bet": "2.5",
    "amount_to_win": "3.5",
    "back_or_lay": "lay",
    "remaining_amount_to_bet": "2.5",
    "remaining_amount_to_win": "3.5",
    "cancelled": false
  },
  {
    "id": "1.106.49",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.58",
    "amount_to_bet": "2.8",
    "amount_to_win": "3.8",
    "back_or_lay": "back",
    "remaining_amount_to_bet": "2.8",
    "remaining_amount_to_win": "3.8",
    "cancelled": false
  },
  {
    "id": "1.106.50",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.59",
    "amount_to_bet": "7.8",
    "amount_to_win": "8.5",
    "back_or_lay": "lay",
    "remaining_amount_to_bet": "7.8",
    "remaining_amount_to_win": "8.5",
    "cancelled": false
  },
  {
    "id": "1.106.51",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.60",
    "amount_to_bet": "5.5",
    "amount_to_win": "6.5",
    "back_or_lay": "lay",
    "remaining_amount_to_bet": "5.5",
    "remaining_amount_to_win": "6.5",
    "cancelled": false
  },
  {
    id: '1.106.52',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.19',
    amount_to_bet: '1.31',
    amount_to_win: '2.91',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '1.31',
    remaining_amount_to_win: '2.91',
    cancelled: false
  },
  {
    "id": "1.106.53",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.62",
    "amount_to_bet": "3.5",
    "amount_to_win": "8.5",
    "back_or_lay": "back",
    "remaining_amount_to_bet": "3.5",
    "remaining_amount_to_win": "8.5",
    "cancelled": false
  },
  {
    "id": "1.106.54",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.63",
    "amount_to_bet": "8.5",
    "amount_to_win": "9.5",
    "back_or_lay": "back",
    "remaining_amount_to_bet": "8.5",
    "remaining_amount_to_win": "9.5",
    "cancelled": false
  },
  {
    "id": "1.106.55",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.64",
    "amount_to_bet": "4.8",
    "amount_to_win": "8.8",
    "back_or_lay": "back",
    "remaining_amount_to_bet": "4.8",
    "remaining_amount_to_win": "8.8",
    "cancelled": false
  },
  {
    "id": "1.106.56",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.65",
    "amount_to_bet": "8.5",
    "amount_to_win": "9.5",
    "back_or_lay": "lay",
    "remaining_amount_to_bet": "8.5",
    "remaining_amount_to_win": "9.5",
    "cancelled": false
  },
  {
    id: '1.106.57',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.31',
    amount_to_bet: '2.29',
    amount_to_win: '3.36',
    back_or_lay: 'Lay',
    remaining_amount_to_bet: '2.29',
    remaining_amount_to_win: '3.36',
    cancelled: false
  },
  {
    "id": "1.106.58",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.67",
    "amount_to_bet": "5.8",
    "amount_to_win": "6.8",
    "back_or_lay": "back",
    "remaining_amount_to_bet": "5.8",
    "remaining_amount_to_win": "6.8",
    "cancelled": false
  },
  {
    "id": "1.106.59",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.68",
    "amount_to_bet": "4.4",
    "amount_to_win": "9.3",
    "back_or_lay": "back",
    "remaining_amount_to_bet": "4.4",
    "remaining_amount_to_win": "9.3",
    "cancelled": false
  },
  {
    "id": "1.106.60",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.69",
    "amount_to_bet": "5.8",
    "amount_to_win": "6.8",
    "back_or_lay": "lay",
    "remaining_amount_to_bet": "5.8",
    "remaining_amount_to_win": "6.8",
    "cancelled": false
  },
  {
    "id": "1.106.61",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.70",
    "amount_to_bet": "6.8",
    "amount_to_win": "9.5",
    "back_or_lay": "lay",
    "remaining_amount_to_bet": "6.8",
    "remaining_amount_to_win": "9.5",
    "cancelled": false
  },
  {
    "id": "1.106.62",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.71",
    "amount_to_bet": "7.8",
    "amount_to_win": "8.5",
    "back_or_lay": "lay",
    "remaining_amount_to_bet": "7.8",
    "remaining_amount_to_win": "8.5",
    "cancelled": false
  },
  {
    id: '1.106.63',
    bettor_id: '1.2.48',
    betting_market_id: '1.105.41',
    amount_to_bet: '4.5',
    amount_to_win: '5.8',
    back_or_lay: 'Back',
    remaining_amount_to_bet: '4.5',
    remaining_amount_to_win: '5.8',
    cancelled: false
  },
  {
    "id": "1.106.64",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.73",
    "amount_to_bet": "5.5",
    "amount_to_win": "6.5",
    "back_or_lay": "lay",
    "remaining_amount_to_bet": "5.5",
    "remaining_amount_to_win": "6.5",
    "cancelled": false
  },
  {
    "id": "1.106.65",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.74",
    "amount_to_bet": "3.5",
    "amount_to_win": "8.5",
    "back_or_lay": "lay",
    "remaining_amount_to_bet": "3.5",
    "remaining_amount_to_win": "8.5",
    "cancelled": false
  },
  {
    "id": "1.106.66",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.75",
    "amount_to_bet": "4.8",
    "amount_to_win": "9.5",
    "back_or_lay": "back",
    "remaining_amount_to_bet": "4.8",
    "remaining_amount_to_win": "9.5",
    "cancelled": false
  },
  {
    "id": "1.106.67",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.76",
    "amount_to_bet": "8.5",
    "amount_to_win": "9.5",
    "back_or_lay": "lay",
    "remaining_amount_to_bet": "8.5",
    "remaining_amount_to_win": "9.5",
    "cancelled": false
  },
  {
    "id": "1.106.68",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.77",
    "amount_to_bet": "3.5",
    "amount_to_win": "8.5",
    "back_or_lay": "back",
    "remaining_amount_to_bet": "3.5",
    "remaining_amount_to_win": "8.5",
    "cancelled": false
  },
  {
    "id": "1.106.69",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.78",
    "amount_to_bet": "7.8",
    "amount_to_win": "8.5",
    "back_or_lay": "lay",
    "remaining_amount_to_bet": "7.8",
    "remaining_amount_to_win": "8.5",
    "cancelled": false
  },
  {
    "id": "1.106.70",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.79",
    "amount_to_bet": "8.5",
    "amount_to_win": "9.5",
    "back_or_lay": "lay",
    "remaining_amount_to_bet": "8.5",
    "remaining_amount_to_win": "9.5",
    "cancelled": false
  },
  {
    "id": "1.106.71",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.80",
    "amount_to_bet": "5.5",
    "amount_to_win": "6.5",
    "back_or_lay": "back",
    "remaining_amount_to_bet": "5.5",
    "remaining_amount_to_win": "6.5",
    "cancelled": false
  },
  {
    "id": "1.106.72",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.81",
    "amount_to_bet": "7.5",
    "amount_to_win": "9.5",
    "back_or_lay": "lay",
    "remaining_amount_to_bet": "7.5",
    "remaining_amount_to_win": "9.5",
    "cancelled": false
  },
  {
    "id": "1.106.73",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.82",
    "amount_to_bet": "7.5",
    "amount_to_win": "9.5",
    "back_or_lay": "lay",
    "remaining_amount_to_bet": "7.5",
    "remaining_amount_to_win": "9.5",
    "cancelled": false
  },
  {
    "id": "1.106.74",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.83",
    "amount_to_bet": "5.5",
    "amount_to_win": "6.5",
    "back_or_lay": "back",
    "remaining_amount_to_bet": "5.5",
    "remaining_amount_to_win": "6.5",
    "cancelled": false
  },
  {
    "id": "1.106.75",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.84",
    "amount_to_bet": "7.5",
    "amount_to_win": "9.5",
    "back_or_lay": "lay",
    "remaining_amount_to_bet": "7.5",
    "remaining_amount_to_win": "9.5",
    "cancelled": false
  },
  {
    "id": "1.106.76",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.85",
    "amount_to_bet": "7.5",
    "amount_to_win": "9.5",
    "back_or_lay": "back",
    "remaining_amount_to_bet": "7.5",
    "remaining_amount_to_win": "9.5",
    "cancelled": false
  },
  {
    "id": "1.106.77",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.86",
    "amount_to_bet": "2.8",
    "amount_to_win": "3.8",
    "back_or_lay": "lay",
    "remaining_amount_to_bet": "2.8",
    "remaining_amount_to_win": "3.8",
    "cancelled": false
  },
  {
    "id": "1.106.78",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.87",
    "amount_to_bet": "3.5",
    "amount_to_win": "8.5",
    "back_or_lay": "back",
    "remaining_amount_to_bet": "3.5",
    "remaining_amount_to_win": "8.5",
    "cancelled": false
  },
  {
    "id": "1.106.79",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.88",
    "amount_to_bet": "3.5",
    "amount_to_win": "8.5",
    "back_or_lay": "back",
    "remaining_amount_to_bet": "3.5",
    "remaining_amount_to_win": "8.5",
    "cancelled": false
  },
  {
    "id": "1.106.80",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.89",
    "amount_to_bet": "4.4",
    "amount_to_win": "9.3",
    "back_or_lay": "lay",
    "remaining_amount_to_bet": "4.4",
    "remaining_amount_to_win": "9.3",
    "cancelled": false
  },
  {
    "id": "1.106.81",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.90",
    "amount_to_bet": "3.5",
    "amount_to_win": "8.5",
    "back_or_lay": "back",
    "remaining_amount_to_bet": "3.5",
    "remaining_amount_to_win": "8.5",
    "cancelled": false
  },
  {
    "id": "1.106.82",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.91",
    "amount_to_bet": "3.5",
    "amount_to_win": "9.5",
    "back_or_lay": "lay",
    "remaining_amount_to_bet": "3.5",
    "remaining_amount_to_win": "9.5",
    "cancelled": false
  },
  {
    "id": "1.106.83",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.92",
    "amount_to_bet": "5.5",
    "amount_to_win": "6.5",
    "back_or_lay": "back",
    "remaining_amount_to_bet": "5.5",
    "remaining_amount_to_win": "6.5",
    "cancelled": false
  },
  {
    "id": "1.106.84",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.93",
    "amount_to_bet": "6.8",
    "amount_to_win": "9.5",
    "back_or_lay": "back",
    "remaining_amount_to_bet": "6.8",
    "remaining_amount_to_win": "9.5",
    "cancelled": false
  },
  {
    "id": "1.106.85",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.94",
    "amount_to_bet": "4.8",
    "amount_to_win": "8.8",
    "back_or_lay": "lay",
    "remaining_amount_to_bet": "4.8",
    "remaining_amount_to_win": "8.8",
    "cancelled": false
  },
  {
    "id": "1.106.86",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.95",
    "amount_to_bet": "3.5",
    "amount_to_win": "8.5",
    "back_or_lay": "lay",
    "remaining_amount_to_bet": "3.5",
    "remaining_amount_to_win": "8.5",
    "cancelled": false
  },
  {
    "id": "1.106.87",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.96",
    "amount_to_bet": "4.4",
    "amount_to_win": "9.3",
    "back_or_lay": "back",
    "remaining_amount_to_bet": "4.4",
    "remaining_amount_to_win": "9.3",
    "cancelled": false
  },
  {
    "id": "1.106.88",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.97",
    "amount_to_bet": "5.8",
    "amount_to_win": "6.8",
    "back_or_lay": "back",
    "remaining_amount_to_bet": "5.8",
    "remaining_amount_to_win": "6.8",
    "cancelled": false
  },
  {
    "id": "1.106.89",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.98",
    "amount_to_bet": "3.5",
    "amount_to_win": "8.5",
    "back_or_lay": "back",
    "remaining_amount_to_bet": "3.5",
    "remaining_amount_to_win": "8.5",
    "cancelled": false
  },
  {
    "id": "1.106.90",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.99",
    "amount_to_bet": "6.8",
    "amount_to_win": "9.5",
    "back_or_lay": "lay",
    "remaining_amount_to_bet": "6.8",
    "remaining_amount_to_win": "9.5",
    "cancelled": false
  },
  {
    "id": "1.106.91",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.100",
    "amount_to_bet": "6.8",
    "amount_to_win": "9.5",
    "back_or_lay": "lay",
    "remaining_amount_to_bet": "6.8",
    "remaining_amount_to_win": "9.5",
    "cancelled": false
  },
  {
    "id": "1.106.92",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.101",
    "amount_to_bet": "4.8",
    "amount_to_win": "8.8",
    "back_or_lay": "back",
    "remaining_amount_to_bet": "4.8",
    "remaining_amount_to_win": "8.8",
    "cancelled": false
  },
  {
    "id": "1.106.93",
    "bettor_id": "1.2.48",
    "betting_market_id": "1.105.102",
    "amount_to_bet": "2.5",
    "amount_to_win": "3.5",
    "back_or_lay": "lay",
    "remaining_amount_to_bet": "2.5",
    "remaining_amount_to_win": "3.5",
    "cancelled": false
  }
];

//TODO: add more in this list, pay attention on the relation with the account, betting_market dummy data
// also make variety of the type of bets, i.e.
// Unmatched bets -> amount_to_bet === remaining_amount_to_bet && amount_to_win === remaining_amount_to_win
// Matched bets -> remaining_amount_to_bet === 0
// Cancelled bets -> cancelled === true (and it must be an unmatched bets since matched bets can't be cancelled)

const immutableBets = _.map(bets, bet => Immutable.fromJS(bet));
export default immutableBets;
