import { io } from 'socket.io-client';

const SOCKET_URL = 'http://localhost:5000'; // Your WebSocket server URL

const socket = io(SOCKET_URL);

socket.on('connect', () => {
  console.log('Connected to WebSocket server!');

  socket.emit('game:check'); // Check if any games exist
  socket.emit('game:check'); // Check if any games exist

  // Send a game:create event after connecting
  socket.emit('game:create', { playerName: 'Player1', sessionToken: '123abc' });
});

// Listen for the existing games response
socket.on('game:existing', (data) => {
  if (data && data.games && data.games.length > 0) {
    console.log('Existing games:', data.games);
    // You can choose to join the first game or handle it differently
  } else {
    console.log('No existing games found, creating a new one...');
    socket.emit('game:create', {
      playerName: 'Player1',
      sessionToken: '123abc',
    });
  }
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
