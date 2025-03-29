import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { generateDeck } from '../../../utils/deck';

interface Card {
  suit: string;
  rank: string;
  value: number;
}

interface Player {
  id: string;
  name: string;
  hand: Card[];
  tricks: Card[];
  score: number;
}

type GameStateType = 'dealing' | 'bidding' | 'playing' | 'scoring' | 'galds';

interface GameState {
  deck: Card[];
  talon: Card[];
  players: Player[];
  lielais: string | null; // UUID of the Lielais
  mazie: string[]; // UUIDs of the Mazie
  currentTrick: Card[];
  currentPlayer: string | null; // UUID of current player
  gameState: GameStateType;
  startingPlayer: string | null; // UUID of the player who starts the round
}

const initialPlayers: Player[] = [
  { id: uuidv4(), name: 'Player 1', hand: [], tricks: [], score: 0 },
  { id: uuidv4(), name: 'Player 2', hand: [], tricks: [], score: 0 },
  { id: uuidv4(), name: 'Player 3', hand: [], tricks: [], score: 0 },
];

const initialState: GameState = {
  deck: [], // Initialize with your deck generation logic
  talon: [],
  players: initialPlayers,
  lielais: null,
  mazie: [],
  currentTrick: [],
  currentPlayer: null,
  gameState: 'dealing',
  startingPlayer: initialPlayers[0].id,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    initializeDeck(state, action: PayloadAction<Card[]>) {
      state.deck = action.payload;
    },
    dealCards(state) {
      console.log('Dealing cards');

      // Generate and shuffle the deck
      state.deck = generateDeck();

      console.log('Shuffled deck', state.deck);

      // Deal cards to players
      state.players.forEach((player) => {
        player.hand = state.deck.splice(0, 8);
        console.log(`Dealing cards to ${player.name}:`, player.hand);
      });

      // Set talon
      state.talon = state.deck.splice(0, 2);
      console.log('Talon:', state.talon);
    },
    setLielais(state, action: PayloadAction<string>) {
      state.lielais = action.payload;
      state.mazie = state.players
        .filter((player) => player.id !== action.payload)
        .map((player) => player.id);
    },
    playCard(state, action: PayloadAction<{ playerId: string; card: Card }>) {
      state.currentTrick.push(action.payload.card);
      const player = state.players.find(
        (player) => player.id === action.payload.playerId,
      );
      if (player) {
        player.hand = player.hand.filter(
          (card) => card !== action.payload.card,
        );
      }
    },
    collectTrick(state, action: PayloadAction<{ playerId: string }>) {
      const player = state.players.find(
        (player) => player.id === action.payload.playerId,
      );
      if (player) {
        player.tricks.push(...state.currentTrick);
      }
      state.currentTrick = [];
    },
    updateScore(
      state,
      action: PayloadAction<{ playerId: string; score: number }>,
    ) {
      const player = state.players.find(
        (player) => player.id === action.payload.playerId,
      );
      if (player) {
        player.score = action.payload.score;
      }
    },
    setCurrentPlayer(state, action: PayloadAction<string>) {
      state.currentPlayer = action.payload;
    },
    setGameState(state, action: PayloadAction<GameStateType>) {
      state.gameState = action.payload;
    },
    setStartingPlayer(state, action: PayloadAction<string>) {
      state.startingPlayer = action.payload;
    },
  },
});

export const {
  initializeDeck,
  dealCards,
  setLielais,
  playCard,
  collectTrick,
  updateScore,
  setCurrentPlayer,
  setGameState,
  setStartingPlayer,
} = gameSlice.actions;

export default gameSlice.reducer;
