import React from 'react';
import './Category.css';

export default class Category extends React.Component {
    render() {
        return (
            <div>{this.props.name}</div>
        );
    };
};
