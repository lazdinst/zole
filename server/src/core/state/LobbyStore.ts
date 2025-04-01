import { Player } from '@zole/shared';

class LobbyStore {
  private players: Map<string, Player> = new Map(); // Store players in the lobby by session token

  // Add player to the lobby
  addPlayer(player: Player): void {
    this.players.set(player.id, player);
  }

  // Remove player from the lobby
  removePlayer(playerId: string): void {
    this.players.delete(playerId);
  }

  // Get all players in the lobby
  getPlayers(): Player[] {
    return Array.from(this.players.values());
  }

  // Get a specific player by ID
  getPlayer(playerId: string): Player | undefined {
    return this.players.get(playerId);
  }
}

export const lobbyStore = new LobbyStore();
