import { Game } from '../Game';
import { PlayerState } from '@zole/shared';

export function joinGame(game: Game, player: PlayerState) {
  game.addPlayer(player);
  return game.getState();
}
