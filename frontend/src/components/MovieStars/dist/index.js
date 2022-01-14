"use strict";
exports.__esModule = true;
var star_full_svg_1 = require("assets/img/star-full.svg");
var star_half_svg_1 = require("assets/img/star-half.svg");
var star_empty_svg_1 = require("assets/img/star-empty.svg");
require("./styles.css");
function MovieStars() {
    return (React.createElement("div", { className: "dsmovie-stars-container" },
        React.createElement(star_full_svg_1.ReactComponent, null),
        React.createElement(star_full_svg_1.ReactComponent, null),
        React.createElement(star_full_svg_1.ReactComponent, null),
        React.createElement(star_half_svg_1.ReactComponent, null),
        React.createElement(star_empty_svg_1.ReactComponent, null)));
}
exports["default"] = MovieStars;
