import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Airplanes from '../Data/airplanes.json'

class Categories extends Component {

    componentDidMount() {

    }

    // newIndex = () => {
    //     let featured = ['0', '1', ['2'], ['3']]
    //     let index = featured[Math.floor(Math.random() * featured.length)];
    //     return index
    // }

    render() {
        return (
            <div>
            <h3>Featured Models</h3>
            <section className="featuredProducts">
                {Object.keys(Airplanes).map((airplanesKey, i) => {
                    return <div>
                        <p className="featuredTitle">{Airplanes[airplanesKey].photos[1].title}</p>
                        {/* <Link to={Airplanes[this.props.match.params.category]} key={i}> */}
                        <img className="featuredImages" key={i} src={Airplanes[airplanesKey].photos[1].imageUrl} alt={Airplanes[airplanesKey].photos[1].title}/>
                        {/* </Link> */}
                        <p className="featuredPrice">{Airplanes[airplanesKey].photos[1].price}</p>
                    </div>
                })}
            </section>
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
