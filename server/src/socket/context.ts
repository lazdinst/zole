// Active players are tracked by socketId, which maps to player name and their session tokens
export const activePlayers: Map<
  string,
  { playerName: string; sessionTokens: string[] }
> = new Map();
