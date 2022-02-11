import { useEffect, useState } from 'react';
import Quote from './components/Quote';

// import style
import StyledButton from './styled/Button.styled';
import StyledQuoteCard from './styled/QuoteCard.styled';

function App() {
  const [quote, setQuote] = useState('');
  const [quotes, setQuotes] = useState([
    { quote: 'Never, never, never give up.', author: 'Winston Churchill' },
  ]);
  const [index, setIndex] = useState(0);

  const getData = () => {
    fetch('https://type.fit/api/quotes')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setQuote(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const getRandomQuote = () => {
    const randomNumber = Math.floor(Math.random() * quote.length);

    setQuotes([
      ...quotes,
      { quote: quote[randomNumber].text, author: quote[randomNumber].author },
    ]);
    setIndex((prev) => {
      return quotes.length;
    });
  };

  const prevButton = () => {
    if (index === 0) {
      setIndex((prev) => {
        return quotes.length - 1;
      });
    } else {
      setIndex((prev) => {
        return prev - 1;
      });
    }
  };

  const nexButton = () => {
    setIndex((prev) => {
      return prev + 1;
    });

    setIndex((prev) => {
      return prev % quotes.length;
    });
  };

  return (
    <StyledQuoteCard>
      <h1>Quote</h1>
      <Quote author={quotes[index].author} quote={quotes[index].quote} />
      <div>
        <StyledButton onClick={prevButton}>Prev</StyledButton>
        <StyledButton onClick={getRandomQuote}>Random quote</StyledButton>
        <StyledButton onClick={nexButton}>Next</StyledButton>
      </div>
    </StyledQuoteCard>
  );
}

export default App;
