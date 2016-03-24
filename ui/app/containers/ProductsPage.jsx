import React from 'react';
import * as request from 'superagent';
import ProductsList from 'ProductsList/ProductsList.jsx';

export default class CategoriesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {categories: [{products: []}]};
    }

    componentDidMount() {
        request
            .get('/api/categories')
            .end((err, res) => this.setState({categories: JSON.parse(res.text)}));
    }

    render() {        
        return <ProductsList products={this.state.categories[0].products} />;
    }
}
