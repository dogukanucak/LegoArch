import * as React from "react";
import "reflect-metadata";
import App from "./App";
import { createRoot } from "react-dom/client";
import AppInjector from "./app.injector";

const container = document.getElementById("root");
const root = createRoot(container);

AppInjector.inject();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
