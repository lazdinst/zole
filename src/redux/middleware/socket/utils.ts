import { WebsocketMessage } from './listeners';
export const parseWebsocketMessage = (message: WebsocketMessage) => {
  const { type, payload } = message;
  return { type, payload };
};
