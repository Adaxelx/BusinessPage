import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
/* components */ 

import Nav from './components/Nav.js'
import Home from './components/Home.js'
import Offer from './components/Offer.js'
import Contact from './components/Contact.js'
import Loading from './components/Loading.js'
import Place from './components/Place.js'

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
      <Loading/>
       <Nav/>
       <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/offer" exact component={Offer}/>
         <Route path="/place" exact component={Place}/>
         <Route path="/contact" exact component={Contact}/>
       </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
