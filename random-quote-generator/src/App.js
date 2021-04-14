import './App.css';
import React, {Component} from 'react';
import QuoteAndAuthor from './components/QuoteAndAuthor';
import quotes from './QuoteDB';


export default class App extends Component{
  
  state = {
    quote:quotes[0].quote,
    author:quotes[0].author
  }

  generateRandomQuote = () =>{
    let num = Math.floor(Math.random()*quotes.length)
    let newQuote = quotes[num];
    
    //update state

    this.setState({
      quote:newQuote.quote,
      author:newQuote.author
    })

    this.shuffleQuote(quotes)
  }

  shuffleQuote = (arr) =>{
    return arr.sort(function (){ return 0.5 - Math.random()})
  }


  render(){
    return(
      <div className="App">

        <QuoteAndAuthor 
          generate={this.generateRandomQuote}
          quote={this.state}
        />

      </div>

    )
  }
}
