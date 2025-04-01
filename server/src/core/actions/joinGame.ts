import { Game } from '../Game';
import { Player, REQUIRED_PLAYER_COUNT } from '@zole/shared';

export function joinGame(game: Game, player: Player) {
  game.addPlayer(player);

  if (game.getPlayerCount() === REQUIRED_PLAYER_COUNT) {
    // Deal cards only if the game is full
    game.dealCards();
  }

  return game.getState();
}
