import { Socket } from 'socket.io';
import { generateSessionToken } from '../../auth';
import { nanoid } from 'nanoid';

// Function to register a player
export function registerUser(socket: Socket) {
  // Check if the player already exists (based on socket id or other unique identifiers)
  if (activePlayers.has(socket.id)) {
    const player = activePlayers.get(socket.id);
    if (player) {
      player.sessionTokens.push(sessionToken); // Add new session token to the list of tokens
    }
  } else {
    const playerName = generatePlayerName();
    // Generate session token and player name
    const sessionToken = generateSessionToken();
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

// Function to generate a unique player name
export function generatePlayerName(): string {
  return `Player-${nanoid(5)}`; // Generate a unique player name (e.g., Player-xyz12)
}
