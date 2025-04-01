import { Player } from "./player";
import { Card } from "./card";

export interface PlayerState extends Player {
  hand: Card[];
  roundScore: number;
  gameScore: number;
}
