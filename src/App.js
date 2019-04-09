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
import Footer from './components/Footer.js'
import OfferComputer from './components/OfferComputer.js'
const windowWidth = 1280

class App extends Component {
  render() {
    const conditionOff = window.innerWidth > windowWidth ? OfferComputer : Offer
    return (
      <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
      <Loading/>
       <Nav/>
      
       <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/offer" exact component={conditionOff}/>
         <Route path="/place" exact component={Place}/>
         <Route path="/contact" exact component={Contact}/>
       </Switch>
       <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
