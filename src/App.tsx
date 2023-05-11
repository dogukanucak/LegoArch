import { QuoteService } from "@red/BusinessServices/QuoteService/quote.service";
import { HTTP_TOKENS } from "@red/IoC/Tokens/Http.token";
import DI_CONTAINER from "@red/IoC/di.container";
import { HttpRequestConfig, HttpResponse, IHttpClient, IHttpMiddleware } from "@red/Contracts/Http";
import React from "react";

class ConsoleLoggerMiddleware implements IHttpMiddleware {
  handleRequest(config: HttpRequestConfig<string | object>): Promise<HttpRequestConfig<string | object>> {
    console.log("Can handle request!");
    return Promise.resolve(config);
  }
  handleResponse(response: HttpResponse<string | object>): Promise<HttpResponse<string | object>> {
    console.log("Can handle response: ", response.data);
    return Promise.resolve(response);
  }
}

function getQuotes() {
  const httpClient = DI_CONTAINER.get<IHttpClient>(HTTP_TOKENS.HttpClient);

  httpClient.useMiddleware(new ConsoleLoggerMiddleware());

  const quoteService = new QuoteService(httpClient);
  quoteService.getQuote();
}

const App: React.FC = () => {
  return (
    <>
      <h1>Welcome To Quote App</h1>
      <button onClick={getQuotes}>Get Quotes</button>
    </>
  );
};

export default App;
