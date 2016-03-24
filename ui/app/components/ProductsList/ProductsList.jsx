import React from 'react';
import './ProductsList.css';
import Product from 'Product/Product.jsx';

export default class ProductsList extends React.Component {
    render() {
        const productsList = this.props.products.map(product => (
            <Product name={product.name} key={product.id} />
        ));
        return (
            <div>
                <h2>Футболки</h2>
                <div className="productsList">
                    {productsList}
                </div>
            </div>
        );
    }
}
