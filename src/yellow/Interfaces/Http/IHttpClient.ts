import { HttpRequestConfig } from "./HttpRequestConfig";
import { HttpResponse } from "./HttpResponse";
import { IHttpMiddleware } from "./IHttpMiddleware";

// yellow folder
export interface IHttpClient {
  useMiddleware(middleware: IHttpMiddleware): IHttpClient;
  request(config: HttpRequestConfig): Promise<HttpResponse>;
}
