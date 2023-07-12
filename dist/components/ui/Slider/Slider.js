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
exports.Slider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./Slider.css");
var Slider = function (_a) {
    var images = _a.images;
    var _b = (0, react_1.useState)(0), currentIndex = _b[0], setCurrentIndex = _b[1];
    var handlePrev = function () {
        setCurrentIndex(function (prevIndex) {
            return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
        });
    };
    var handleNext = function () {
        setCurrentIndex(function (prevIndex) {
            return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
        });
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "slider-container" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "slider-images", style: { transform: "translateX(-".concat(currentIndex * 300, "px)") } }, { children: images.map(function (image, index) { return ((0, jsx_runtime_1.jsx)("img", { src: image, alt: "", className: "slider-image" }, index)); }) })), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: handlePrev, className: "slider-button slider-prev" }, { children: "Prev" })), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: handleNext, className: "slider-button slider-next" }, { children: "Next" }))] })));
};
exports.Slider = Slider;
