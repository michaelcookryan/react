import React, { Component } from 'react';

class Score extends Component{
    render(){
        return(
            <div className="Scoreboard">
                <h2 className="score">You: {this.props.playerScore} </h2>
                <h2 className="score">Computer: {this.props.computerScore} </h2>
            </div>
        );
    }
}
export default Score;