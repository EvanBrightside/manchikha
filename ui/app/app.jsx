import 'babel-core/polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import './index.html';
import 'normalize.css/normalize.css';
import './css/app.css';

import MainMenu from 'MainMenu.jsx';
import News from 'NewsPage.jsx';
import CategoriesPage from 'CategoriesPage.jsx';
import About from 'AboutPage.jsx';

render((
    <Router history={ browserHistory }>
        <Route path='/' component={ MainMenu }>
            <IndexRoute component={ News }/>
            <Route path='/news' component={ News }/>
            <Route path='/products' component={ CategoriesPage }/>
            <Route path='/products/:categoryId' component={ CategoriesPage }/>
            <Route path='/about' component={ About }/>
        </Route>
    </Router>
), document.getElementById('app'));
