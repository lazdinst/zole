import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    cursor: default;
  }
  html {
    font-family: 'Montserrat', sans-serif;
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 0.75rem; /* width of the entire scrollbar */
  }

  *::-webkit-scrollbar-track {
    background: rgb(0, 0, 0, 0); /* color of the track */
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      theme.colors.components.scrollbar.thumb}; /* color of the scroll thumb */
    border-radius: 5px; /* roundness of the scroll thumb */
    border: 3px solid rgb(0, 0, 0, 0); /* creates padding around the scroll thumb */
  }
`;

export default GlobalStyle;
