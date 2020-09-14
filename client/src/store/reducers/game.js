import TYPES from '../types';

/** ============================================================
 * Define Initial State
 * ========================================================== */
const initialState = {
  state: 'S0',
  msg: '',
  dealer: 0,
  round: 0,
  matchCount: 0,
  center: null,
  turn: 0,
  big: 0,
  dealerQueue: [0,1,2],
  roundQueue: [1,2,0],
  playerCount: 3,
};

/** ============================================================
 * Define Reducer
 * ========================================================== */
export default (state = initialState, action) => {
  switch(action.type) {
    
    case TYPES.SET_GAME_STATE:
      console.log(`State Change: ${state.state}, ${action.state}`)
      console.log(`----- ${action.msg}`);
      return {
        ...state,
        state: action.state,
        msg: action.msg,
      }
    
    case TYPES.SET_DEALER:
      return {
        ...state,
        dealer: action.dealer,
      };

    case TYPES.SET_BIG:
      return {
        ...state,
        big: action.id,
      };

    case TYPES.SET_MATCH_COUNT:
      return {
        ...state,
        matchCount: action.matchCount,
      };

    case TYPES.SET_ROUND:
      return {
        ...state,
        round: action.round,
      };

    case TYPES.SET_TURN:
      return {
        ...state,
        turn: action.turn,
      }

    case TYPES.SET_CENTER_DEAL:
      return {
        ...state,
        center: action.center,
      }

    case TYPES.UPDATE_ROUND_QUEUE:
      return {
        ...state,
        roundQueue: action.roundQueue,
      }

      case TYPES.UPDATE_DEALER_QUEUE:
      return {
        ...state,
        dealerQueue: action.dealerQueue,
      }

    case TYPES.SET_PLAYER_COUNT:
      return {
        ...state,
        playerCount: action.playerCount,
      }
      
    default:
      return state;
  }
};
