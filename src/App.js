import React, { Component } from 'react';
import './App.css';

/* components */ 

import Nav from './components/Nav.js'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Nav/>
      </div>
    );
  }
}

export default App;
