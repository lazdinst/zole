import { Middleware, Action } from '@reduxjs/toolkit';
import { initializeSocketListeners } from './listeners';

function isReduxAction(action: unknown): action is Action {
  if (!action) return false;
  return typeof action === 'object' && 'type' in action;
}

const socketMiddleware = (): Middleware => {
  let socket: WebSocket | null = null;

  return ({ dispatch, getState }) =>
    (next) =>
    (action) => {
      if (isReduxAction(action)) {
        if (action.type === 'socket/connect') {
          if (!socket) {
            const HOST = import.meta.env.VITE_EEIP_SERVER_HOST || 'localhost';
            const PORT = import.meta.env.VITE_EEIP_SERVER_PORT || 9000;

            const WS_URL = `ws://${HOST}:${PORT}/eeip_ws`;
            socket = new WebSocket(WS_URL);
            initializeSocketListeners(socket, getState, dispatch);
          }
        }

        if (action.type === 'socket/disconnect') {
          if (socket) {
            socket.close();
            socket = null;
          }
        }
      }

      return next(action);
    };
};

export default socketMiddleware;
