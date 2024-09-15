import React, { useState } from 'react';
import axios from 'axios';

const FaqForm = ({ onFaqAdded }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/faqs', { question, answer });
      onFaqAdded(response.data);
      setQuestion('');
      setAnswer('');
    } catch (error) {
      console.error('Error creating FAQ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Question:</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Answer:</label>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create FAQ</button>
    </form>
  );
};

export default FaqForm;
