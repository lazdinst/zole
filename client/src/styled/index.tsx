import React, { ReactNode } from 'react';
import styled, {
  ThemeProvider as StyledThemeProvider,
} from 'styled-components';
import { dark } from './themes';
import GlobalStyle from './themes/global';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`;

const ThemeContext = React.createContext<
  | {
      theme: typeof dark;
    }
  | undefined
>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const selectedTheme = dark;

  return (
    <ThemeContext.Provider value={{ theme: selectedTheme }}>
      <StyledThemeProvider theme={selectedTheme}>
        <GlobalStyle />
        <AppWrapper>{children}</AppWrapper>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export { dark as defaultTheme };
