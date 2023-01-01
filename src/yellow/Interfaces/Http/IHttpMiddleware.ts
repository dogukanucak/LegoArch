import { HttpRequestConfig } from "./HttpRequestConfig";
import { HttpResponse } from "./HttpResponse";

export interface IHttpMiddleware {
  handleRequest(config: HttpRequestConfig): Promise<HttpRequestConfig>;
  handleResponse(response: HttpResponse): Promise<HttpResponse>;
}
