import { assert } from "chai";
import * as React from "react";
import * as ReactTestUtils from "react-addons-test-utils";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

// ------------------------------------------------

import { initialState } from "../../../src/routes/home/reducer";
import Home from "../../../src/routes/home/index";

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

// ------------------------------------------------

describe("Component::Home", () => {

    let renderer: any;
    let homeComponent: any;

    beforeEach(() => {
        const component = getComponent();
        renderer  = ReactTestUtils.createRenderer();
        renderer.render(component);
        homeComponent = renderer.getRenderOutput();
    });

    it("#is defined", () => {
        assert.isDefined(homeComponent);
    });
});
