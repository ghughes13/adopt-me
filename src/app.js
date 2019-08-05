import React from "react";
import { render } from "react-dom";

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "dash",
      animal: "dog",
      breed: "poodle"
    }),
    React.createElement(Pet, {
      name: "frankie",
      animal: "Also dog",
      breed: "poodle"
    }),
    React.createElement(Pet, {
      name: "jax",
      animal: "Cat",
      breed: "orange"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
