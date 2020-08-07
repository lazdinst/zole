import React from 'react';

export default props => {
  const players = props;
  
  return (
    <div>
      { Object.keys(players).map(player => {
        return (
          <div>
            <header>{player}</header>
            <div>Team: {player.team}</div>
            <div>Score: {player.points}</div>
            <div>{JSON.stringify(players[player])}</div>
          </div>
        )
      })}
    </div>
  )
};