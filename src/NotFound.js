import React, { Component } from 'react';
import logo from './logo.svg';

class NotFound extends Component {
  render() {
    return (
      <div  className="Display-area intro-area">
        <img src={logo} className="App-logo" alt="logo" />
          <div className="Intro-copy">
            <h1>Oops! 404 Page not found</h1>
            <p>- <em>please try one of the links above</em> -</p>
          </div>
      </div>
    );
  }
}

export default NotFound;