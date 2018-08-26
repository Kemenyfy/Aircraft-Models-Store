import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';

import Categories from './Components/Categories.js'
import ProductList from './Components/ProductList';
import ProductDetail from './Components/ProductDetail';


import FighterBackground from './Data/Images/FighterBackground.jpg'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Fighter Aircraft Modelling</h1>
            <img className="FighterBackground" src={FighterBackground} alt="Fighter Background" />
            <h6>Powered by the might of somebody/somehow/maybe</h6>
          </header>
          <section className="categories">
          <Switch>
            <Route path="/" exact component={Categories}/>
            <Route path="/:category" exact component={ProductList}/>
            <Route path="/:category/:index" exact component={ProductDetail}/>
          </Switch>
          </section>
          <footer>
            <h6>Powered by React-Router-Dom</h6>
            <h6>Thanks to Suncoast Developers Guild for teaching us!</h6>
          </footer>
        </div >
      </Router>
    )
  }
}

export default App;
