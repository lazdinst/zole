import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';

interface WebSocketState {
  connected: boolean;
  test: boolean;
  messages: string[];
}

const initialState: WebSocketState = {
  connected: false,
  test: false,
  messages: [],
};

const websocketSlice = createSlice({
  name: 'websocket',
  initialState,
  reducers: {
    setWebSocketConnected: (state) => {
      state.connected = true;
    },
    setWebSocketDisconnected: (state) => {
      state.connected = false;
    },
    receiveWebSocketMessage: (state, action: PayloadAction<string>) => {
      state.messages.push(action.payload);
    },
  },
});

export type { WebSocketState };
export const {
  setWebSocketConnected,
  setWebSocketDisconnected,
  receiveWebSocketMessage,
} = websocketSlice.actions;

export const connectSocket = () => {
  console.log('Connecting socket func: connectSocket...');
  return (dispatch: Dispatch) => {
    dispatch({ type: 'socket/connect' });
  };
};

export const disconnectSocket = () => {
  console.log('Disconnecting socket func: disconnectSocket ...');
  return (dispatch: Dispatch) => {
    dispatch({ type: 'socket/disconnect' });
  };
};

export default websocketSlice.reducer;
