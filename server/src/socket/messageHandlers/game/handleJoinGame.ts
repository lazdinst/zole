import { Socket } from 'socket.io';
import { gameManager } from '../../../core/GameManagerInstance';
import { getOrCreatePlayerId } from '../../../auth/sessionManager';
import { GAME_STATE, Player } from '@zole/shared';
import { joinGame } from '../../../core/actions/joinGame';

export function handleJoinGame(
  socket: Socket,
  payload: { gameId: string; playerName: string; sessionToken: string },
) {
  const { gameId, playerName, sessionToken } = payload;

  const playerId = getOrCreatePlayerId(sessionToken);

  const player: Player = {
    id: playerId,
    name: playerName,
  };

  const game = gameManager.getOrCreateGame(gameId);
  const state = joinGame(game, player);

  socket.emit(GAME_STATE, { state });
}
export default handleJoinGame;
