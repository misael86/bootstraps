import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Router, browserHistory } from "react-router";
import { routerReducer, syncHistoryWithStore } from "react-router-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import * as logger from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

// ------------------------------------------------

import Home from "./routes/home";
import homeReducer from "./routes/home/reducer";

// ------------------------------------------------

const reducer = combineReducers({
    home: homeReducer,
    routing: routerReducer,
});

const middleWare = applyMiddleware(promise(), thunk, logger());
const store = createStore(reducer, middleWare);
const history = syncHistoryWithStore(browserHistory, store);

// ------------------------------------------------

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Home} />
        </Router>
    </Provider>,
    document.getElementById("app")
);
