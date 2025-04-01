import { Server as HttpServer } from 'http';
import { Server as SocketIOServer, Socket } from 'socket.io';
import { messageHandlers } from './messageRegistry';

let io: SocketIOServer;

export function setupSocketServer(server: HttpServer) {
  io = new SocketIOServer(server, {
    cors: {
      origin: '*', // configure later for production
    },
  });

  io.on('connection', (socket: Socket) => {
    console.log(`🟢 Socket connected: ${socket.id}`);

    Object.entries(messageHandlers).forEach(([eventType, handler]) => {
      socket.on(eventType, (data) => {
        console.log(`Received event: ${eventType}`);
        handler(socket, data); // Call the handler for the event type
      });
    });

    socket.on('disconnect', () => {
      console.log(`🔴 Socket disconnected: ${socket.id}`);
    });
  });
}
