import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

var root = document.createElement("div");
root.setAttribute("id", "root");
document.body.append(root);

ReactDOM.render(<App />, document.getElementById("root"));