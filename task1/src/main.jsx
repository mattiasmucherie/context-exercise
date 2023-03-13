import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CountProvider } from "./context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CountProvider>
    <App />
  </CountProvider>
);
