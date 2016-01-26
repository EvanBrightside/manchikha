import React from 'react';
import * as request from 'superagent';
import CategoriesList from 'CategoriesList/CategoriesList.jsx';

export default class CategoriesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {categories: []};
    }

    componentDidMount() {
        request
            .get('/api/categories')
            .end((err, res) => this.setState({categories: JSON.parse(res.text)}));
    }

    render() {
        return <CategoriesList categories={this.state.categories} />;
    }
};
