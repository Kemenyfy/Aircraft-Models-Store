import React, { Component } from 'react';

import Airplanes from '../Data/airplanes.json'

class ProductList extends Component {
    render() {
        return (
            <div>
                <header>{Airplanes[this.props.match.params.category].title}</header>
                <p>{Airplanes[this.props.match.params.category].description}</p>
                <section>
                    {
                        Airplanes[this.props.match.params.category].photos.map((photo, i) => {
                            return <img src={photo.imageUrl} alt={photo.title}/>
                        })
                    }
                </section>
            </div>
        );
    }
}

export default ProductList;