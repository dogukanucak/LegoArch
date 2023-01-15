import * as React from "react";
import "reflect-metadata";
import App from "./App";
import { createRoot } from "react-dom/client";
import DI_CONTAINER from "@red/IoC/di.container";
import { ConsoleLogger } from "@green/Services/Logger/ConsoleLogger";
import { HTTP_TOKENS } from "@red/IoC/Tokens/Http.token";
import { HttpClient } from "@green/Services/Http/HttpClient";
import { RxJsAdapter } from "@green/Services/Http/Adapters/RxJSAdapter/RxJsAdapter";
const container = document.getElementById("root");
const root = createRoot(container);

DI_CONTAINER.bind("ConsoleLogger").to(ConsoleLogger);

DI_CONTAINER.bind(HTTP_TOKENS.HttpClient).to(HttpClient);
DI_CONTAINER.bind(HTTP_TOKENS.HttpAdapter).to(RxJsAdapter);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
