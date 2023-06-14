import { HttpRequestConfig, HttpResponse, IHttpAdapter } from "@red/Contracts/Http";
import { injectable } from "inversify";
import { Observable, firstValueFrom } from "rxjs";
import { AjaxConfig, ajax } from "rxjs/ajax";
import { map } from "rxjs/operators";

@injectable()
export class RxJsAdapter implements IHttpAdapter {
  request<REQ = object, RES = object>(config: HttpRequestConfig<REQ>): Promise<HttpResponse<RES>> {
    const ajaxConfig: AjaxConfig = {
      url: config.url,
      body: config.data,
      headers: config.headers,
      queryParams: config.params,
      withCredentials: config.withCredentials,
    };

    const ajaxObservable: Observable<HttpResponse<RES>> = ajax<RES>(ajaxConfig).pipe(
      map((response) => {
        const httpResponse: HttpResponse<RES> = {
          data: response.response,
          status: response.status,
          statusText: response.xhr.statusText,
          headers: response.responseHeaders,
        };

        return httpResponse;
      }),
    );

    return firstValueFrom(ajaxObservable);
  }
}
