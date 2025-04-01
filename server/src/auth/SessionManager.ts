import { nanoid } from 'nanoid';
import { Player } from '../core/Player';
import { Player as PlayerType } from '@zole/shared';
import { generateSessionToken } from './generateSessionToken';

export class SessionManager {
  private sessions: Map<
    string,
    {
      player: PlayerType;
      lastActivity: number;
      sockets: Set<string>;
    }
  > = new Map();
  private sessionExpiryTime: number = 3600000; // 1 hour in milliseconds

  // Reconnect or create a new session
  handleConnection(
    name: string,
    socketId: string,
    sessionToken?: string,
  ): { player: PlayerType; sessionToken: string } {
    const now = Date.now();
    let player = null;

    if (!sessionToken || !this.validateSession(sessionToken)) {
      sessionToken = generateSessionToken();
      player = this.createPlayerInstance(name, sessionToken).getState();
    } else {
      const session = this.sessions.get(sessionToken)!;
      session.lastActivity = now;
      session.sockets.add(socketId);
      player = session.player;
    }

    this.sessions.set(sessionToken, {
      player: player,
      lastActivity: now,
      sockets: new Set([socketId]),
    });

    return {
      player,
      sessionToken,
    };
  }

  createPlayerInstance(name: string, sessionToken: string): Player {
    const id = nanoid();
    const player = new Player(id, name, sessionToken);
    return player;
  }

  // Validate session token
  validateSession(sessionToken: string): boolean {
    return this.sessions.has(sessionToken);
  }

  // Remove expired sessions
  cleanupExpiredSessions(): void {
    const now = Date.now();
    for (const [token, session] of this.sessions.entries()) {
      if (now - session.lastActivity > this.sessionExpiryTime) {
        this.sessions.delete(token);
      }
    }
  }

  // Remove a player's session
  removeSession(sessionToken: string): void {
    this.sessions.delete(sessionToken);
  }

  getSessions(): Map<string, { player: PlayerType; lastActivity: number }> {
    return this.sessions;
  }
}
