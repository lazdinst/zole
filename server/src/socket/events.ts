import { Socket } from 'socket.io';
import {
  GameState,
  GAME_CREATE,
  GAME_JOIN,
  GAME_CREATED,
  GAME_STATE,
  PLAYER_REGISTER,
} from '@zole/shared';

export type ClientToServerEventMap = {
  [GAME_CREATE]: { playerName: string; sessionToken: string };
  [GAME_JOIN]: { gameId: string; playerName: string; sessionToken: string };
  [PLAYER_REGISTER]: { name: string; socket: Socket; sessionToken: string };
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
