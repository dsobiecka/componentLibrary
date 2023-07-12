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
exports.ProgressBar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./ProgressBar.css");
var ProgressBar = function (_a) {
    var value = _a.value, max = _a.max;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "progress-bar" }, { children: (0, jsx_runtime_1.jsx)("div", { className: "progress-bar__fill", style: { width: "".concat((value / max) * 100, "%") } }) })));
};
exports.ProgressBar = ProgressBar;
