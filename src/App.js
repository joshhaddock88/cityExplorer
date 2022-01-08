import React, { Component } from 'react';
import { Image, Form, Button } from 'react-bootstrap';
import SearchBar from './components/SearchBar.js';
import './App.css';
import axios from 'axios';

class App extends Component {
  
  render() {
    return(
      <div>
        <SearchBar/>
      </div>
    )
  }
}

export default App;
