import React from 'react';
import Cards from '../Cards';


const PlayerRow = props => {
  const { player, isDealer } = props;

  const style = {
    textAlign: 'left',
    margin: '1rem',
  }

  const nameStyle = {
    fontWeight: isDealer ? 'bold' : 'normal',
    fontSize: '1.25rem',
  }

  const indicators = {
    height: '0.5rem',
  }
  const dealerStyle = {
    ...indicators,
    backgroundColor: 'gold'
  }

  const turnStyle = {
    ...indicators,
    backgroundColor: 'green'
  }

  const { name, points, team, cards, turn } = player;

  return (
    <div style={style}>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <div style={{}}>{ isDealer ? '☆' : ''}</div><div>{name}</div>
      </div>
      <div>Score: {points !== undefined ? points : 'PLAYER_SCORE'}</div>
      <div>Team: {team || 'PLAYER_TEAM'}</div>
      <div style={turn ? turnStyle : indicators}></div>
      <div>
        <header>Cards: </header>
        <Cards cards={cards} />
      </div>
    </div>
  );
}

export default PlayerRow;

