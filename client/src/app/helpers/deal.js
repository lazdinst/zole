const removeCardFromDeck = (deck, idx) => {
  if(Array.isArray(deck)) {
    deck.splice(idx, 1)
    return deck;
  } else {
    return [];
  }
}

const getRandomIndex = list => {
  if(Array.isArray(list)) {
    return Math.floor(Math.random() * list.length);
  } else {
    return 0;
  }
}

export const deal = (deck, players) => {
  const middle = [];
  
  // Generate middle pile
  for(let i = 0; i < 2; i++) {
    let idx = getRandomIndex(deck)
    let card = deck[idx];
    deck = removeCardFromDeck(deck, idx);
    middle.push(card);
  };

  // Deal cards to players
  for (const player in players) {
    for(let i = 0; i < 8; i++) {
      let idx = getRandomIndex(deck)
      let card = deck[idx];
      removeCardFromDeck(deck, idx);
      players[player].cards.push(card);
    }
  }
  console.log('Deal Complete! ', deck)
  return { deck, middle, players };
}

// export const deal = deck => {
//   const middle = [];
//   const sets = [];

//   // Generate middle pile
//   for(let i = 0; i < 2; i++) {
//     let idx = getRandomIndex(deck)
//     let card = deck[idx];
//     deck = removeCardFromDeck(deck, idx);
//     middle.push(card);
//   };
//   sets.push(middle);

//   // Deal cards to players
//   for (let j = 0; j < 3; j++) {
//     let player = []
//     for(let i = 0; i < 8; i++) {
//       let idx = getRandomIndex(deck)
//       let card = deck[idx];
//       removeCardFromDeck(deck, idx);
//       player.push(card);
//     }
//     sets.push(player);
//   }

//   console.log('Deal Complete! ', deck)
//   return { sets };
// }