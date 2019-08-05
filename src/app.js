import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet name="ghost" animal="dog" breed='dire wolf' />
      <Pet name="frankie" animal="Also dog" breed='poodle' />
      <Pet name="jax" animal="Cat" breed='orange' />
    </div>
  )
};

render(<App />, document.getElementById("root"));
