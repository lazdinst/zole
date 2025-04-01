import { Game } from './Game';

export class GameManager {
  private games: Map<string, Game> = new Map();

  getGame(gameId: string): Game | undefined {
    return this.games.get(gameId);
  }

  createGame(gameId: string): Game {
    const game = new Game(gameId);
    this.games.set(gameId, game);
    return game;
  }

  hasGame(gameId: string): boolean {
    return this.games.has(gameId);
  }

  getAllGames(): Game[] {
    return Array.from(this.games.values());
  }
}
