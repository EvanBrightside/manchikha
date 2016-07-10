import React from 'react';
import { Link } from 'react-router';
import './Category.css';
import ProductsList from 'ProductsList';

export default class Category extends React.Component {
    render() {
        return (
            <div className='category'>
              <Link to={'/products/${this.props.categoryId}'}
                  className='category-a'>
                  {this.props.name}
              </Link>
            </div>
        );
    }
}
