import TYPES from '../types';

/** ============================================================
 * Define Initial State
 * ========================================================== */
const initialState = {
  players: {
    0: {
      name: 'Talis',
      team: null,
      points: 0,
      cards: []
    },
    1: {
      name: 'Tyler',
      team: null,
      points: 0,
      cards: []
    },
    2: {
      name: 'Dave',
      team: null,
      points: 0,
      cards: []
    }
  }
};

/** ============================================================
 * Define Reducer
 * ========================================================== */
export default (state = initialState, action) => {
  switch(action.type) {
  
    case TYPES.SET_PLAYER_CARDS:

      return {
        ...state,
        players: {
          ...state.players,
          [action.id]: {
            ...state.players[action.id],
            cards: action.cards,
          }
        }
      }

    default:
      return state;
  }
};