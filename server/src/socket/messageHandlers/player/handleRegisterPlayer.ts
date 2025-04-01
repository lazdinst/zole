import { Socket } from 'socket.io';
import { sessionManager } from '../../../core/state/instances';
import { PLAYER_REGISTERED } from '@zole/shared';

export function handleRegisterPlayer(
  socket: Socket,
  payload: { name: string; sessionToken: string },
) {
  console.log('Registering Player');
  const { name, sessionToken } = payload;
  const session = sessionManager.handleConnection(
    name,
    socket.id,
    sessionToken,
  );
  // Fetch or create player using SessionManager
  // Store session token and player info in the socket data
  socket.data.sessionToken = sessionToken;
  socket.data.playerName = session.player.name;
  socket.data.playerId = session.player.id;

  socket.emit(PLAYER_REGISTERED, {
    session,
  });
}
