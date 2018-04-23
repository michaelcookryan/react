import React, { Component } from 'react';
import Score from './Score';
import Player from './Player';
import rockImage from '../images/rock.jpg';
import paperImage from '../images/paper.jpg';
import scissorsImage from '../images/scissors.jpg';

function getComputerChoice(){
    const randomNumber = Math.random() * 100;
    const roundedNumber = Math.round(randomNumber);
    if(roundedNumber <= 33){
        return 'paper';
    }else if(roundedNumber <= 67){
        return 'rock';
    }else {
        return 'scissors';
    }
}

function getRockPaperScissorsWinner(playerChoice, computerChoice) {
    if ((playerChoice === 'scissors' && computerChoice === 'rock') ||
        (playerChoice === 'paper' && computerChoice === 'scissors') ||
        (playerChoice === 'rock' && computerChoice === 'paper')) {
      return 'computer';
    } else if ((playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'rock' && computerChoice === 'scissors')) {
      return 'player';
    }
    return null;
  }
function displayComputerChoice(computerChoice){
    switch (computerChoice){
        case 'scissors':           
            return scissorsImage;        
        case 'rock':           
            return rockImage;
        default:           
            return paperImage;
        } 
}
class RockPaperScissorsGame extends Component {

  constructor(props){
    super(props);
    this.state = {
        playerScore: 0,
        computerScore: 0
    };
    this.handleClickPlayerChoice = this.handleClickPlayerChoice.bind(this);
    this.handleReset = this.handleReset.bind(this);
    }

handleClickPlayerChoice(playerChoice){
    const computerChoice = getComputerChoice();
    const winner = getRockPaperScissorsWinner(playerChoice, computerChoice);
    if(winner === 'computer'){
        const computerScore = this.state.computerScore + 1;
        this.setState({ computerScore }, () => {
            if(this.state.computerScore >= 5){
                return alert('Computer Wins!');
            }
        });
    }else if(winner === 'player'){
        const playerScore = this.state.playerScore + 1;
        this.setState({ playerScore }, () => {
            if(this.state.playerScore >= 5){
                return alert('Player Wins!');
            }
        });
    }
}

handleReset(){
    this.setState({ playerScore: 0, computerScore: 0 });
}
  render() {
    return (
      <div className="Game">

        <h1>Click your choice:</h1>
        <section className="Container">

          <div className="Option-display">

                <section className="Container">
                    <ul>
                        <Player
                        imageSrc={rockImage}
                        name='rock'
                        onClick={this.handleClickPlayerChoice}
                        />
                        <Player
                        imageSrc={paperImage}
                        name='paper'
                        onClick={this.handleClickPlayerChoice}
                        />
                        <Player
                        imageSrc={scissorsImage}
                        name='scissors'
                        onClick={this.handleClickPlayerChoice}
                        />
                    </ul>                  
                </section>                
            </div>
        </section>


        <h1 className="lowestElement">Current Score</h1>
        <p className="info">(First player to 5 wins)</p>
        <Score 
        playerScore={this.state.playerScore}
        computerScore={this.state.computerScore}
        />
        <section>
          <button onClick={this.handleReset}>Reset</button>
        </section>
      </div>
    );
  }
}

export default RockPaperScissorsGame;

