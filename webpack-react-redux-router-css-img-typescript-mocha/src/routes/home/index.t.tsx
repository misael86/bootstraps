import { expect } from "chai";
import { mount, shallow } from "enzyme";
import * as React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

// ------------------------------------------------

import Home from "./index";
import { initialState } from "./reducer";

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
        const component = getComponent();
        const wrapper = shallow(component);
        expect(wrapper.find("#checkbox").length).to.equal(1);
    });

    it("#checkbox should be of type 'checkbox'", () => {
        const component = getComponent();
        const wrapper = shallow(component);
        const type = wrapper.find("#checkbox").props().checked;
        expect(type).to.equal("checkbox");
    });

    it("#checkbox should be checked", () => {
        const component = getComponent();
        const wrapper = shallow(component);
        const checked = wrapper.find("#checkbox").props().checked;
        expect(checked).to.equal(true);
    });
});
