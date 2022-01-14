"use strict";
exports.__esModule = true;
var MovieScore_1 = require("components/MovieScore");
var react_router_dom_1 = require("react-router-dom");
function MovieCard() {
    var movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };
    return (React.createElement("div", null,
        React.createElement("img", { className: "dsmovie-movie-card-image", src: movie.image, alt: movie.title }),
        React.createElement("div", { className: "dsmovie-card-bottom-container" },
            React.createElement("h3", null, movie.title),
            React.createElement(MovieScore_1["default"], null),
            React.createElement(react_router_dom_1.Link, { to: "/form/" + movie.id },
                React.createElement("div", { className: "btn btn-primary dsmovie-btn" }, "Avaliar")))));
}
exports["default"] = MovieCard;
