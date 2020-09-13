import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PlayerList from './PlayerList';

const ScoreBoard = props => {
  return <PlayerList {...props} />;
}

const mapStateToProps = state => ({
  players: state.players.players,
  dealer: state.game.dealer,
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);
