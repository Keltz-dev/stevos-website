import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const isGitHubPages = window.location.hostname === "keltz-dev.github.io";
const basename = isGitHubPages ? "/stevos-website" : "";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);
