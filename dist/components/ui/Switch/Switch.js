"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Switch = function (_a) {
    var id = _a.id, name = _a.name, checked = _a.checked, onChange = _a.onChange, className = _a.className;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: className }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", id: id, name: name, checked: checked, onChange: onChange, className: "switch-input" }), (0, jsx_runtime_1.jsx)("label", { htmlFor: id, className: "switch-label" })] })));
};
exports.Switch = Switch;
