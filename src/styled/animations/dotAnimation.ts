import { keyframes } from 'styled-components';

const dotAnimation = keyframes`
  0%, 100% { content: ''; }
  33% { content: '.'; }
  66% { content: '. .'; }
  99% { content: '. . .'; }
`;

export default dotAnimation;
