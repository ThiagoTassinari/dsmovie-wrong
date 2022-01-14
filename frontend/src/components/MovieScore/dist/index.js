"use strict";
exports.__esModule = true;
var MovieStars_1 = require("components/MovieStars");
require("./styles.css");
function MovieScore() {
    var score = 3.5;
    var count = 13;
    return (React.createElement("div", { className: "dsmovie-score-container" },
        React.createElement("p", { className: "dsmovie-score-value" }, score > 0 ? score.toFixed(1) : "-"),
        React.createElement(MovieStars_1["default"], null),
        React.createElement("p", { className: "dsmovie-score-count" },
            count,
            " avalia\u00E7\u00F5es")));
}
exports["default"] = MovieScore;
