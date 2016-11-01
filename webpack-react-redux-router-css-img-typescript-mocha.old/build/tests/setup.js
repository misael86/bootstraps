"use strict";
var jsDom = require("jsdom");
// ------------------------------------------------
function init(markup) {
    if (typeof document !== "undefined") {
        return;
    }
    var body = "<body><div id='app'></div></body>";
    global.document = jsDom.jsdom(markup || body);
    global.window = document.parentWindow;
    global.navigator = { userAgent: "node.js" };
}
exports.init = init;
;
//# sourceMappingURL=setup.js.map