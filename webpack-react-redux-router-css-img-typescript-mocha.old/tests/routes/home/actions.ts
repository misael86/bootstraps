import { expect } from "chai";

// ------------------------------------------------

import { decrease, increase } from "../../../src/routes/home/actions";
import { DECREASE, INCREASE } from "../../../src/routes/home/types";

// ------------------------------------------------

describe("Action::Home", () => {

    describe("#decrease()", () => {
        it("returns DECREASE action", () => {
            const result = decrease();
            expect(result).to.deep.equal({
                type: DECREASE,
            });
        });
    });

    describe("#increase()", () => {
        it("returns INCREASE action", () => {
            const result = increase();
            expect(result).to.deep.equal({
                type: INCREASE,
            });
        });
    });

});
