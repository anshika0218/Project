import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <nav>
        <ul>
          <li><Link to="/chatbot">Chatbot</Link></li>
          <li><Link to="/translator">Translator</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
