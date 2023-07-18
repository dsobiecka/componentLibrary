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
exports.Navbar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Navbar = function (_a) {
    var navClass = _a.navClass, ulClass = _a.ulClass, liClass = _a.liClass, aClass = _a.aClass;
    return ((0, jsx_runtime_1.jsx)("nav", __assign({ className: navClass }, { children: (0, jsx_runtime_1.jsxs)("ul", __assign({ className: ulClass }, { children: [(0, jsx_runtime_1.jsx)("li", __assign({ className: liClass }, { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "/", className: aClass }, { children: "Home" })) })), (0, jsx_runtime_1.jsx)("li", __assign({ className: liClass }, { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "/about", className: aClass }, { children: "About" })) })), (0, jsx_runtime_1.jsx)("li", __assign({ className: liClass }, { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "/contact", className: aClass }, { children: "Contact" })) }))] })) })));
};
exports.Navbar = Navbar;
