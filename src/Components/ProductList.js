import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Airplanes from '../Data/airplanes.json'

class ProductList extends Component {
    render() {
        const _this = this.props.match.params.category
        const _thisProps = Airplanes[_this]
        if (!_thisProps) {
            return <h1>Stop Playing with the URL</h1>
        } else {
            return (
                <div className="productList">
                    <header className="cardTitle">{_thisProps.title}</header>
                    <p className="categoriesParagraph">{_thisProps.description}</p>
                    <section className="productImagesList">
                        <section className="listImages">
                            {
                                _thisProps.photos.map((photo, i) => {
                                    return <section className="imagesList" key={i}>
                                        <p>{photo.title}</p>
                                        <Link to={`/${_this}/${i}`} key={i}>
                                            <img className="cardImages" src={photo.imageUrl} alt={photo.title} key={i} />
                                        </Link>
                                    </section>
                                })
                            }
                        </section>
                    </section>
                </div>
            );
        }
    }
}

export default ProductList;