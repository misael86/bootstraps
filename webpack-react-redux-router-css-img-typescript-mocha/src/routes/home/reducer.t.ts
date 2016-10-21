import { expect } from "chai";

// ------------------------------------------------

import homeReducer from "./reducer";
import { DECREASE, INCREASE } from "./types";

// ------------------------------------------------

describe("Reducer::Home", () => {
    it("returns 1 as default state", () => {
        let action = { type: "unknown" };
        let newState = homeReducer(undefined, action);
        expect(newState).to.deep.equal(1);
    });

    describe("on DECREASE", () => {
        it("returns default value minus 1", () => {
            let action = { type: DECREASE };
            let newState = homeReducer(undefined, action);
            expect(newState).to.deep.equal(0);
        });
    });

    describe("on INCREASE", () => {
        it("returns default value plus 1", () => {
            let action = { type: INCREASE };
            let newState = homeReducer(undefined, action);
            expect(newState).to.deep.equal(2);
        });
    });
});
