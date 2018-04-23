import React, { Component } from 'react';
import Weather from './components/weather-app/src/App';
import ToDoList from './components/todo-app/src/App';
import RockPaperScissorsGame from './components/rock-paper-scissors-app/src/App';

class Project extends Component {
  constructor(props){
    super(props);

    this.selectedItem = this.selectedItem.bind(this);
  }
  selectedItem(item){
    switch(item){
      case "rock-paper-scissors":
        return ( <RockPaperScissorsGame/>);
      case "todo":
        return ( <ToDoList/>);
      case "weather":
        return ( <Weather/>);
      default:
        return null;
    }
  }
  render() {
    const { item, background } = this.props
    return (
      <div  className="Display-area" style={{ background }}>

        {this.selectedItem(item)}

      </div>
    );
  }
}

export default Project;
