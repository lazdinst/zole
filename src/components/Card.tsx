import React from 'react';
import styled from 'styled-components';

interface CardProps {
  suit: string;
  rank: string;
  onClick?: () => void;
}

const CardContainer = styled.div`
  width: 50px;
  height: 70px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 10px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardTop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 5px;
`;

const CardBottom = styled(CardTop)`
  transform: rotate(180deg);
`;

const Rank = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Suit = styled.div`
  font-size: 20px;
`;

const Card: React.FC<CardProps> = ({ suit, rank, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <CardTop>
        <Rank>{rank}</Rank>
        <Suit>{getSuitSymbol(suit)}</Suit>
      </CardTop>
      <CardBottom>
        <Rank>{rank}</Rank>
        <Suit>{getSuitSymbol(suit)}</Suit>
      </CardBottom>
    </CardContainer>
  );
};

const getSuitSymbol = (suit: string) => {
  switch (suit) {
    case 'hearts':
      return '♥';
    case 'diamonds':
      return '♦';
    case 'clubs':
      return '♣';
    case 'spades':
      return '♠';
    default:
      return '';
  }
};

export default Card;
