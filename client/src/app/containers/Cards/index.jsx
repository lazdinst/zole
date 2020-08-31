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

  let suitASCII = '';
  switch(card.suit) {
    case 'c':
      suitASCII = '♣';
      break;
    case 's':
      suitASCII = '♠';
      break;
    case 'h':
      suitASCII = '♥';
      cardSuit.color = 'red';
      break;
    case 'd':
      suitASCII = '♦';
      cardSuit.color = 'red';
      break;
    default:
      suitASCII = '?';
      break;
  }


  return (
    <div style={cardStyle}>
      <div style={cardValue}>{card.value}</div>
      <div style={cardSuit}>{suitASCII}</div>
    </div>
    );
};

export const Cards = props => {
  const { cards } = props;

  return ( cards.map(card => <Card card={card} />))
}

