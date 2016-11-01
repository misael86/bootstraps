"use strict";
var chai_1 = require("chai");
// ------------------------------------------------
var actions_1 = require("./actions");
var types_1 = require("./types");
// ------------------------------------------------
describe("Action::Home", function () {
    describe("#decrease()", function () {
        it("returns DECREASE action", function () {
            var result = actions_1.decrease();
            chai_1.expect(result).to.deep.equal({
                type: types_1.DECREASE,
            });
        });
    });
    describe("#increase()", function () {
        it("returns INCREASE action", function () {
            var result = actions_1.increase();
            chai_1.expect(result).to.deep.equal({
                type: types_1.INCREASE,
            });
        });
    });
});
//# sourceMappingURL=actions.test.js.map