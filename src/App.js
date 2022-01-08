import React, { Component } from 'react';
import { Image, Form, Button } from 'react-bootstrap';
import SearchForm from './components/SearchForm.js';
import DisplayInfo from './components/DisplayInfo'
import './App.css';
import axios from 'axios';

class App extends Component {
  
  render() {
    return(
      <div>
        <SearchForm/>
        <DisplayInfo />
      </div>
    )
  }
}

export default App;
