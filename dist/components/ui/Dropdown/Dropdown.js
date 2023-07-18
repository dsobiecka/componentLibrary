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
exports.Dropdown = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Dropdown = function (_a) {
    var options = _a.options, onChange = _a.onChange, className = _a.className, buttonClassName = _a.buttonClassName, menuClassName = _a.menuClassName, itemClassName = _a.itemClassName;
    var _b = (0, react_1.useState)(false), isOpen = _b[0], setIsOpen = _b[1];
    var handleToggle = function () { return setIsOpen(!isOpen); };
    var handleOptionClick = function (option) {
        onChange(option);
        setIsOpen(false);
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: className }, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ className: buttonClassName, onClick: handleToggle }, { children: "Select" })), isOpen && ((0, jsx_runtime_1.jsx)("ul", __assign({ className: menuClassName }, { children: options.map(function (option, index) { return ((0, jsx_runtime_1.jsx)("li", __assign({ className: itemClassName, onClick: function () { return handleOptionClick(option); } }, { children: option }), index)); }) })))] })));
};
exports.Dropdown = Dropdown;
