import React from 'react';
import './ProductsList.css';
import Product from 'Product/Product.jsx';

export default class ProductsList extends React.Component {
    render() {
        const productsList = this.props.category.products.map(product => (
            <Product name={product.name} key={product.id} />
        ));
        return (
            <div>
                <h2>Вещи > {this.props.category.name}</h2>
                <div className="productsList">
                    {productsList}
                </div>
            </div>
        );
    }
}
