import { HttpRequestConfig } from "./HttpRequestConfig";
import { HttpResponse } from "./HttpResponse";
import { IHttpMiddleware } from "./IHttpMiddleware";

// yellow folder
export interface IHttpClient {
  useMiddleware(middleware: IHttpMiddleware): IHttpClient;
  request<REQ = object, RES = object>(
    config: HttpRequestConfig<REQ>,
    withMiddlewares?: IHttpMiddleware[],
  ): Promise<HttpResponse<RES>>;
}
