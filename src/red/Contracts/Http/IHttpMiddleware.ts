import { HttpRequestConfig } from "./HttpRequestConfig";
import { HttpResponse } from "./HttpResponse";

export interface IHttpMiddleware {
  handleRequest<REQ = object>(config: HttpRequestConfig<REQ>): Promise<HttpRequestConfig<REQ>>;
  handleResponse<RES = object>(response: HttpResponse<RES>): Promise<HttpResponse<RES>>;
}
