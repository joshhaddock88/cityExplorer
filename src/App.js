import React, { Component } from 'react';
import SearchForm from './components/SearchForm.js';
import DisplayInfo from './components/DisplayInfo';
import Map from './components/Map.js';
import './App.css';
import axios from 'axios';

class App extends Component {
  
  state = {
    locationObject: {},
    savedCity: '',
    mapURL: ''
  }

  getLocation = async () => {
    const key = process.env.REACT_APP_LOCATION_KEY;
    const url = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${this.state.savedCity}&format=json`;
    console.log("URL: ", url);
    const res = await axios.get(url);
    console.log("Response Object: ", res.data[0]);
    this.setState({locationObject: res.data[0]})
  };

  searchedCity = (event) => {
    console.log(event.target.value);
    this.setState({savedCity: event.target.value})
  };

  render() {
    return(
      <div>
        <SearchForm
          getLocation={this.getLocation}
          searchedCity={this.searchedCity}
        />
        <DisplayInfo 
          locationObject={this.state.locationObject}
        />
        <Map/>
      </div>
    )
  }
}

export default App;
