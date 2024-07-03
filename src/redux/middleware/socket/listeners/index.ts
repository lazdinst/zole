import { RootState, AppDispatch } from '../../../store';

import {
  setWebSocketConnected,
  setWebSocketDisconnected,
} from '../../../slices/websocket';
import { disconnected } from '../../../slices/api';

export interface StatusMessagePayloadType {
  state: string;
}

export interface StatusMessageType {
  type: 'status';
  message?: string;
  payload: StatusMessagePayloadType;
}

export type WebsocketMessage = StatusMessageType;

export const initializeSocketListeners = (
  socket: WebSocket,
  getState: () => RootState,
  dispatch: AppDispatch,
) => {
  setupSocketStateListeners(socket, getState, dispatch);
};

export const setupSocketStateListeners = (
  socket: WebSocket,
  getState: () => RootState,
  dispatch: AppDispatch,
) => {
  socket.onopen = () => {
    console.log('Websocket Opened ...');
    dispatch(setWebSocketConnected());
  };

  socket.onclose = () => {
    console.log('Websocket Closed...');
    dispatch(disconnected());
    dispatch(setWebSocketDisconnected());
  };

  socket.onerror = (error) => {
    console.error('WebSocket error:', error);
  };

  socket.onmessage = (event) => {
    const message: WebsocketMessage = JSON.parse(event.data);
    console.log('Websocket OnMessage:', message);
    const messageType = message.type;
    console.log('Websocket OnMessage Type:', messageType);
  };
};
