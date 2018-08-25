import React, { Component } from 'react';
import './App.css';
import FighterBackground from './Data/Images/FighterBackground.jpg'
import SE5 from './Data/Images/SE5.jpeg'
import BF109 from './Data/Images/BF109.jpeg'
import F4 from './Data/Images/F4.jpeg'
import F22 from './Data/Images/F22.jpeg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Fighter Aircraft Modelling</h1>
          <img className="FighterBackground" src={FighterBackground} alt="Yugioh Background" />
          <h6>Powered by the might of somebody/somehow/mayve</h6>
        </header>
        <section className="categories">
          <div className="card">
            <p className="cardTitle">1st World War</p>
            <p className="categoriesParagraph">World War I was the first major conflict involving the large-scale use of aircraft.
            Initially, they were used mostly for reconnaissance. Later for fighters, bombers, and trench strafers.</p>
            <img className="cardImages" src={SE5} alt="World War 1 Aircraft" />
          </div>
          <div className="card">
            <p className="cardTitle">2nd World War</p>
            <p className="categoriesParagraph">The List of aircraft of World War II includes all the aircraft used by those countries
            which were at war since the start to the end of the conflict.</p>
            <img className="cardImages" src={BF109} alt="World War 1 Aircraft" />
          </div>
          <div className="card">
            <p className="cardTitle">Vietnam War</p>
            <p className="categoriesParagraph">The Vietnam War was a conflict that occurred in Vietnam, Laos, and Cambodia from 1 November
            1955 to the fall of Saigon on 30 April 1975.</p>
            <img className="cardImages" src={F4} alt="World War 1 Aircraft" />
          </div>
          <div className="card">
            <p className="cardTitle">Fifth Generation</p>
            <p className="categoriesParagraph">A fifth-generation jet fighter is a jet fighter classification used around the world that
            encompasses the most advanced jet fighter generation.</p>
            <img className="cardImages" src={F22} alt="World War 1 Aircraft" />
          </div>
        </section>
        <footer>
          <h6>Powered by the might of somebody/somehow/mayve</h6>
        </footer>
      </div >
    )
  }
}

export default App;
