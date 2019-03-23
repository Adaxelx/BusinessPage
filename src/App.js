import React, { Component } from 'react';
import './App.css';

/* components */ 

import Nav from './components/Nav.js'
import Home from './components/Home.js'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Nav/>
       <Home/>
      </div>
    );
  }
}

export default App;
