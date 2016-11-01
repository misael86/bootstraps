"use strict";
var types_1 = require("./types");
// ------------------------------------------------
exports.initialState = 1;
function homeReducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case types_1.DECREASE:
            state -= 1;
            break;
        case types_1.INCREASE:
            state += 1;
            break;
        default:
            return state;
    }
    return state;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = homeReducer;
//# sourceMappingURL=reducer.js.map