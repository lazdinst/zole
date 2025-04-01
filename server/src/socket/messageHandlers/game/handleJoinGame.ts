import { Socket } from 'socket.io';
import { gameManager } from '../../../core/state/instances/GameManagerInstance';
import { GAME_STATE, PlayerState } from '@zole/shared';
import { joinGame } from '../../../core/actions/joinGame';

export function handleJoinGame(
  socket: Socket,
  payload: { gameId: string; playerName: string; sessionToken: string },
) {
  const { gameId, playerName, sessionToken } = payload;
  console.log(gameId);
  console.log(playerName);
  console.log(sessionToken);
  // const { gameId, player } = payload;
  // const game = gameManager.getOrCreateGame(gameId);
  // socket.emit(GAME_STATE, { state });
}
export default handleJoinGame;
