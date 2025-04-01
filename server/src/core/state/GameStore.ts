import { Game } from '../Game';
import { PlayerState } from '@zole/shared';

export class GameStore {
  private games: Map<string, Game> = new Map(); // Track games by gameId
  private activePlayers: Map<
    string,
    { playerName: string; sessionTokens: string[] }
  > = new Map(); // Track players globally

  // Add a player to a specific game
  addPlayerToGame(gameId: string, player: PlayerState): void {
    const game = this.games.get(gameId);
    if (game) {
      game.addPlayer(player); // Use the Game class method to add players to the game
    }
  }

  // Create a new game
  createGame(gameId: string): Game {
    const game = new Game(gameId);
    this.games.set(gameId, game);
    return game;
  }

  // Get a game by gameId
  getGame(gameId: string): Game | undefined {
    return this.games.get(gameId);
  }

  // Add a player globally to the active players
  addActivePlayer(
    socketId: string,
    playerName: string,
    sessionToken: string,
  ): void {
    if (!this.activePlayers.has(socketId)) {
      this.activePlayers.set(socketId, {
        playerName,
        sessionTokens: [sessionToken],
      });
    } else {
      const player = this.activePlayers.get(socketId);
      if (player && !player.sessionTokens.includes(sessionToken)) {
        player.sessionTokens.push(sessionToken);
      }
    }
  }

  // Get a player by socketId
  getActivePlayer(
    socketId: string,
  ): { playerName: string; sessionTokens: string[] } | undefined {
    return this.activePlayers.get(socketId);
  }
}

export const gameStore = new GameStore();
