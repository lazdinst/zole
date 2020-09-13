import React from 'react';
import PlayerListRow from './PlayerListRow';

const PlayerList = props => {
  const { players, dealer } = props;

  const style = {
    display: 'flex',
    justifyContent: 'center',
  }

  // Generate Player list
  const playerList = Object.keys(players).map(player => {
    return (
      <PlayerListRow 
        key={player} 
        player={players[player]} 
        isDealer={Number(player) === Number(dealer)} 
      />
    );
  });

  // Render Player List
  return (
    <div style={style}>
      { playerList }
    </div>
  )
}

export default PlayerList;