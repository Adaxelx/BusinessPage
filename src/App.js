import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
/* components */ 

import Nav from './components/Nav.js'
import Home from './components/Home.js'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
       <Nav/>
       <Home/>
      </div>
      </Router>
    );
  }
}

export default App;
