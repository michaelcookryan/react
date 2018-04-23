import React, { Component } from 'react';
import ToDoList from './components/ToDoList.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-components">
        <div className="Container">
          <h1>Enter Upcoming Tasks</h1>
            <ToDoList/>
        </div>
      </div>
    );
  }
}

export default App;
