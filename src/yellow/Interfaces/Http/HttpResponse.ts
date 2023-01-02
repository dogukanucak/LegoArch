import { HttpRequestConfig } from "./HttpRequestConfig";

export interface HttpResponse<T = object | string> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config?: HttpRequestConfig;
  request?: XMLHttpRequest;
}
