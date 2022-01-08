import React, { Component } from 'react';
import { Image, Form, Button } from 'react-bootstrap';
import SearchForm from './components/SearchForm.js';
import DisplayInfo from './components/DisplayInfo'
import './App.css';
import axios from 'axios';

class App extends Component {
  
  state = {
    locationObject: {
      name: "Seattle",
      age: "Old"
    },
    savedCity: ''
  }

  render() {
    return(
      <div>
        <SearchForm/>
        <DisplayInfo 
          locationObject={this.state.locationObject}
        />
      </div>
    )
  }
}

export default App;
