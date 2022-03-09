import React from "react";
import { render } from "react-dom";
import App from "./components/App";

import "./index.css";

console.log(
  '👋 This message is being logged by "renderer/index.ts", included via webpack'
);

const root = document.createElement("div");
root.id = "root";
document.body.appendChild(root);
render(<App />, document.getElementById("root"));
