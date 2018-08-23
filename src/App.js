import React, { Component } from 'react';
import './App.css';
import YugiohBackground from './Data/Images/CK72n1f.jpg'
import BoosterPackCat from './Data/Images/BoosterPacks.jpg'
import DuelistPackCat from './Data/Images/DuelistPacks.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Airplane Modelling</h1>
          <img className="yugiohBackground" src={YugiohBackground} alt="Yugioh Background" />
          <h6>Powered by the might of somebody/somehow/mayve</h6>
        </header>
        <section className="mainCategories">
          <div className="container">
            <div className="containerIsMobile">
              <div className="column">
                <div className="card">
                  <div className="cardContent">
                    <div className="content">
                      <h3>Second World War</h3>
                      <p className="categoriesParagraph">The List of aircraft of World War II includes all the aircraft used by those countries, which were at war during World War II from the period between their joining the conflict and the conflict ending for them.</p>
                    </div>
                  </div>
                  <img className="categoriesImages" src={BoosterPackCat} alt="Booster Category" />
                </div>
                <div className="card">
                  <div className="cardContent">
                    <h3>Duelist Packs</h3>
                    <p className="categoriesParagraph">A Duelist Pack (デュエリストパック Dyuerisuto Pakku), also known as DP, is a set which focuses on a character(s) or season of the anime. All character-focused Duelist Packs contains 30 cards used by a specific character in the anime. Most of them are Reprints, but the higher rarities are new cards.</p>
                  </div>
                  <img className="categoriesImages" src={DuelistPackCat} alt="Duelist Category" />
                </div>
              </div>
            </div>
          </div>
        </section >
      </div >
    )
  }
}

export default App;
