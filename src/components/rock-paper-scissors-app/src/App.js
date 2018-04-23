import React, { Component } from 'react';
import RockPaperScissorsGame from './rock-paper-scissors/RockPaperScissorsGame'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App-components">
          <RockPaperScissorsGame />
      </div>
    );
  }
}

export default App;
