import { nanoid } from 'nanoid';

const sessionToPlayerId = new Map<string, string>();

export function getOrCreatePlayerId(sessionToken: string): string {
  if (!sessionToPlayerId.has(sessionToken)) {
    sessionToPlayerId.set(sessionToken, nanoid());
  }
  return sessionToPlayerId.get(sessionToken)!;
}
