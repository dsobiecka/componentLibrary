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
exports.Breadcrumb = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var Breadcrumb = function (_a) {
    var items = _a.items;
    return ((0, jsx_runtime_1.jsx)("nav", __assign({ "aria-label": "breadcrumb" }, { children: (0, jsx_runtime_1.jsx)("ol", __assign({ className: "breadcrumb" }, { children: items.map(function (item, index) {
                var isLastItem = index === items.length - 1;
                return isLastItem ? ((0, jsx_runtime_1.jsx)("li", __assign({ className: "breadcrumb-item active", "aria-current": "page" }, { children: item.text }), item.path)) : ((0, jsx_runtime_1.jsx)("li", __assign({ className: "breadcrumb-item" }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, __assign({ to: item.path }, { children: item.text })) }), item.path));
            }) })) })));
};
exports.Breadcrumb = Breadcrumb;
