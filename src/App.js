import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Project from './Project';
import NotFound from './NotFound';
import Intro from './Intro';
import './App.css';


class App extends Component {
  
  render() {

    return (
      <Router>       
      <div className="App">
        <header className="App-header">        
        <ul className="Main-Nav">
          <li id="App-mainTitle">
              <NavLink to="/"><h1>React Projects</h1></NavLink>
              <p>by Michael Ryan</p>
            </li>
            <li id="Link-rps">
              <NavLink to="/projects/rock-paper-scissors"
                activeStyle={{ 
                  textDecoration:'underline',
                  textDecorationColor:'#ab987a' 
                }}
              >Rock Paper Scissors Game</NavLink>
            </li>
            <li id="Link-td">
              <NavLink to="/projects/to-do-list"
                activeStyle={{ 
                  textDecoration:'underline',
                  textDecorationColor:'#ff533d' 
                }}
              >To-Do List</NavLink>
            </li>
            <li id="Link-wthr">
              <NavLink to="/projects/weather"
                activeStyle={{ 
                  textDecoration:'underline',
                  textDecorationColor:'#0f1626' 
                }}
              >Weather App</NavLink>
            </li>
          </ul>
        </header>
       
        <Switch>
          <Route path="/" exact component={Intro}/>
          <Route path="/projects/rock-paper-scissors" render={() => (
            <Project item="rock-paper-scissors" background='#0f1626' />
          )}/>
          <Route path="/projects/to-do-list" render={() => (
            <Project item="todo" background='#ab987a' />
          )}/>
          <Route path="/projects/weather" render={() => (
            <Project item="weather" background='#ff533d' />
          )}/>
          <Route component={NotFound} />
        </Switch>

                <footer>
                  <p>Michael Ryan 2018</p>
                </footer>
      </div>     
      </Router>
    );
  }
}

export default App;
