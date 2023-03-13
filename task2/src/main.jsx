import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DogProvider } from "./context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DogProvider>
    <App />
  </DogProvider>
);
