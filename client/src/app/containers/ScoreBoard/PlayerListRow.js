import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ChooseBig from '../PlayerActions/ChooseBig';
import Cards from '../Cards';

const style = {
  textAlign: 'left',
  margin: '1rem',
}

const indicators = {
  height: '0.5rem',
}
const turnStyle = {
  ...indicators,
  backgroundColor: 'green'
}


const PlayerListRow = props => {
  const { 
    player, 
    id,
    turn, 
    state, 
    dealer,
  } = props;

  const isDealer = id === dealer.toString();
  const isTurn = id === turn.toString();
  const getStateActions = state => {
    switch(state) {
      case 'S6':
        return <ChooseBig id={id} />;
      
      default:
        return [];
    }
  }


  const actionButtons = isTurn ? getStateActions(state) : [<div>Waiting for Other Players</div>];
  
  const { name, points, team, cards } = player;

  return (
    <div style={style}>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <div style={{}}>{ isDealer ? '☆' : ''}</div><div>{name}</div>
      </div>
      <div>Score: {points !== undefined ? points : 'PLAYER_SCORE'}</div>
      <div>Team: {team || 'PLAYER_TEAM'}</div>
      <div style={isTurn ? turnStyle : indicators}></div>
      <div>{ actionButtons }</div>
      <div>
        <header>Cards: </header>
        <Cards cards={cards} />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  dealer: state.game.dealer,
  turn: state.game.turn,
  state: state.game.state,
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PlayerListRow);
