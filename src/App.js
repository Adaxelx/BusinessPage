import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
/* components */ 

import Nav from './components/Nav.js'
import Home from './components/Home.js'
import Offer from './components/Offer.js'
import Contact from './components/Contact.js'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
       <Nav/>
       <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/offer" exact component={Offer}/>
         <Route path="/contact" exact component={Offer}/>
       </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
