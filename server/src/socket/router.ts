import { Socket } from 'socket.io';
import { ClientToServerEventMap } from './events';
import { messageHandlers } from './messageRegistry';

export function routeMessage<K extends keyof ClientToServerEventMap>(
  socket: Socket,
  message: { type: K; payload: ClientToServerEventMap[K] },
) {
  console.log(`Received message of type: ${message.type}`);
  const handler = messageHandlers[message.type];
  handler(socket, message.payload);
}
