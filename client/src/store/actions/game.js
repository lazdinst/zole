import TYPES from '../types';

/** ============================================================
 * Simple Dispatches
 * ========================================================== */

export const setGameState = (state, msg) => ({
  type: TYPES.SET_GAME_STATE,
  state: state,
  msg: msg,
});

export const setMatchCount = m => ({
  type: TYPES.SET_MATCH_COUNT,
  matchCount: m,
});

export const setRound = r => ({
  type: TYPES.SET_ROUND,
  round: r,
});

export const setBig = id => ({
  type: TYPES.SET_BIG,
  id: id,
});

export const setDealer = id => ({
  type: TYPES.SET_DEALER,
  dealer: id,
});

export const setTurn = id => ({
  type: TYPES.SET_TURN,
  turn: id,
});

export const setCenterDeal = cards => ({
  type: TYPES.SET_CENTER_DEAL,
  center: cards,
});

export const updateRoundQueue = roundQueue => ({
  type: TYPES.UPDATE_ROUND_QUEUE,
  roundQueue: roundQueue,
})

export const updateDealerQueue = dealerQueue => ({
  type: TYPES.UPDATE_DEALER_QUEUE,
  dealerQueue: dealerQueue,
})

export const setPlayerCount = playerCount => ({
  type: TYPES.SET_PLAYER_COUNT,
  playerCount: playerCount,
})