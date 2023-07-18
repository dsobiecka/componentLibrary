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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./App.css");
var Button_1 = require("./components/ui/Button/Button");
var Dropdown_1 = require("./components/ui/Dropdown/Dropdown");
var Input_1 = require("./components/ui/Input/Input");
var ListElement_1 = require("./components/ui/ListElement/ListElement");
var Switch_1 = require("./components/ui/Switch/Switch");
var Navbar_1 = require("./components/ui/Navbar/Navbar");
var Slider_1 = require("./components/ui/Slider/Slider");
var ProgressBar_1 = require("./components/ui/ProgressBar/ProgressBar");
function App() {
    //button
    var handleClick = function () {
        console.log("Button clicked");
    };
    //dropdown
    var handleDropdownChange = function (selectedOption) {
        console.log("Selected option: ".concat(selectedOption));
    };
    //input
    var _a = (0, react_1.useState)(""), inputValue = _a[0], setInputValue = _a[1];
    var handleInputChange = function (value) {
        setInputValue(value);
    };
    //listElement
    var items = ["apple", "banana", "cherry"];
    var renderItem = function (item) {
        return item;
    };
    //switch
    var _b = (0, react_1.useState)(false), isSwitchOn = _b[0], setSwitchOn = _b[1];
    var handleSwitchChange = function (event) {
        setSwitchOn(event.target.checked);
    };
    //slider
    var images = [
        "https://worldbank.scene7.com/is/image/worldbankprod/rural-women-Nigeria-main-780x439?wid=780&hei=439&qlt=85,0&resMode=sharp",
        "https://worldbank.scene7.com/is/image/worldbankprod/rural-women-Nigeria-780x439?wid=780&hei=439&qlt=85,0&resMode=sharp",
        "https://c8.alamy.com/comp/2AK5A11/nigerian-woman-selling-in-a-local-nigerian-market-using-her-mobile-phone-and-credit-card-to-do-a-transaction-online-smiling-2AK5A11.jpg",
    ];
    //progressbar
    var _c = (0, react_1.useState)(30), value = _c[0], setValue = _c[1];
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "App" }, { children: [(0, jsx_runtime_1.jsx)("p", { children: "Button" }), (0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: handleClick, label: "Click me" }), (0, jsx_runtime_1.jsx)(Dropdown_1.Dropdown, { options: ["Option 1", "Option 2", "Option 3"], onChange: handleDropdownChange, className: "dropdown", buttonClassName: "dropdown-button", menuClassName: "dropdown-menu", itemClassName: "dropdown-item" }), (0, jsx_runtime_1.jsx)(Input_1.Input, { label: "Enter text: ", value: inputValue, onChange: handleInputChange }), (0, jsx_runtime_1.jsx)("ul", { children: items.map(function (item, index) { return ((0, jsx_runtime_1.jsx)(ListElement_1.ListElement, { item: item, renderItem: renderItem }, index)); }) }), (0, jsx_runtime_1.jsx)(Navbar_1.Navbar, { navClass: "main-nav", ulClass: "nav-list", liClass: "nav-item", aClass: "nav-link" }), (0, jsx_runtime_1.jsx)(Switch_1.Switch, { id: "example-switch", name: "exampleSwitch", checked: isSwitchOn, onChange: handleSwitchChange, className: "example-switch" }), (0, jsx_runtime_1.jsx)(Slider_1.Slider, { images: images }), (0, jsx_runtime_1.jsx)(ProgressBar_1.ProgressBar, { value: value, max: 100 })] })));
}
exports.default = App;
