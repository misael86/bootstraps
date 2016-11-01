import JsDom from "jsdom";

export default function () {
    global.document = JsDom.jsdom('<body><div id="app"></div></body>');
    global.window = document.defaultView;
    global.navigator = { userAgent: "node.js" };
}
