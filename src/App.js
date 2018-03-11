import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import oneliner from 'one-liner-joke';
class App extends Component {
  constructor () {
    super ();
    this.state = {};
  }
  componentDidMount () {
    this.loadJoke ();
  }
  
  loadJoke = () => {
    this.setState ({oneLiner: oneliner.getRandomJoke ().body});
  };

  reloadJoke = () => {
    this.loadJoke ();
   // oneliner.getAllJokesWithTag('IT')
    console.log('oneliner.getAllJokesWithTag("IT"): ', oneliner.getRandomJokeWithTag('IT').body);
  };

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Daily Jokes</h1>
        </header>
        {this.state.oneLiner}
        {console.log ('this.state.oneLiner: ', this.state.oneLiner)}
        <div>
          <button onClick={this.reloadJoke}>Another Random Joke</button>
        </div>
      </div>
    );
  }
}

export default App;
