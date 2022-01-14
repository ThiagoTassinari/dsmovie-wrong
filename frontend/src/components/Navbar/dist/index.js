"use strict";
exports.__esModule = true;
var github_svg_1 = require("assets/img/github.svg");
require("./styles.css");
function Navbar() {
    return (React.createElement("header", null,
        React.createElement("nav", { className: "container" },
            React.createElement("div", { className: "dsmovie-nav-content" },
                React.createElement("h1", null, "DSMovie"),
                React.createElement("a", { href: "https://github.com/ThiagoTassinari" },
                    React.createElement("div", { className: "dsmovie-contact-container" },
                        React.createElement(github_svg_1.ReactComponent, null),
                        React.createElement("p", { className: "dsmovie-contact-link" }, "/devsuperior")))))));
}
exports["default"] = Navbar;
