import { HttpRequestConfig } from "./HttpRequestConfig";
import { HttpResponse } from "./HttpResponse";

export interface IHttpAdapter {
  request<T = object | string>(config: HttpRequestConfig): Promise<HttpResponse<T>>;
}
