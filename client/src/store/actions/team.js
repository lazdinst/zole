import TYPES from '../types';

/** ============================================================
 * Simple Dispatches
 * ========================================================== */

export const updateTeamScore = (team, score) => ({
  type: TYPES.UPDATE_TEAM_POINTS,
  team: team,
  score: score,
})