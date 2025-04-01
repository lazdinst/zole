import { nanoid } from 'nanoid';
import { Socket } from 'socket.io';
import { GAME_CREATED } from '@zole/shared';
import { gameManager } from '../../../core/state/instances/GameManagerInstance';

export function handleCreateGame(socket: Socket) {
  const gameId = nanoid();
  const game = gameManager.createGame(gameId);
  socket.emit(GAME_CREATED, {
    gameId,
    state: game.getState(),
  });
}

export default handleCreateGame;
