interface Card {
  suit: string;
  rank: string;
  value: number;
}

const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const ranks = ['A', 'K', 'Q', 'J', '10', '9', '8', '7'];

const getCardValue = (rank: string): number => {
  switch (rank) {
    case 'A':
      return 11;
    case '10':
      return 10;
    case 'K':
      return 4;
    case 'Q':
      return 3;
    case 'J':
      return 2;
    default:
      return 0;
  }
};

export const generateDeck = (): Card[] => {
  const deck: Card[] = [];

  // Populate the deck with cards
  suits.forEach((suit) => {
    ranks.forEach((rank) => {
      if (
        (suit !== 'diamonds' || ['A', 'K', 'Q', 'J', '10', '9', '8', '7'].includes(rank)) &&
        !(suit === 'hearts' && rank === '7') &&
        !(suit === 'clubs' && rank === '7') &&
        !(suit === 'spades' && rank === '7')
      ) {
        deck.push({ suit, rank, value: getCardValue(rank) });
      }
    });
  });

  // Shuffle the deck
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  return deck;
};
