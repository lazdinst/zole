import TYPES from '../types';

/** ============================================================
 * Simple Dispatches
 * ========================================================== */

export const setPlayerCards = (id, cards) => ({
  type: TYPES.SET_PLAYER_CARDS,
  id: id,
  cards: cards,
})

export const setPlayerTurn = id => ({
  type: TYPES.SET_PLAYER_TURN,
  turn: id,
});