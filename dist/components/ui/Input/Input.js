"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Input = function (_a) {
    var label = _a.label, value = _a.value, onChange = _a.onChange;
    var handleChange = function (event) {
        onChange(event.target.value);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { children: label }), (0, jsx_runtime_1.jsx)("input", { type: "text", value: value, onChange: handleChange })] }));
};
exports.Input = Input;
