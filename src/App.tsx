import { NetworkErrorHandler } from "@green/Services/ErrorHandlers/NetworkErrorHandler/NetworkErrorHandler";
import { AxiosAdapter } from "@green/Services/Http/Adapters/Axios/AxiosAdapter";
import { RxJsAdapter } from "@green/Services/Http/Adapters/RxJSAdapter/RxJsAdapter";
import { HttpClient } from "@green/Services/Http/HttpClient";
import { HttpRequestConfig, HttpResponse, IHttpMiddleware } from "@yellow/Interfaces/Http";
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

  const httpClient = new HttpClient(new RxJsAdapter());
  const config: HttpRequestConfig = {
    method: HttpMethod.GET,
    url: "https://jsonplaceholder.typicode.com/todosError/1",
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

const App: React.FC = () => {
  testHTTPClient();
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};

export default App;
