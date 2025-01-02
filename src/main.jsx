import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.scss";

const isGitHubPages = window.location.hostname === "keltz-dev.github.io";
const basename = isGitHubPages ? "/stevos-website" : "";

// const router = createHashRouter([
//   {
//     path: "/*",
//     element: <App />,
//   }
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter basename={basename}>
    <App />
  </HashRouter>
);
