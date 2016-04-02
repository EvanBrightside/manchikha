import React from 'react';
import * as request from 'superagent';
import ProductsList from 'ProductsList/ProductsList.jsx';

export default class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        request
            .get('/api/categories')
            .end((err, res) => this.setState({categories: JSON.parse(res.text)}));
    }

    render() {
        if (this.state.categories) {
            return <ProductsList category={this.state.categories[this.props.params.categoryId - 1]} />;
        }
        return <div>Loading...</div>;
    }
}
