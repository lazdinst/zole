import TYPES from '../types';
import axios from 'axios';

/** ============================================================
 * Simple Dispatches
 * ========================================================== */

export const updateGame = (name, state) => ({
  type: TYPES.GAME_STATE,
});