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
import GameLayout from './GameLayout';
import styled from 'styled-components';

const CardArea = styled.div`
  display: flex;
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
    // need to set current player to the player 1
  };

  const playerComponents = players.map((player) => (
    <div key={player.id}>
      <h2>{player.name}</h2>
      <CardArea>
        {player.hand.map((card) => (
          <Card
            key={card.suit + card.rank}
            suit={card.suit}
            rank={card.rank}
            onClick={() => handlePlayCard(player.id, card)}
          />
        ))}
      </CardArea>
    </div>
  ));

  const currentTrickComponent = (
    <div>
      <h2>Current Trick</h2>
      {currentTrick.map((card) => (
        <Card key={card.suit + card.rank} suit={card.suit} rank={card.rank} />
      ))}
    </div>
  );

  return (
    <GameLayout players={playerComponents} currentTrick={currentTrickComponent}>
      <button onClick={handleDealCards}>Deal Cards</button>
    </GameLayout>
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
