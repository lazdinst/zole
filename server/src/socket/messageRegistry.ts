import { Socket } from 'socket.io';
import { ClientToServerEventMap } from './events';
import {
  handleCreateGame,
  handleJoinGame,
  handleRegisterPlayer,
} from './messageHandlers';
import { GAME_CREATE, GAME_JOIN, PLAYER_REGISTER } from '@zole/shared';

type MessageHandlerMap = {
  [K in keyof ClientToServerEventMap]: (
    socket: Socket,
    payload: ClientToServerEventMap[K],
  ) => void;
};

export const messageHandlers: MessageHandlerMap = {
  [GAME_CREATE]: handleCreateGame,
  [PLAYER_REGISTER]: handleRegisterPlayer,
  [GAME_JOIN]: handleJoinGame,
};
