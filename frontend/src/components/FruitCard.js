import React from 'react';

const FruitCard = ({ fruit, onClick }) => {
  return (
    <div className="fruit-card" onClick={onClick}>
      <h2>{fruit.name}</h2>
    </div>
  );
};

export default FruitCard;
