import React, { Component } from 'react';

class Player extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

handleClick(){
    this.props.onClick(this.props.name);
}
    render(){
        return(
            <li
                style={{ 
                    display: 'inline-block',
                    marginRight: 15
                 }}
                onClick={this.handleClick}
                >
                <img
                style={{ width: 100 }}
                src={this.props.imageSrc}
                />
            </li>
           
        );
    }
}
export default Player;