import React from 'react';
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa"


class QuoteBox extends React.Component {
  render() {
    const { quotes, getRandomQuote } = this.props;
    return (
        <wrapper id="quote-box" className='quote-box'>
            <h2 id="text" className='text'><FaQuoteLeft size="25" id="left-quote"/>    {quotes.quote}    <FaQuoteRight size="25" id="right-quote"/></h2>
            <h4 id="author" className='author'>-{quotes.author}</h4>
            <div className='button-container'> 
                <a target="_blank" id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${quotes.quote}    -${quotes.author}`}><FaTwitter color="white"/></a>
                <div></div>
                <button id="new-quote" onClick={getRandomQuote}>New Quote</button>
            </div>
        </wrapper>
    )
  }
}

export default QuoteBox;
