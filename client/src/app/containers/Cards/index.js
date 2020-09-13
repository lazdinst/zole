import React from 'react';

const Card = props => {
  const { card } = props;
  
  const cardStyle = {
    padding: '10px',
    border: 'solid 1px #808080',
    backgroundColor: 'white',
    display: 'inline-block',
    borderRadius: '10px',
    fontSize: '14pt',
    textAlign: 'center',
    color: 'black',
    margin: '3px',
  }

  const cardSuit = {
    color: 'black',
  }

  const cardValue = {
    fontSize: '14pt',
  }

  if(card.suit === '♥' || card.suit === '♦') {
    cardSuit.color = 'red';
  }

  return (
    <div style={cardStyle}>
      <div style={cardValue}>{card.value}</div>
      <div style={cardSuit}>{card.suit}</div>
    </div>
    );
};

const Cards = props => {
  const { cards } = props;

  return cards.map(card => <Card key={`${card.suit}${card.value}`} card={card} />);
}

export default Cards;