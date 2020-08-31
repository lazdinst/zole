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

  print() {
    for(let i = 0; i < this.deck.length; i++) {
      console.log(this.deck[i]);
    }
  }

}

let deck = new Deck();
deck.generate();
deck.print();

