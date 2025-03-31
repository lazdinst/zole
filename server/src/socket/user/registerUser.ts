import { Socket } from 'socket.io';
import { activePlayers } from '../context';
import { generatePlayerName } from './generatePlayerName';
import { generateSessionToken } from './generateSessionToken';

// Function to register a player
export function registerUser(socket: Socket) {
  // Generate session token and player name
  const sessionToken = generateSessionToken();
  const playerName = generatePlayerName();

  // Check if the player already exists (based on socket id or other unique identifiers)
  if (activePlayers.has(socket.id)) {
    const player = activePlayers.get(socket.id);
    if (player) {
      player.sessionTokens.push(sessionToken); // Add new session token to the list of tokens
    }
  } else {
    // Register the player if they are new
    activePlayers.set(socket.id, { playerName, sessionTokens: [sessionToken] });
  }

  // Store session token and player name in the socket data for future use
  socket.data.sessionTokens = activePlayers.get(socket.id)?.sessionTokens;
  socket.data.playerName = playerName;

  console.log(
    `Assigned session token: ${sessionToken} and player name: ${playerName} to socket: ${socket.id}`,
  );

  return { sessionToken, playerName };
}
