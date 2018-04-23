import React, { Component } from 'react';
import axios from 'axios';
import CityInfo from './CityInfo';

class Forcast extends Component {
    constructor(props){
        super(props);

        this.state = {
            selectedCity: '',
            id:'',
            currentConditions: {},
            weatherIcon: '',
            outLook: [],
            active: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

handleChange(e){
    e.preventDefault();
    const newCity = e.target.value;
    const forURL = newCity.slice(0, -4);
    axios.get(`https://query.yahooapis.com/v1/public/yql?format=json&q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${newCity}")`).then((response) => {
        this.setState({
            selectedCity : newCity,
            id : forURL.toLowerCase(), 
            active: true,
            currentConditions: response.data.query.results.channel.item.condition,
            weatherIcon: response.data.query.results.channel.item.description,
            outLook: response.data.query.results.channel.item.forecast 
            });
    });
    
}


  render() {
    return (
        <div className="Forecast-comp">
        <h1>Check current conditions:</h1>

          <select className="City-selection"
            name="selectedCity"
            onChange={this.handleChange}>
                <option value="" disabled selected>Choose a location</option>
                <option value="Victoria, BC">Victoria</option>
                <option value="Vancouver, BC">Vancouver</option>
                <option value="Calgary, AB">Calgary</option>
                <option value="Toronto, ON">Toronto</option>
                <option value="Montreal, QC">Montreal</option>
          </select>

           {this.state.active ?
            <CityInfo 
                cityName={this.state.selectedCity}
                id={this.state.id}
                icon={this.state.weatherIcon.slice(19,56)}
                temperature={this.state.currentConditions.temp}
                condition={this.state.currentConditions.text}
                theOutlook={this.state.outLook}

            /> : null }

        </div>
    );
  }
}

export default Forcast;
