import express from 'express';
import cors from 'cors';
import { Card } from '@zole/shared/types';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Zole Game Server');
});

// ✅ Test route using shared type
app.get('/test-card', (req, res) => {
  const card: Card = {
    suit: 'hearts',
    rank: 'J',
  };

  res.json(card);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
