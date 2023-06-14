import * as React from "react";
import "reflect-metadata";
import App from "./App";
import { createRoot } from "react-dom/client";
import AppInjector from "./red/ApplicationCore/app.injector";
import ServiceInitializer from "./red/ApplicationCore/service.initializer";

const container = document.getElementById("root");
const root = createRoot(container);

AppInjector.inject();
ServiceInitializer.initHttpClient();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
