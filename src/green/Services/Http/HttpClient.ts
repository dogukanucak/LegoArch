import { IHttpClient } from "@yellow/Interfaces/Http/IHttpClient";
import { HttpRequestConfig } from "@yellow/Interfaces/Http/HttpRequestConfig";
import { HttpResponse } from "@yellow/Interfaces/Http/HttpResponse";
import { IHttpAdapter } from "@yellow/Interfaces/Http/IHttpAdapter";
import { IHttpMiddleware } from "@yellow/Interfaces/Http/IHttpMiddleware";

export class HttpClient implements IHttpClient {
  private adapter: IHttpAdapter;
  private middlewares: IHttpMiddleware[] = [];

  constructor(adapter: IHttpAdapter) {
    this.adapter = adapter;
  }

  public useMiddleware(middleware: IHttpMiddleware) {
    this.middlewares.push(middleware);

    return this;
  }

  public async request(config: HttpRequestConfig): Promise<HttpResponse> {
    // Apply request middlewares
    for (const middleware of this.middlewares) {
      config = await middleware.handleRequest(config);
    }

    // Send request
    let response = await this.adapter.request(config);

    // Apply response middlewares
    for (const middleware of this.middlewares) {
      response = await middleware.handleResponse(response);
    }

    return response;
  }
}
