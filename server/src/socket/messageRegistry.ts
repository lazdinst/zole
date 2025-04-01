import { Socket } from 'socket.io';
import { ClientToServerEventMap } from './events';
import { handleCreateGame, handleJoinGame } from './messageHandlers';
import { GAME_CREATE, GAME_JOIN } from '@zole/shared';

type MessageHandlerMap = {
  [K in keyof ClientToServerEventMap]: (
    socket: Socket,
    payload: ClientToServerEventMap[K],
  ) => void;
};

export const messageHandlers: MessageHandlerMap = {
  [GAME_CREATE]: handleCreateGame,
  [GAME_JOIN]: handleJoinGame,
};
