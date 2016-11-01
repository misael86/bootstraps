"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
var react_router_1 = require("react-router");
var react_router_redux_1 = require("react-router-redux");
var redux_1 = require("redux");
// ------------------------------------------------
var home_1 = require("./routes/home");
var reducer_1 = require("./routes/home/reducer");
// ------------------------------------------------
var reducer = redux_1.combineReducers({
    home: reducer_1.default,
    routing: react_router_redux_1.routerReducer,
});
var store = redux_1.createStore(reducer);
var history = react_router_redux_1.syncHistoryWithStore(react_router_1.browserHistory, store);
ReactDOM.render(React.createElement(react_redux_1.Provider, {store: store}, React.createElement(react_router_1.Router, {history: history}, React.createElement(react_router_1.Route, {path: "/", component: home_1.default}))), document.getElementById("app"));
//# sourceMappingURL=main.js.map