import { SUITS, RANKS } from "../constants/deck";

export type Suit = (typeof SUITS)[number];
export type Rank = (typeof RANKS)[number];

export interface Card {
  suit: Suit;
  rank: Rank;
  isTrump: boolean;
  points: number;
  strength: number;
}
