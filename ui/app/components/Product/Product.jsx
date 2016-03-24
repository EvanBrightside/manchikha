import React from 'react';
import './Product.css';

export default class Product extends React.Component {
    render() {
        return (
            <div className='product'>{this.props.name}</div>
        );
    }
}
