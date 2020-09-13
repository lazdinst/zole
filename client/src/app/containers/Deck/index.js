class Deck {
  constructor(props) {
    this.state = {
      deck: [],
      middle: [],
      suits: ['♣', '♠', '♥', '♦'],
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
      },
    }
  }

  generate() {
    let { deck, suits, values } = this.state;

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
     const { invalidSuitPairs } = this.state;
      if(invalidSuitPairs.includes(suitValuePair)) {
        return false;
      } else {
        return true;
      }
    }
    
    const getPointValue = card => {
      let { pointMap } = this.state;
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
  
  deal = playerCount => {
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
    
    if(!this.deck) {
      console.log('There is not deck');
      return;
    } else {
      const middle = [];
      // Generate middle pile
      for(let i = 0; i < 2; i++) {
        let idx = getRandomIndex(this.deck)
        let card = this.deck[idx];
        this.deck = removeCardFromDeck(this.deck, idx);
        middle.push(card);
      };
      this.middle = middle;
    
      const players = [];
      // Deal cards to players
      for (let j = 0; j < playerCount; j++) {
        const player = [];
        for(let i = 0; i < 8; i++) {
          let idx = getRandomIndex(this.deck)
          let card = this.deck[idx];
          removeCardFromDeck(this.deck, idx);
          player.push(card);
        }
        players.push(player);
      }
      this.players = players;

      // console.log('Deal Complete! ', this.deck)
      // console.log('Deal Complete! ', players)
      // return { deck, middle, players };
    }
  }

  print() {
    for(let i = 0; i < this.deck.length; i++) {
      console.log(this.deck[i]);
    }
  }
}

export default Deck;