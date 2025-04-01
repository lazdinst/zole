import express from 'express';
import { createServer } from 'http';
import { setupSocketServer } from './socket/socketServer';
import { sessionManager } from 'core/state/instances';

const app = express();
const port = process.env.PORT || 5000;

const httpServer = createServer(app);
setupSocketServer(httpServer); // attach socket server

app.get('/', (_req, res) => {
  res.send('Zole Game Server is running');
});

app.get('/sessions', (_req, res) => {
  console.info('Sessions Requested...');
  const sessions = Array.from(sessionManager.getSessions().entries()).map(
    ([key, value]) => ({ key, value }),
  );
  res.send(JSON.stringify(sessions, null, 2));
});

httpServer.listen(port, () => {
  console.log(`🚀 HTTP + WS server running on port ${port}`);
});
