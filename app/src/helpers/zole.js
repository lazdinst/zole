// // Q J A 10 K 9 8 7
// // Trumps: All Q J and Diamonds

// var suits = ['c', 's', 'h', 'd'];
// var values = ['A', '7', '8', '9', '10', 'J', 'Q', 'K'];

// const generateDeck = (suits, values) => {
//   let deck = [];


//   for(let i = 0; i < suits.length; i++) {
//       let suit = suits[i];
//     for(let j = 0; j < values.length; j++) {

//       let value = values[j];
//       let card = {
//         suit: suit, 
//         value: value,
//         trump: false,
//         points: 0
//       };
//       card.trump = isTrump(card);
//       card.points = getPointValue(card);

//       if(isValidCard(card)) {
//         deck.push(card);
//       }
//     }
//   }

//   return deck;
// }

// const isValidCard = card => {
//   let suitValuePair = `${card.suit}${card.value}`
//   let invalidPairs = ['c8', 'c7', 's8', 's7', 'h8', 'h7'];
//   if(invalidPairs.includes(suitValuePair)) {
//     return false;
//   } else {
//     return true;
//   }
// }

// const isTrump = card => {
//   if(card.value === ('Q' || 'J')) {
//     return true;
//   }
  
//   if(card.suit === 'd') {
//     return true;
//   }
  
//   return false;
// };

// const getPointValue = card => {
//   let pointMap = {
//     'Q': 3,
//     'J': 2,
//     'A': 11,
//     '10': 10,
//     'K': 4,
//     '9': 0,
//     '8': 0,
//     '7': 0,
//   };

//   return pointMap[card.value];
// };

// let deck = generateDeck(suits, values);

// const playerList = {
//   one: {
//     name: 'Talis',
//     team: null,
//     points: 0,
//     cards: []
//   },
//   two: {
//     name: 'Tiss',
//     team: null,
//     points: 0,
//     cards: []
//   },
//   three: {
//     name: 'Lauris',
//     team: null,
//     points: 0,
//     cards: []
//   }
// }

// const removeCardFromDeck = (deck, index) => {
//   if(Array.isArray(deck)) {
//     deck.splice(index, 1)
//     return deck;
//   } else {
//     return [];
//   }
// }

// const addRandomCardToList = (deck, list, card) => {
//   let idx = getRandomIndex(deck)
//   deck = removeCardFromDeck(deck, idx);
  
// }

// const getRandomIndex = list => {
//   if(Array.isArray(list)) {
//     return Math.floor(Math.random() * list.length);
//   } else {
//     return 0;
//   }
// }

// const deal = (deck, players) => {
//   const middle = [];
  
//   // Generate middle pile
//   for(let i = 0; i < 2; i++) {
//     let idx = getRandomIndex(deck)
//     let card = deck[idx];
//     deck = removeCardFromDeck(deck, idx);
//     middle.push(card);
//   };

//   // Deal cards to players
//   for (const player in players) {    
//     for(let i = 0; i < 8; i++) {
//       let idx = getRandomIndex(deck)
//       let card = deck[idx];
//       removeCardFromDeck(deck, idx);
//       players[player].cards.push(card);
//     }
//   }
//   console.log('Deal Complete! ', deck)
//   return { deck, middle };
// }

// const { middle } = deal(deck, playerList)
// console.log(middle);
// console.log(playerList);

