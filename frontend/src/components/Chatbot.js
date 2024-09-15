import React, { useState } from 'react';
import FruitCard from './FruitCard';

const fruits = [
  { id: 1, name: 'Apple', details: 'Apples are nutritious and come in various colors.' },
  { id: 2, name: 'Banana', details: 'Bananas are rich in potassium and are great for a quick snack.' },
  // Add more fruits as needed
];

const Chatbot = () => {
  const [selectedFruit, setSelectedFruit] = useState(null);

  return (
    <div className="chatbot">
      <h1>Chatbot</h1>
      {selectedFruit ? (
        <div className="fruit-detail">
          <h2>{selectedFruit.name}</h2>
          <p>{selectedFruit.details}</p>
          <button onClick={() => setSelectedFruit(null)}>Back</button>
        </div>
      ) : (
        <div className="fruit-list">
          {fruits.map((fruit) => (
            <FruitCard
              key={fruit.id}
              fruit={fruit}
              onClick={() => setSelectedFruit(fruit)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
