import React from 'react';
import * as request from 'superagent';
import CategoriesList from 'CategoriesList/CategoriesList.jsx';

export default class CategoriesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          categories: [],
          currentCategory: { products: [] }
      };
    }

    componentDidMount() {
        request
        .get('/api/categories')
        .end((err, res) => {
            const response = JSON.parse(res.text);
            this.setState({
              categories: response.categories,
              currentCategory: response.categories[0]
          });
        });
    }

    render() {
        return (
          <CategoriesList categories={this.state.categories} />
          <ProductsList category={this.state.currentCategory} />
          )
    }
}
