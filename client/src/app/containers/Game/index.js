import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Deck from '../Deck';
import Board from '../Board';

import ScoreBoard from '../ScoreBoard';

import { 
  setGameState, 
  setDealer, 
  setCenterDeal,
  setPlayerCount,
  updateRoundQueue,
  setRound,
  updateDealerQueue,
} from '../../../store/actions/game';

import { 
  setPlayerCards,
} from '../../../store/actions/players';

class Game extends React.Component {

  newGame = () => {
    const {
      setGameState,
      setCenterDeal,
    } = this.props;

    // Clear Player Cards
    setGameState('S1', 'Clearing Player Deck');
    this.clearPlayerDecks();

    // Set Dealer
    setGameState('S2', 'Setting Dealer')
    this.setPlayerCount();
    this.generateRoundQueue();
    // this.selectDealer();
    // Set Round Queue

    // Generate Deck
    setGameState('S3', 'Generating Deck')
    let deck = this.generateDeck();

    //Deal Players
    setGameState('S4', 'Dealing')
    this.dealCards(deck);

    // Set Middle
    setGameState('S5', 'Generating Middle')
    setCenterDeal(deck.middle);
    
    setGameState('S6', 'Start Round');
    this.startRound();
  }

  generateDeck = () => {
    let deck = new Deck(); 
    deck.generate();
    return deck; 
  }

  dealCards = (deck) => {
    const { players, setPlayerCards } = this.props;

    // Generate Card Arrays
    deck.deal(Object.keys(players).length);

    // Allocate Cards to players
    for(let i = 0; i < deck.players.length; i++) {
      let cards = deck.players[i];
      setPlayerCards(i, cards);
    }
  }

  clearPlayerDecks = () => {
    const { players, setPlayerCards } = this.props;

    // Iterate through players, settings cards to empty array
    for(let i = 0; i < players.length; i++) {
      setPlayerCards(i, []);
    }
  }

  // selectDealer = () => {
  //   const { 
  //     dealer, 
  //     setDealer, 
  //     playerCount,
  //     dealerQueue,
  //   } = this.props;

  //   if(dealer === null) {
  //     setDealer(0);
  //   } else {
  //     if(dealer === (playerCount - 1)) {
  //       setDealer(0);
  //     } else {
  //       setDealer(dealer + 1);
  //     }
  //   }
  // }

  setPlayerCount = () => {
    const { setPlayerCount } = this.props;
    setPlayerCount(3);
  }

  generateRoundQueue = () => {
    const { 
      playerCount, 
      updateRoundQueue,
      setDealer,
      setPlayerTurn,
    } = this.props;

    let queue = [];

    for(let i = 0; i < playerCount; i++) {
      queue.push(i);
    }
    updateDealerQueue(queue);
    
    let dealer = queue.shift();
    setDealer(dealer);

    queue = this.incrementRoundQueue(queue);
    updateRoundQueue(queue);

    let playerTurn = queue.shift();
    
    setPlayerTurn(playerTurn);
  }

  incrementRoundQueue = queue => {
    let q = [...queue];
    let temp = q.shift();
    q.push(temp)
    return q;
  }

  startRound = () => {
    const { 
      round,
      setRound,
    } = this.props;
    setRound(round + 1);
  }

  render() {
    const { round } = this.props;

    return (
      <>
        <header>Zole Game</header>
        <div>Round: {round}</div>
        <button onClick={this.newGame}>New Game</button>
        <hr/>
          <Board />
        <hr/>
        <ScoreBoard />
      </>
      )
  }
}

const mapStateToProps = state => ({
  players: state.players.players,
  dealer: state.game.dealer,
  dealerQueue: state.game.dealerQueue,
  roundQueue: state.game.roundQueue,
  playerCount: state.game.playerCount,
  round: state.game.round,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setGameState,
  setDealer,
  setRound,
  setCenterDeal,
  setPlayerCount,
  setPlayerCards,
  updateRoundQueue,
  updateDealerQueue,
  setPlayerTurn,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Game);
