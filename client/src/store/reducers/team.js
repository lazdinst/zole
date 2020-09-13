import TYPES from '../types';

/** ============================================================
 * Define Initial State
 * ========================================================== */
const initialState = {
  big: 0,
  small: 0,
};

/** ============================================================
 * Define Reducer
 * ========================================================== */
export default (state = initialState, action) => {
  switch(action.type) {
  
    case TYPES.UPDATE_TEAM_POINTS:
      return {
        ...state,
        [action.team]: action.score,
      }

    default:
      return state;
  }
};