import {
  GameState,
  GAME_CREATE,
  GAME_JOIN,
  GAME_CREATED,
  GAME_STATE,
} from '@zole/shared';

export type ClientToServerEventMap = {
  [GAME_CREATE]: { playerName: string; sessionToken: string };
  [GAME_JOIN]: { gameId: string; playerName: string; sessionToken: string };
};

export type ServerToClientEventMap = {
  [GAME_CREATED]: { gameId: string; playerId: string; state: GameState };
  [GAME_STATE]: { state: GameState };
};

export type IncomingMessage = {
  [K in keyof ClientToServerEventMap]: {
    type: K;
    payload: ClientToServerEventMap[K];
  };
}[keyof ClientToServerEventMap];
