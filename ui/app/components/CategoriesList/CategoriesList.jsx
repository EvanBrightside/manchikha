import React from 'react';
import './CategoriesList.css';
import Category from 'Category/Category.jsx';

export default class CategoriesList extends React.Component {
    render() {
        const categoryNodes = this.props.categories.map(category => (
            <Category name={category.name} key={category.id} />
        ));
        return (
            <div className="categoryList">
                {categoryNodes}
            </div>
        );
    };
};
