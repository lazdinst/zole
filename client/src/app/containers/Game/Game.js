import React from 'react';
import PlayerHUD from '../PlayerStats';
import { generateDeck } from '../../helpers/generateDeck'
import { deal } from '../../helpers/deal'
import initialData from '../../helpers/data';
import Deck from '../../zole/deck';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: [],
      players: initialData.players,
      middle: [],
    }
  }

  deal() {
    let deck = new Deck();
    return deck.generate();
  }

  clearCards = () => {
    const { players } = this.state;
    
    Object.keys(players).forEach(player => {
      players[player].cards = [];
    })

    this.setState({
      players: players,
    })
  }

  newGame = () => {
    this.clearCards();

    const {deck, players, middle } = deal(generateDeck(), this.state.players)

    this.setState({
      deck: deck,
      players: players,
      middle: middle,
    })
  }

  render() {
    const { players } = this.state;

    return (
      <>
        <header>Zole Game</header>
        <button onClick={this.newGame}>New Game</button>
        <div>
          <PlayerHUD players={players} />
        </div>
      </>
      )
  }
}

export default Game;