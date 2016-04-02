import React from 'react';
import './CategoriesList.css';
import Category from 'Category/Category.jsx';

export default class CategoriesList extends React.Component {
    render() {
        const categoryNodes = this.props.categories.map(category => (
            <Category name={category.name} key={category.id} categoryId={category.id} />
        ));
        return (
            <div>
                <h2>Вещи</h2>
                <div className="categoryList">
                    {categoryNodes}
                </div>
            </div>
        );
    }
}
