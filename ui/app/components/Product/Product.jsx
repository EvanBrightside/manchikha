import React from 'react';
import './Product.css';

export default class Product extends React.Component {
    render() {
        return (
            <div className='product'>
                <div className='product-photo'>
                    <img src='' title={this.props.name} />
                </div>
                <div className='product-description'>{this.props.name}</div>
            </div>
        );
    }
}
