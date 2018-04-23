import React, { Component } from 'react';
import logo from './logo.svg';

class Intro extends Component {
  render() {
    return (
      <div  className="Display-area intro-area">
      <img src={logo} className="App-logo" alt="logo" />
        <div className="Intro-copy">
            <h1>Welcome to my React Projects Portfolio!</h1>
            <p>All of the selections to view here were created 
                when I attended the class:</p>
                <p>COMP 2913 - React and Modern Javascript at 
                BCIT, Vancouver, BC in the spring of 2018.</p>
                <br/>
                <p>~ Cheers ~</p>
        </div>
      </div>
    );
  }
}

export default Intro;
