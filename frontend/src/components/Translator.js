import React, { useState } from 'react';

const Translator = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = () => {
    // Dummy translation logic (you might want to connect to a real API)
    setTranslatedText(`Translated: ${text}`);
  };

  return (
    <div className="translator">
      <h1>Translator</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <button onClick={handleTranslate}>Translate</button>
      <p>{translatedText}</p>
    </div>
  );
};

export default Translator;
