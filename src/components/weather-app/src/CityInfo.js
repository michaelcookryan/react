import React, { Component } from 'react';
import FutureOutlook from './FutureOutlook';

class CityInfo extends Component {
  constructor(props){
    super(props);

    this.convertFtoC = this.convertFtoC.bind(this);
}

  convertFtoC(tempInFahrenheit){
    const tempInCelsius = Math.round((parseInt(tempInFahrenheit) - 32) * .5556);
    return tempInCelsius;
}

  render() {

    return (
       <div className="City-Info">
          <h1>{this.props.cityName}</h1>
          <img src={this.props.icon} alt="icon" />
          <h2>{this.convertFtoC(this.props.temperature)}&deg;C</h2>
          <h3>{this.props.condition}</h3>  

        <h2 className="Outlook-title">The 10 day outlook ahead:</h2>
          <div className="Future-Section"> 
              <ul className="Future-Outlooks">
                  {this.props.theOutlook.map((daysAhead) => {
                      return (
                          <FutureOutlook 
                              outLookStats={daysAhead}
                              high={this.convertFtoC(daysAhead.high)}
                              low={this.convertFtoC(daysAhead.low)}
                              key={daysAhead.date}
                          />
                      );
                  })}
              </ul> 
          </div>
       </div>
    );
  }
}

export default CityInfo;
