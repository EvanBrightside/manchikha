import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.html';
import CategoriesList from 'CategoriesList/CategoriesList.jsx';

const categories = [{id: 1, name: 'Майки'}, {id: 2, name: 'Винил'}, {id: 3, name: 'Худи'}];

ReactDOM.render(<CategoriesList categories={categories} />, document.getElementById('app'));
