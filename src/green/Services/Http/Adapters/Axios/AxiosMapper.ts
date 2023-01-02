import { HttpRequestConfig } from "@yellow/Interfaces/Http";
import { HttpMethod } from "@yellow/Interfaces/Http/enums/HttpMethod.enum";
import { AxiosRequestConfig } from "axios";

export function axiosConfigMapper(config: AxiosRequestConfig): HttpRequestConfig {
  return {
    method: HttpMethod[config.method],
    url: config.url,
    data: config.data,
    headers: config.headers as { [key: string]: string },
    params: config.params,
    withCredentials: config.withCredentials,
  };
}
