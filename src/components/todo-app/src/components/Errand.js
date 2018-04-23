import React, { Component } from 'react';

class Errand extends Component {
  render() {
    const { errand, isCompleted, onChange } = this.props;
    return (      
      <div className="DisplayList">        
        <input 
            type="checkbox" 
            name={errand} 
            checked={isCompleted} 
            onChange={onChange}            
        />
            
        <h3 style={{ display: 'inline-block' }}>{errand}</h3>
         
      </div>
    );
  }
}

export default Errand;