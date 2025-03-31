import { PlayerState, GameState, Card } from '@zole/shared';

export class Game {
  private id: string;
  private players: PlayerState[] = [];
  private deck: Card[] = [];
  private dealt = false;

  constructor(id: string) {
    this.id = id;
  }

  addPlayer(player: PlayerState): void {
    // Add a player to the game
    this.players.push(player);
  }

  getPlayerCount(): number {
    return this.players.length;
  }

  dealCards(): void {
    if (this.dealt || this.players.length !== 3) return;
    // Dealing logic here...
    this.dealt = true;
  }

  getState(): GameState {
    return {
      gameId: this.id,
      players: this.players,
      deck: this.deck,
      playedCards: [],
    };
  }
}
