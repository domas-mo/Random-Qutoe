import StyledQuote from '../styled/Quote.styled';

const Quote = (props) => {
  const { quote, author } = props;
  return (
    <StyledQuote>
      <q>{quote}</q>
      <p>- {author ? author : 'Anonymous'}</p>
    </StyledQuote>
  );
};

export default Quote;
