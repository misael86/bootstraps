import setup from "../../setup";
setup();

// ------------------------------------------------

import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

// ------------------------------------------------

import Home from "../../../src/routes/home/index";
import { initialState } from "../../../src/routes/home/reducer";

// ------------------------------------------------

function getComponent() {
    const reducer = (state = initialState, action: any) => initialState;
    const reducers = combineReducers({ home: reducer });
    const store = createStore(reducers);

    return (
        <Provider store={store}>
            <Home />
        </Provider>
    );
}

describe("Component::Home", () => {

    it("#checkbox should exists", () => {
        let component = getComponent();
        let wrapper = shallow(component);
        expect(wrapper.find("#checkbox").length).to.equal(1);
    });

    it("#checkbox should be of type 'checkbox'", () => {
        let component = getComponent();
        let wrapper = shallow(component);
        let type = wrapper.find("#checkbox").props().checked;
        expect(type).to.equal("checkbox");
    });

    it("#checkbox should be checked", () => {
        let component = getComponent();
        let wrapper = shallow(component);
        let checked = wrapper.find("#checkbox").props().checked;
        expect(checked).to.equal(true);
    });
});
