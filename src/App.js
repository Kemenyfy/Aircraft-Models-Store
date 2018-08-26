import React, { Component } from 'react';
import './App.css';

import Categories from './Components/Categories.js'

import FighterBackground from './Data/Images/FighterBackground.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Fighter Aircraft Modelling</h1>
          <img className="FighterBackground" src={FighterBackground} alt="Yugioh Background" />
          <h6>Powered by the might of somebody/somehow/maybe</h6>
        </header>
        <section className="categories">
        <Categories/>
        </section>
        <footer>
          <h6>Powered by React-Router-Dom -- Thanks to Suncoast Developers Guild for teaching us!</h6>
        </footer>
      </div >
    )
  }
}

export default App;
