"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_redux_1 = require("react-redux");
// ------------------------------------------------
var actions_1 = require("./actions");
var styles = require("./styles.scss");
var img = require("../../../assets/img/img.jpg");
// ------------------------------------------------
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        _super.call(this);
        this.doDecrease = this.doDecrease.bind(this);
        this.doIncrease = this.doIncrease.bind(this);
    }
    Home.prototype.render = function () {
        var home = this.props.home;
        return (React.createElement("div", null, React.createElement("h1", {className: styles.title}, "Webpack - React - Redux - Router"), React.createElement("img", {src: img}), React.createElement("h2", null, "Value: ", home), React.createElement("input", {id: "checkbox", className: "checkbox", type: "checkbox", checked: true}), React.createElement("button", {onClick: this.doDecrease}, "DECREASE"), React.createElement("button", {onClick: this.doIncrease}, "INCREASE")));
    };
    Home.prototype.doDecrease = function () {
        this.props.dispatch(actions_1.decrease());
    };
    Home.prototype.doIncrease = function () {
        this.props.dispatch(actions_1.increase());
    };
    return Home;
}(React.Component));
var mapStateToProps = function (store) {
    return { home: store.home };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps)(Home);
//# sourceMappingURL=index.js.map