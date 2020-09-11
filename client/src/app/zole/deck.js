const data = {
  suits: ['c', 's', 'h', 'd'],
  values: ['A', '7', '8', '9', '10', 'J', 'Q', 'K'],
  invalidSuitPairs: ['c8', 'c7', 's8', 's7', 'h8', 'h7'],
  pointMap: {
    'Q': 3,
    'J': 2,
    'A': 11,
    '10': 10,
    'K': 4,
    '9': 0,
    '8': 0,
    '7': 0,
  }
}

class Deck {
  constructor() {
    this.deck = [];
  }

  generate() {
    let deck = [];
    let { suits, values } = data;

    const isTrump = card => {

      if(card.value === ('Q' || 'J')) {
        return true;
      }
      
      if(card.suit === 'd') {
        return true;
      }
      
      return false;
    };

    const isValidCard = card => {

      let suitValuePair = `${card.suit}${card.value}`
     const { invalidSuitPairs } = data;
      if(invalidSuitPairs.includes(suitValuePair)) {
        return false;
      } else {
        return true;
      }
    }
    
    const getPointValue = card => {
      let { pointMap } = data;
      return pointMap[card.value];
    };
  
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
    
    this.deck = deck;
    return deck;
  }

  deal() {
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

  print() {
    for(let i = 0; i < this.deck.length; i++) {
      console.log(this.deck[i]);
    }
  }

}

let deck = new Deck();
deck.generate();
deck.print();

