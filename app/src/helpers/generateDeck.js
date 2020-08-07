import data from './data';

export const generateDeck = () => {
  let deck = [];
  let { suits, values } = data;

  for(let i = 0; i < suits.length; i++) {
      let suit = suits[i];
    for(let j = 0; j < values.length; j++) {

      let value = values[j];
      let card = {
        suit: suit, 
        value: value,
        trump: false,
        points: 0
      };
      card.trump = isTrump(card);
      card.points = getPointValue(card);

      if(isValidCard(card)) {
        deck.push(card);
      }
    }
  }

  return deck;
}

const isValidCard = card => {

  let suitValuePair = `${card.suit}${card.value}`
 const { invalidSuitPairs } = data;
  if(invalidSuitPairs.includes(suitValuePair)) {
    return false;
  } else {
    return true;
  }
}

const isTrump = card => {

  if(card.value === ('Q' || 'J')) {
    return true;
  }
  
  if(card.suit === 'd') {
    return true;
  }
  
  return false;
};

const getPointValue = card => {
  let { pointMap } = data;
  return pointMap[card.value];
};