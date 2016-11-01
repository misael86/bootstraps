"use strict";
var ran = require("../../../tests/setup");
ran.init("");
// ------------------------------------------------
var chai_1 = require("chai");
var enzyme_1 = require("enzyme");
var React = require("react");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
// ------------------------------------------------
var index_1 = require("./index");
var reducer_1 = require("./reducer");
// ------------------------------------------------
function getComponent() {
    var reducer = function (state, action) {
        if (state === void 0) { state = reducer_1.initialState; }
        return reducer_1.initialState;
    };
    var reducers = redux_1.combineReducers({ home: reducer });
    var store = redux_1.createStore(reducers);
    return (React.createElement(react_redux_1.Provider, {store: store}, React.createElement(index_1.default, null)));
}
describe("Component::Home", function () {
    it("#checkbox should exists", function () {
        var component = getComponent();
        var wrapper = enzyme_1.shallow(component);
        chai_1.expect(wrapper.find("#checkbox").length).to.equal(1);
    });
    it("#checkbox should be of type 'checkbox'", function () {
        var component = getComponent();
        var wrapper = enzyme_1.shallow(component);
        var type = wrapper.find("#checkbox").props().checked;
        chai_1.expect(type).to.equal("checkbox");
    });
    it("#checkbox should be checked", function () {
        var component = getComponent();
        var wrapper = enzyme_1.shallow(component);
        var checked = wrapper.find("#checkbox").props().checked;
        chai_1.expect(checked).to.equal(true);
    });
});
//# sourceMappingURL=index.test.js.map