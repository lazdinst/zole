import { activePlayers } from '../context';

// Function to retrieve player by session token
export function getPlayer(sessionToken: string) {
  // Retrieve player data by session token
  for (const [socketId, playerData] of activePlayers.entries()) {
    if (playerData.sessionTokens.includes(sessionToken)) {
      return { socketId, playerData };
    }
  }
  return null; // Player not found
}
