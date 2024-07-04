import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import {
  playCard,
  collectTrick,
  updateScore,
  setCurrentPlayer,
  dealCards,
} from '../redux/slices/game';
import Card from './Card';
import styled from 'styled-components';

const GameBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PlayerRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;

  &:nth-child(1) {
    margin-bottom: 20px;
  }

  &:nth-child(3) {
    margin-top: 20px;
  }
`;

const TrickRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const GameBoard: React.FC = () => {
  const dispatch = useDispatch();
  const players = useSelector((state: RootState) => state.game.players);
  const currentTrick = useSelector(
    (state: RootState) => state.game.currentTrick,
  );
  const currentPlayer = useSelector(
    (state: RootState) => state.game.currentPlayer,
  );
  console.log(players, currentTrick, currentPlayer);

  const handlePlayCard = (
    playerId: string,
    card: { suit: string; rank: string; value: number },
  ) => {
    dispatch(playCard({ playerId, card }));
    if (currentTrick.length === 3) {
      // Determine winner and collect trick
      const winnerId = determineTrickWinner(currentTrick);
      dispatch(collectTrick({ playerId: winnerId }));
      dispatch(
        updateScore({
          playerId: winnerId,
          score: calculateScore(currentTrick),
        }),
      );
      dispatch(setCurrentPlayer(winnerId));
    }
  };

  const handleDealCards = () => {
    dispatch(dealCards());
  };

  return (
    <GameBoardContainer>
      <h1>Game Board</h1>
      <button onClick={handleDealCards}>Deal Cards</button>
      <PlayerRow>
        {players[0]?.hand.map((card) => (
          <Card
            key={card.suit + card.rank}
            suit={card.suit}
            rank={card.rank}
            onClick={() => handlePlayCard(players[0].id, card)}
          />
        ))}
      </PlayerRow>
      <TrickRow>
        {currentTrick.map((card) => (
          <Card key={card.suit + card.rank} suit={card.suit} rank={card.rank} />
        ))}
      </TrickRow>
      <PlayerRow>
        {players[1]?.hand.map((card) => (
          <Card
            key={card.suit + card.rank}
            suit={card.suit}
            rank={card.rank}
            onClick={() => handlePlayCard(players[1].id, card)}
          />
        ))}
      </PlayerRow>
      <PlayerRow>
        {players[2]?.hand.map((card) => (
          <Card
            key={card.suit + card.rank}
            suit={card.suit}
            rank={card.rank}
            onClick={() => handlePlayCard(players[2].id, card)}
          />
        ))}
      </PlayerRow>
    </GameBoardContainer>
  );
};

const determineTrickWinner = (
  trick: { suit: string; rank: string; value: number }[],
): string => {
  // Logic to determine the winner of the trick based on Zole rules
  console.log('Determining trick winner...');
  console.log(trick);
  return ''; // Placeholder return value
};

const calculateScore = (
  trick: { suit: string; rank: string; value: number }[],
): number => {
  return trick.reduce((total, card) => total + card.value, 0);
};

export default GameBoard;
