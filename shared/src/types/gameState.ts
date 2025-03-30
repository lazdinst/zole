import { Player } from "./player";
import { Card } from "./card";

export interface GameState {
  gameId: string;
  players: Player[];
  deck: Card[];
  playedCards: Card[];
  currentTurnPlayerId: string;
  deckSize: number;
}
