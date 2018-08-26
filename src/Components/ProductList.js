import React, { Component } from 'react';

import Airplanes from '../Data/airplanes.json'

class ProductList extends Component {
    render() {
        const _thisProps = Airplanes[this.props.match.params.category]
        if (!_thisProps) {
            return <h1>Stop Playing with the URL</h1>
        } else {
            return (
                <div>
                    <header>{_thisProps.title}</header>
                    <p>{_thisProps.description}</p>
                    <section>
                        {
                            _thisProps.photos.map((photo, i) => {
                                return <img src={photo.imageUrl} alt={photo.title} key={i}/>
                            })
                        }
                    </section>
                </div>
            );
        }
    }
}

export default ProductList;