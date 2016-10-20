import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';

// ------------------------------------------------

import { Home } from './routes';
import { homeReducer } from './reducers'

// ------------------------------------------------

const reducer = combineReducers({
    home: homeReducer
});
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>, 
    document.getElementById('app')
);