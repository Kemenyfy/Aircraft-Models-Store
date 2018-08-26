import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import Airplanes from '../Data/airplanes.json'

class Categories extends Component {

    componentDidMount() {
        
    }


    render() {
        return (
            <div className="categoryImages">
                {Object.keys(Airplanes).map((airplanesKey, i) => {
                    return <div className="card" key={i}>
                             <p className="cardTitle"><Link to={`/${airplanesKey}`}>{Airplanes[airplanesKey].title}</Link></p>
                             <p className="categoriesParagraph">{Airplanes[airplanesKey].description}</p>
                             <img className="cardImages" src={Airplanes[airplanesKey].photos[0].imageUrl} alt={Airplanes[airplanesKey].photos[0].title} />
                           </div>
                })}
            </div>
        );
    }
}

export default Categories;
