import React from 'react';
import styled from 'styled-components';
import GameBoard from './components/GameBoard';

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <h1>Zole Game</h1>
      <GameBoard />
    </AppContainer>
  );
};

export default App;
