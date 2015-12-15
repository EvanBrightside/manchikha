import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.html';
import HelloWorld from 'HelloWorld/HelloWorld.jsx';

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
