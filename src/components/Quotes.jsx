import { useState, useEffect } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness',
        {
          headers: { 'X-Api-Key': process.env.REACT_APP_apiNinjasKey },
          contentType: 'application/json',
        });
      if (!response.ok) {
        throw Error('Error fetching quote');
      }
      return response.json();
    };
    fetchQuote().then((data) => {
      setQuote(`'${data[0].quote}' - ${data[0].author}`);
      setLoading(false);
      setError(false);
    }).catch((error) => {
      setQuote(null);
      setLoading(false);
      setError(error.message);
    });
  }, []);
  return (
    <div className="quote">
      {loading && <div>Loading...</div>}
      {quote && <div>{quote}</div>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Quotes;
