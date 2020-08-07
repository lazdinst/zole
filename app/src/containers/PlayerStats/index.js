import React from 'react';
import { Cards } from '../Cards';

const PlayerList = props => {
  const { players } = props;

  const style = {
    display: 'flex',
    justifyContent: 'center',
  }

  return (
    <div style={style}>
      { Object.keys(players).map(player => <PlayerRow player={players[player]} />)}
    </div>
  )
}

const PlayerRow = props => {
  const { player } = props;

  const style = {
    textAlign: 'left',
    margin: '1rem',
  }
  return (
    <div  style={style}>
      <div>Name: {player.name}</div>
      <div>Score: {player.points}</div>
      <div>Team: {player.team}</div>
      <div>Cards:
        <div>
          <Cards cards={player.cards} />
        </div>
      </div>
    </div>
  );
}

class PlayerStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: [],
    }
  }

  render () {
    const { players } = this.props;
    return <PlayerList players={players} />;
  }
}

export default PlayerStats;

