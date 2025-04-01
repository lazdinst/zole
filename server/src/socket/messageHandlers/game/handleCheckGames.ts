import { Socket } from 'socket.io';
import { gameManager } from '../../../core/GameManagerInstance';
import { GAME_EXISTING } from '@zole/shared';

export function handleCheckGames(socket: Socket) {
  const existingGames = gameManager.getAllGames();
  socket.emit(GAME_EXISTING, { games: existingGames });
}
export default handleCheckGames;
