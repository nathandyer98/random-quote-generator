import React from 'react';
import QuoteBox from './QuoteBox';
import './App.css';

const transition = "all 3s ";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      currentQuote : {
        quote: '',
        author: ''
      }
    };
    this.getRandomQuote = this.getRandomQuote.bind(this);
  }
  
  getRandomQuote(){
    const {quotes} = this.state;
    if (quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      this.setState({
        currentQuote : quotes[randomIndex]
      })
    }
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ quotes: data.quotes }, this.getRandomQuote);
      })
      .catch(error => console.error('Error fetching quotes:', error));
  }


  render() {
    const {currentQuote} = this.state;
    return (
      <div className='App' >
        <QuoteBox style={{transition}} quotes={currentQuote} getRandomQuote={this.getRandomQuote} />
      </div>
    )
  }
}

export default App;