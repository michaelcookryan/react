import React, { Component } from 'react';

class FutureOutlook extends Component {
  render() {
    return (
       <li className="Days-Ahead">
        <div className="Day-header">
            <h2>{this.props.outLookStats.day}</h2>
            <p>{this.props.outLookStats.date}</p>
        </div>
        <div className="Day-body">
            <h3>High: {this.props.high}&deg;C</h3>
            <h3>Low: {this.props.low}&deg;C</h3> 
            <p>{this.props.outLookStats.text}</p>  
        </div>       
       </li>
    );
  }
}

export default FutureOutlook;
