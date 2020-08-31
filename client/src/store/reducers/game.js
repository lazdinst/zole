import TYPES from '../types';

/** ============================================================
 * Define Initial State
 * ========================================================== */
const initialState = {
  state: 'DISCONNECTED',
};

/** ============================================================
 * Define Reducer
 * ========================================================== */
export default (state = initialState, action) => {
  switch(action.type) {
    
    // case TYPES.SET_SOCKET_STATE:
    //   return {
    //     ...state,
    //     state: action.state,
    //   };

    default:
      return state;
  }
};
