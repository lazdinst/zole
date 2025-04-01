import { Socket } from 'socket.io';
import { gameManager } from '../../../core/state/instances/GameManagerInstance';
import { GAME_STATE, PlayerState } from '@zole/shared';
import { joinGame } from '../../../core/actions/joinGame';

export function handleJoinGame(
  socket: Socket,
  payload: { gameId: string; player: PlayerState },
) {
  const { gameId, player } = payload;

  const game = gameManager.getOrCreateGame(gameId);
  const state = joinGame(game, player);

  socket.emit(GAME_STATE, { state });
}
export default handleJoinGame;
