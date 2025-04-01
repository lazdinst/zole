import { PlayerState, Card } from '@zole/shared';

export class Player {
  id: string;
  name: string;
  sessionTokens: string[];
  roundScore: number;
  gameScore: number;
  hand: Card[];

  constructor(id: string, name: string, sessionToken: string) {
    this.id = id;
    this.name = name;
    this.sessionTokens = [sessionToken]; // Store session token for the player
    this.roundScore = 0;
    this.gameScore = 0;
    this.hand = [];
  }

  // Add a session token for player
  addSessionToken(token: string) {
    if (!this.sessionTokens.includes(token)) {
      this.sessionTokens.push(token);
    }
  }

  // Update round score
  updateRoundScore(points: number) {
    this.roundScore += points;
  }

  // Update game score
  updateGameScore(points: number) {
    this.gameScore += points;
  }

  // Add card to player's hand
  addCardToHand(card: Card) {
    this.hand.push(card);
  }

  // Clear the player's hand at the start of a new round
  clearHand() {
    this.hand = [];
  }

  // Get the current state of the player (for game state)
  getState(): PlayerState {
    return {
      id: this.id,
      name: this.name,
      roundScore: this.roundScore,
      gameScore: this.gameScore,
      hand: this.hand,
    };
  }
}
