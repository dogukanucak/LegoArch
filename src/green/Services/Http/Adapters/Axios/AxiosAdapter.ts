// blue/Adapters/AxiosAdapter.ts

import axios from "axios";
import { axiosConfigMapper } from "./AxiosMapper";
import { HttpRequestConfig, HttpResponse, IHttpAdapter } from "@yellow/Interfaces/Http";

export class AxiosAdapter implements IHttpAdapter {
  async request<T = string | object>(config: HttpRequestConfig<string | object>): Promise<HttpResponse<T>> {
    const axiosResponse = await axios.request(config);
    return {
      data: axiosResponse.data,
      status: axiosResponse.status,
      statusText: axiosResponse.statusText,
      headers: axiosResponse.headers,
      config: axiosConfigMapper(axiosResponse.config),
    };
  }
}
