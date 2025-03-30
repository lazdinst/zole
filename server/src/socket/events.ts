import { GameState } from '@zole/shared';

export type ClientToServerEventMap = {
  'game:create': { playerName: string; sessionToken: string };
  'game:join': { gameId: string; playerName: string; sessionToken: string };
};

export type ServerToClientEventMap = {
  game_created: { gameId: string; playerId: string; state: GameState };
  game_state: { state: GameState };
};

export type IncomingMessage = {
  [K in keyof ClientToServerEventMap]: {
    type: K;
    payload: ClientToServerEventMap[K];
  };
}[keyof ClientToServerEventMap];
