import React, { Component } from 'react';

import Airplanes from '../Data/airplanes.json'

import SE5 from '../Data/Images/SE5.jpeg'
// import BF109 from '../Data/Images/BF109.jpeg'
// import F4 from '../Data/Images/F4.jpeg'
// import F22 from '../Data/Images/F22.jpeg'

class Categories extends Component {

    componentDidMount() {
        
    }


    render() {
        return (
            <div className="categoryImages">
                {Object.keys(Airplanes).map((airplanesKey, i) => {
                    return <div className="card" key={i}>
                             <p className="cardTitle">{Airplanes[airplanesKey].title}</p>
                             <p className="categoriesParagraph">{Airplanes[airplanesKey].description}</p>
                             <img className="cardImages" src={Airplanes[airplanesKey].photos[0].imageUrl} alt={Airplanes[airplanesKey].photos[0].title} />
                           </div>
                })}
            </div>
        );
    }
}

export default Categories;
