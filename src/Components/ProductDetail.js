import React, { Component } from 'react';

import Airplanes from '../Data/airplanes.json'

class ProductDetail extends Component {
    render() {
        const _category = this.props.match.params.category;
        const _index = this.props.match.params.index;
        const ProductData = Airplanes[_category].photos[_index]

        return (
            <div>
                <h1>{ProductData.title}</h1>
                <img className="cardImages" src={ProductData.imageUrl} alt={ProductData.title} />
                <section className="detailTextBox">
                    <p>{ProductData.description}</p>
                    <p>{ProductData.manufacturer}</p>
                    <p>{ProductData.length}</p>
                    <p>{ProductData.maiden}</p>
                    <p>{ProductData.price}</p>
                </section>
            </div>
        );
    }
}

export default ProductDetail;