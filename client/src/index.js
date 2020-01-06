import React from 'react';
import ReactDOM from 'react-redux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);