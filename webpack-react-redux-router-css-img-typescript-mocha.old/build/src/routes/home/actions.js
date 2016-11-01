"use strict";
var types_1 = require("./types");
// ------------------------------------------------
function increase() {
    return {
        type: types_1.INCREASE,
    };
}
exports.increase = increase;
function decrease() {
    return {
        type: types_1.DECREASE,
    };
}
exports.decrease = decrease;
//# sourceMappingURL=actions.js.map