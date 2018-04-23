import React, { Component } from 'react';
import Errand from './Errand';


class ToDoList extends Component {
    constructor(props){
        super(props);

        this.state = { 
            errands: [],
            newErrand: '',
            isCompleted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.alternateBackgroundColour = this.alternateBackgroundColour.bind(this);
    }

    handleChange(e){
        const { name, type, value, checked} = e.target;   
        this.setState({ 
            [name]: type === 'checkbox' ? checked : value,
            errands: checked === true ? this.state.errands.filter(a => a !== name) : this.state.errands     
        });
    }

    handleSubmit(e){
        e.preventDefault();

        const { newErrand } = this.state;  
        const duplicate = this.state.errands.filter(a => a === newErrand)    
        if (!newErrand || duplicate.length > 0) return alert('This task already exists!'); 

        this.setState({
            errands: this.state.errands.concat(newErrand), 
            newErrand:''        
        });    
    }
    alternateBackgroundColour(index){
        return (index%2 === 0 ) ? "#ade6d8" : "#FFF";
    }

  render() {

    return (
      <div className="theToDoList">
        <form onSubmit={this.handleSubmit}>
            <input 
                name="newErrand"
                value={this.state.newErrand}
                onChange={this.handleChange}
            />
            <button type="submit" className="add">Add</button>
        </form>
        
        <p>{this.state.errands.length ? '(Use check box to remove item from list)' : ''}</p>
        <ul>
            {this.state.errands.map((errand, index, checked) => {
                return (  
                                   
                    <li key={errand}
                        style={{ backgroundColor: this.alternateBackgroundColour(index) }}>
                         <Errand                         
                         errand={errand}
                         isCompleted={errand.isCompleted} 
                         onChange={this.handleChange}
                         />                         
                    </li> 
                   
                )   
                
            })}
        </ul>
        
      </div>
    );
  }
}

export default ToDoList;
