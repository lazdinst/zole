import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Header = styled.div`
  grid-area: 1 / 2 / 2 / 8;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
`;

const PlayerArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlayerBottom = styled(PlayerArea)`
  grid-area: 8 / 3 / 9 / 7;
`;

const PlayerLeft = styled(PlayerArea)`
  grid-area: 3 / 1 / 7 / 2;
`;

const PlayerRight = styled(PlayerArea)`
  grid-area: 3 / 8 / 7 / 9;
`;

const CenterArea = styled.div`
  grid-area: 3 / 3 / 7 / 7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 10px;
`;

const TalonCards = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

interface GameLayoutProps {
  children: React.ReactNode;
  players: React.ReactNode[];
  currentTrick: React.ReactNode;
}

const GameLayout: React.FC<GameLayoutProps> = ({
  children,
  players,
  currentTrick,
}) => {
  const currentPlayer = useSelector(
    (state: RootState) => state.game.currentPlayer,
  );

  return (
    <LayoutContainer>
      <Header>Current Turn: {currentPlayer}</Header>
      <PlayerLeft>{players[0]}</PlayerLeft>
      <PlayerBottom>{players[1]}</PlayerBottom>
      <PlayerRight>{players[2]}</PlayerRight>
      <CenterArea>
        <TalonCards>{/* Talon Cards */}</TalonCards>
        {currentTrick}
      </CenterArea>
      {children}
    </LayoutContainer>
  );
};

export default GameLayout;
