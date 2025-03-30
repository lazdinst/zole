import { Card, Player, PlayerState, GameState } from '@zole/shared/types';
import { generateDeck, shuffle } from './utils/shuffle';

export class Game {
  private id: string;
  private players: PlayerState[] = [];
  private deck: Card[] = [];
  private dealt = false;

  constructor(id: string) {
    this.id = id;
    this.deck = shuffle(generateDeck());
  }

  addPlayer(basePlayer: Player): void {
    const playerState: PlayerState = {
      ...basePlayer,
      hand: [],
      roundScore: 0,
      gameScore: 0,
    };

    this.players.push(playerState);
  }

  getPlayerCount(): number {
    return this.players.length;
  }

  dealCards(): void {
    if (this.dealt || this.players.length !== 3) return;

    const handSize = 8;
    for (let i = 0; i < this.players.length; i++) {
      this.players[i].hand = this.deck.slice(i * handSize, (i + 1) * handSize);
    }

    this.dealt = true;
  }

  getState(): GameState {
    return {
      gameId: this.id,
      deck: this.deck,
      playedCards: [],
      players: this.players,
      currentTurnPlayerId: this.players[0]?.id || '',
      deckSize: this.deck.length,
    };
  }
}
