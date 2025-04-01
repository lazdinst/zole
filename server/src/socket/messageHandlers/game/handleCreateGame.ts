import { nanoid } from 'nanoid';
import { joinGame } from '../../../core/actions/joinGame';
import { Socket } from 'socket.io';
import { Player, GAME_CREATED } from '@zole/shared';
import { getOrCreatePlayerId } from '../../../auth/sessionManager';
import { gameManager } from '../../../core/GameManagerInstance';

export function handleCreateGame(
  socket: Socket,
  payload: { playerName: string; sessionToken: string },
) {
  console.log('Creating game', payload);
  const gameId = nanoid();
  const playerId = getOrCreatePlayerId(payload.sessionToken);

  const player: Player = {
    id: playerId,
    name: payload.playerName,
  };

  const game = gameManager.createGame(gameId);
  joinGame(game, player);

  socket.emit(GAME_CREATED, {
    gameId,
    playerId,
    state: game.getState(),
  });
}

export default handleCreateGame;
