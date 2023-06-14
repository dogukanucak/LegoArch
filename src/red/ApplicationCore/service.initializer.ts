import { HttpRequestConfig, HttpResponse, IHttpClient, IHttpMiddleware } from "@red/Contracts/Http";
import { ApiResponseBody } from "@red/Data/Response/generic.response";
import { HTTP_TOKENS } from "@red/IoC/Tokens/Http.token";
import DI_CONTAINER from "@red/IoC/di.container";

class ErrorMiddleware implements IHttpMiddleware {
  handleRequest<REQ = object>(config: HttpRequestConfig<REQ>): Promise<HttpRequestConfig<REQ>> {
    return Promise.resolve(config);
  }
  handleResponse<RES = object>(response: HttpResponse<RES>): Promise<HttpResponse<RES>> {
    const body = response.data as ApiResponseBody<RES>;

    if (body.isSuccess === false) {
      console.log("ERROR HAPPENED ULEN");
    }

    return Promise.resolve(response);
  }
}

class ServiceInitializer {
  initHttpClient(): void {
    const httpClient = DI_CONTAINER.get<IHttpClient>(HTTP_TOKENS.HttpClient);

    // httpClient.useMiddleware(new ErrorMiddleware());
  }
}

export default new ServiceInitializer();
