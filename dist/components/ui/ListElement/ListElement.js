"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListElement = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ListElement = function (_a) {
    var item = _a.item, renderItem = _a.renderItem;
    return (0, jsx_runtime_1.jsx)("li", { children: renderItem(item) });
};
exports.ListElement = ListElement;
