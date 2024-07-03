import { keyframes } from 'styled-components';

export const fallAndBounce = keyframes`
  0% {
    transform: translateY(-100vh);
    animation-timing-function: ease-in;
  }
  60% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  70% {
    transform: translateY(-20px);
    animation-timing-function: ease-in;
  }
  80% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  90% {
    transform: translateY(-10px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
`;

export default fallAndBounce;
