import { io } from 'socket.io-client';

const SOCKET_URL = 'http://localhost:5000'; // Your WebSocket server URL

const socket = io(SOCKET_URL);

socket.on('connect', () => {
  console.log('Connected to WebSocket server!');

  // Send a test message after connecting
  socket.emit('test-message', { message: 'Hello from the test client!' });

  // Send a game:create event after connecting
  socket.emit('game:create', { playerName: 'Player1', sessionToken: '123abc' });
});

socket.on('test-response', (data) => {
  console.log('Received response from server:', data);
});

// Listen for the game:create response (game created)
socket.on('game:created', (data) => {
  console.log('Game created response:', data);
  // You can log the game ID or any other info the server sends back
});

// Listen for the game:join response (just for testing)
socket.on('game:joined', (data) => {
  console.log('Game joined response:', data);
});

socket.on('disconnect', () => {
  console.log('Disconnected from WebSocket server');
});
