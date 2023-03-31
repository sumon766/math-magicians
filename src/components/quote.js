import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Quote = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState('');
  const [quote, setQuote] = useState('');
  const address = 'https://api.api-ninjas.com/v1/quotes/';
  const apiKey = '5pq2LSrpHvxr7n4KGMQgh3YlkllMiiR4wv6LQSGv';

  useEffect(() => {
    axios({
      method: 'GET',
      url: address,
      headers: { 'X-Api-Key': apiKey },
    }).then((result) => {
      setQuote(result.data[0].quote);
      setIsLoading(false);
    }).catch((error) => {
      setIsError('Oops! Some error caused while fetching data');
      setIsLoading(false);
      throw new Error(error);
    });
  }, []);

  return (
    <div className="calculator-quote">
      <h3>{isLoading ? 'Loading quote' : ''}</h3>
      <h3>{isError || ''}</h3>
      <h2>Quote</h2>
      <p>{quote}</p>
    </div>
  );
};

export default Quote;
