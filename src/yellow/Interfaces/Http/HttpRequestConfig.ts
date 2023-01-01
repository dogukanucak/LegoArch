import { HttpMethod } from "./enums/HttpMethod.enum";

export interface HttpRequestConfig<T = object | string> {
  // The URL to send the HTTP request to
  url: string;
  // The HTTP method to use for the request (e.g. GET, POST, PUT, DELETE)
  method: HttpMethod;
  // The data to include in the request body (for POST, PUT, and PATCH requests)
  data?: T;
  // The headers to include in the request
  headers?: { [key: string]: string };
  // Any query parameters to include in the request
  params?: { [key: string]: string | number };
  // Whether to use credentials (cookies, authorization headers, etc.) with the request
  withCredentials?: boolean;
}
