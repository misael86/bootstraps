import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// ------------------------------------------------

import { Home } from './routes';
import { homeReducer } from './reducers'

// ------------------------------------------------

const reducer = combineReducers({
    home: homeReducer,
    routing: routerReducer
});
const store = createStore(reducer);

const history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Home} />
        </Router>
    </Provider>, 
    document.getElementById('app')
);
