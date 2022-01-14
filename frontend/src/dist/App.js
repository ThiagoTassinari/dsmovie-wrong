"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var Listing_1 = require("pages/Listing");
var Form_1 = require("pages/Form");
var Navbar_1 = require("components/Navbar");
function App() {
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(Navbar_1["default"], null),
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(Listing_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "/form" },
                React.createElement(react_router_dom_1.Route, { path: ":movieId", element: React.createElement(Form_1["default"], null) })))));
}
exports["default"] = App;
