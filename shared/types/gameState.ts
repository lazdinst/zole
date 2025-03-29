import { Player } from './player';
import { Card } from './card';

export interface GameState {
  players: Player[];
  deck: Card[];
  playedCards: Card[];
  currentTurnPlayerId: string;
}
