export const SUITS = ["hearts", "diamonds", "clubs", "spades"] as const;
export const RANKS = ["A", "K", "Q", "J", "10", "9", "8", "7"] as const;

// Add a stength prop for each card
export const ZOLE_CARDS = [
  // Queens
  { suit: "clubs", rank: "Q", points: 3, isTrump: true, strength: 1 },
  { suit: "spades", rank: "Q", points: 3, isTrump: true, strength: 2 },
  { suit: "hearts", rank: "Q", points: 3, isTrump: true, strength: 3 },
  { suit: "diamonds", rank: "Q", points: 3, isTrump: true, strength: 4 },

  // Jacks
  { suit: "clubs", rank: "J", points: 2, isTrump: true, strength: 5 },
  { suit: "spades", rank: "J", points: 2, isTrump: true, strength: 6 },
  { suit: "hearts", rank: "J", points: 2, isTrump: true, strength: 7 },
  { suit: "diamonds", rank: "J", points: 2, isTrump: true, strength: 8 },

  // Diamond Trumps
  { suit: "diamonds", rank: "A", points: 11, isTrump: true, strength: 9 },
  { suit: "diamonds", rank: "10", points: 10, isTrump: true, strength: 10 },
  { suit: "diamonds", rank: "K", points: 4, isTrump: true, strength: 11 },
  { suit: "diamonds", rank: "9", points: 0, isTrump: true, strength: 12 },
  { suit: "diamonds", rank: "8", points: 0, isTrump: true, strength: 13 },
  { suit: "diamonds", rank: "7", points: 0, isTrump: true, strength: 14 },

  // Non-Trumps
  { suit: "clubs", rank: "A", points: 11, isTrump: false, strength: 15 },
  { suit: "clubs", rank: "K", points: 4, isTrump: false, strength: 16 },
  { suit: "clubs", rank: "10", points: 10, isTrump: false, strength: 17 },
  { suit: "clubs", rank: "9", points: 0, isTrump: false, strength: 18 },

  { suit: "spades", rank: "A", points: 11, isTrump: false, strength: 19 },
  { suit: "spades", rank: "K", points: 4, isTrump: false, strength: 20 },
  { suit: "spades", rank: "10", points: 10, isTrump: false, strength: 21 },
  { suit: "spades", rank: "9", points: 0, isTrump: false, strength: 22 },

  { suit: "hearts", rank: "A", points: 11, isTrump: false, strength: 23 },
  { suit: "hearts", rank: "K", points: 4, isTrump: false, strength: 24 },
  { suit: "hearts", rank: "10", points: 10, isTrump: false, strength: 25 },
  { suit: "hearts", rank: "9", points: 0, isTrump: false, strength: 26 },
] as const;
