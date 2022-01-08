import React, { Component } from 'react';
import SearchForm from './components/SearchForm.js';
import DisplayInfo from './components/DisplayInfo'
import './App.css';
import axios from 'axios';

class App extends Component {
  
  state = {
    locationObject: {},
    savedCity: ''
  }

  getLocation = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.cityWeSearchedFor}&format=json`;
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
        />
        <DisplayInfo 
          locationObject={this.state.locationObject}
        />
      </div>
    )
  }
}

export default App;
