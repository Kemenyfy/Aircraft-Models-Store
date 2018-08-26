import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Airplanes from '../Data/airplanes.json'

class Categories extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h4>Pick your category to see all our models.</h4>
                <div className="categoryImages">
                    {Object.keys(Airplanes).map((airplanesKey, i) => {
                        return <div className="card" key={i}><Link to={`/${airplanesKey}`}>{Airplanes[airplanesKey].title}
                            <p className="cardTitle"></p>
                            <img className="cardImages" src={Airplanes[airplanesKey].photos[0].imageUrl} alt={Airplanes[airplanesKey].photos[0].title} />
                        </Link></div>
                    })}
                </div>
            </div>
        );
    }
}

export default Categories;
