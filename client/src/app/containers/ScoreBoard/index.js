import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PlayerListRow from './PlayerListRow';

const ScoreBoard = props => {
  const { 
    players, 
    dealer, 
    turn, 
    state
  } = props;

  const style = {
    display: 'flex',
    justifyContent: 'center',
  }

  const playerList = Object.keys(players).map(player => {
    return (
      <PlayerListRow 
        key={player} 
        id={player}
        player={players[player]}
      />
    );
  });

  return (
    <div style={style}>
      { playerList }
    </div>
  )
}

const mapStateToProps = state => ({
  players: state.players.players,
  dealer: state.game.dealer,
  turn: state.game.turn,
  state: state.game.state,
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);
