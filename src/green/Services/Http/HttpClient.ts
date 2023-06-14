/* eslint-disable prettier/prettier */
import { HTTP_TOKENS } from "@red/IoC/Tokens/Http.token";
import { HttpRequestConfig, HttpResponse, IHttpAdapter, IHttpClient, IHttpMiddleware } from "@red/Contracts/Http";
import { ErrorType, TypedError } from "@yellow/Types/ErrorTypes/error.type";
import { inject, injectable } from "inversify";

@injectable()
export class HttpClient implements IHttpClient {
  private adapter: IHttpAdapter;
  private middlewares: IHttpMiddleware[] = [];

  constructor(@inject(HTTP_TOKENS.HttpAdapter) adapter: IHttpAdapter) {
    this.adapter = adapter;
  }

  public useMiddleware(middleware: IHttpMiddleware) {
    this.middlewares.push(middleware);

    return this;
  }

  public async request<REQ, RES>(config: HttpRequestConfig<REQ>, withMiddlewares: IHttpMiddleware[] = []): Promise<HttpResponse<RES>> {
    try {
      // Apply request middlewares
      for (const middleware of [...this.middlewares, ...withMiddlewares]) {
        config = await middleware.handleRequest(config);
      }

      // Send request
      let response = await this.adapter.request<REQ, RES>(config);

      // Apply response middlewares
      for (const middleware of [...this.middlewares, ...withMiddlewares]) {
        response = await middleware.handleResponse(response);
      }

      return response;
    } catch (error: any) {
      // Catch error and redirect as network error
      const networkError: TypedError = { ...error, ...{ types: [ErrorType.NetworkError] } };

      throw networkError;
    }
  }
}
