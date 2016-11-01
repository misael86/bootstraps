"use strict";
var chai_1 = require("chai");
// ------------------------------------------------
var reducer_1 = require("./reducer");
var types_1 = require("./types");
// ------------------------------------------------
describe("Reducer::Home", function () {
    it("returns 1 as default state", function () {
        var action = { type: "unknown" };
        var newState = reducer_1.default(undefined, action);
        chai_1.expect(newState).to.deep.equal(1);
    });
    describe("on DECREASE", function () {
        it("returns default value minus 1", function () {
            var action = { type: types_1.DECREASE };
            var newState = reducer_1.default(undefined, action);
            chai_1.expect(newState).to.deep.equal(0);
        });
    });
    describe("on INCREASE", function () {
        it("returns default value plus 1", function () {
            var action = { type: types_1.INCREASE };
            var newState = reducer_1.default(undefined, action);
            chai_1.expect(newState).to.deep.equal(2);
        });
    });
});
//# sourceMappingURL=reducer.test.js.map