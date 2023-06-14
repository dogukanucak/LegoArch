import { HttpRequestConfig } from "./HttpRequestConfig";
import { HttpResponse } from "./HttpResponse";

export interface IHttpAdapter {
  request<REQ = object, RES = object>(config: HttpRequestConfig<REQ>): Promise<HttpResponse<RES>>;
}
