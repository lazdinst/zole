import express from 'express';
import { createServer } from 'http';
import { setupSocketServer } from './socket/socketServer';

const app = express();
const port = process.env.PORT || 5000;

const httpServer = createServer(app);
setupSocketServer(httpServer); // attach socket server

app.get('/', (_req, res) => {
  res.send('Zole Game Server is running');
});

httpServer.listen(port, () => {
  console.log(`🚀 HTTP + WS server running on port ${port}`);
});
