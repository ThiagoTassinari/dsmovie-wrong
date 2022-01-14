"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
require("./styles.css");
function Form() {
    var movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };
    return (React.createElement("div", { className: "dsmovie-form-container" },
        React.createElement("img", { className: "dsmovie-movie-card-image", src: movie.image, alt: movie.title }),
        React.createElement("div", { className: "dsmovie-card-bottom-container" },
            React.createElement("h3", null, movie.title),
            React.createElement("form", { className: "dsmovie-form" },
                React.createElement("div", { className: "form-group dsmovie-form-group" },
                    React.createElement("label", { htmlFor: "email" }, "Informe seu email"),
                    React.createElement("input", { type: "email", className: "form-control", id: "email" })),
                React.createElement("div", { className: "form-group dsmovie-form-group" },
                    React.createElement("label", { htmlFor: "score" }, "Informe sua avalia\u00E7\u00E3o"),
                    React.createElement("select", { className: "form-control", id: "score" },
                        React.createElement("option", null, "1"),
                        React.createElement("option", null, "2"),
                        React.createElement("option", null, "3"),
                        React.createElement("option", null, "4"),
                        React.createElement("option", null, "5"))),
                React.createElement("div", { className: "dsmovie-form-btn-container" },
                    React.createElement("button", { type: "submit", className: "btn btn-primary dsmovie-btn" }, "Salvar"))),
            React.createElement(react_router_dom_1.Link, { to: "/" },
                React.createElement("button", { className: "btn btn-primary dsmovie-btn mt-3" }, "Cancelar")))));
}
exports["default"] = Form;
