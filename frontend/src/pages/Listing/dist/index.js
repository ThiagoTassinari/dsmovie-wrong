"use strict";
exports.__esModule = true;
var indext_1 = require("components/MovieCard/indext");
var Pagination_1 = require("components/Pagination");
function Listing() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Pagination_1["default"], null),
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-sm-6 col-lg-4 col-xl-3 mb-3" },
                    React.createElement(indext_1["default"], null)),
                React.createElement("div", { className: "col-sm-6 col-lg-4 col-xl-3 mb-3" },
                    React.createElement(indext_1["default"], null)),
                React.createElement("div", { className: "col-sm-6 col-lg-4 col-xl-3 mb-3" },
                    React.createElement(indext_1["default"], null)),
                React.createElement("div", { className: "col-sm-6 col-lg-4 col-xl-3 mb-3" },
                    React.createElement(indext_1["default"], null)),
                React.createElement("div", { className: "col-sm-6 col-lg-4 col-xl-3 mb-3" },
                    React.createElement(indext_1["default"], null)))),
        React.createElement(indext_1["default"], null)));
}
exports["default"] = Listing;
