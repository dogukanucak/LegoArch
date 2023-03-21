import { NetworkErrorHandler } from "@green/Services/ErrorHandlers/NetworkErrorHandler/NetworkErrorHandler";
import { ConsoleLogger } from "@green/Services/Logger/ConsoleLogger";
import { HTTP_TOKENS } from "@red/IoC/Tokens/Http.token";
import DI_CONTAINER from "@red/IoC/di.container";
import { LogLevel } from "@red/Types/Logger/LogType";
import { Logger } from "@yellow/Abstractions/Logger/Logger";
import { HttpRequestConfig, HttpResponse, IHttpClient, IHttpMiddleware } from "@yellow/Interfaces/Http";
import { HttpMethod } from "@yellow/Interfaces/Http/enums/HttpMethod.enum";
import * as React from "react";

class TestMiddleWare implements IHttpMiddleware {
  handleRequest(config: HttpRequestConfig<string | object>): Promise<HttpRequestConfig<string | object>> {
    console.log("Can handle request!");
    return Promise.resolve(config);
  }
  handleResponse(response: HttpResponse<string | object>): Promise<HttpResponse<string | object>> {
    console.log("Can handle response");
    return Promise.resolve(response);
  }
}

const testHTTPClient = () => {
  const handler = new NetworkErrorHandler();

  const httpClient = DI_CONTAINER.get<IHttpClient>(HTTP_TOKENS.HttpClient);

  const config: HttpRequestConfig = {
    method: HttpMethod.GET,
    url: "https://jsonplaceholder.typicode.com/todos/1",
  };

  httpClient.useMiddleware(new TestMiddleWare());

  httpClient
    .request(config)
    .then((response) => {
      console.log("Response: ", response.data);
    })
    .catch((error) => {
      console.log("Error: ", error);
      handler.handleError(error);
    });
};

const testLogger = () => {
  const logSubject = new Logger();
  const consoleLogger = DI_CONTAINER.get<ConsoleLogger>("ConsoleLogger");
  logSubject.attach(consoleLogger);

  logSubject.write({ level: LogLevel.ERROR, message: "HEY TEST THIS LOG MESSAGE" });
};

const test = async () => {
  const { RemoteApp } = await import("PRODUCT/RemoteApp");
  console.log("Remote App: ", new RemoteApp());
};

const App: React.FC = () => {
  test()
    .then((response) => {
      console.log("Response: ", response);
    })
    .catch((error) => {
      console.log("Errror:", error);
    });
  testHTTPClient();
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};

export default App;
