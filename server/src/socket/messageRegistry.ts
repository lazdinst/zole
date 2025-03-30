import { Socket } from 'socket.io';
import { ClientToServerEventMap } from './events';
import { handleCreateGame, handleJoinGame } from './messageHandlers';

type MessageHandlerMap = {
  [K in keyof ClientToServerEventMap]: (
    socket: Socket,
    payload: ClientToServerEventMap[K],
  ) => void;
};

export const messageHandlers: MessageHandlerMap = {
  'game:create': handleCreateGame,
  'game:join': handleJoinGame,
};
