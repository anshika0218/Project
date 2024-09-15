import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FaqForm from './FaqForm';

const Faq = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/faqs');
        setFaqs(response.data);
      } catch (error) {
        console.error('Error fetching FAQs', error);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <div className="faq">
      <h1>FAQ</h1>
      <FaqForm onFaqAdded={(newFaq) => setFaqs([...faqs, newFaq])} />
      <ul>
        {faqs.map((faq) => (
          <li key={faq._id}>
            <strong>Q:</strong> {faq.question} <br />
            <strong>A:</strong> {faq.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
