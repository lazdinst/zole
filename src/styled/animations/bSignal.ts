import { keyframes } from 'styled-components';

const bSignal = keyframes`
  50% {
    transform: scale(2);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export default bSignal;
