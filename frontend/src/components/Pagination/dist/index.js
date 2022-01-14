"use strict";
exports.__esModule = true;
var arrow_svg_1 = require("assets/img/arrow.svg");
require("./styles.css");
function Pagination() {
    return (React.createElement("div", { className: "dsmovie-pagination-container" },
        React.createElement("div", { className: "dsmovie-pagination-box" },
            React.createElement("button", { className: "dsmovie-pagination-button", disabled: true },
                React.createElement(arrow_svg_1.ReactComponent, null)),
            React.createElement("p", null, 1 + " de " + 3),
            React.createElement("button", { className: "dsmovie-pagination-button", disabled: false },
                React.createElement(arrow_svg_1.ReactComponent, { className: "dsmovie-flip-horizontal" })))));
}
exports["default"] = Pagination;
