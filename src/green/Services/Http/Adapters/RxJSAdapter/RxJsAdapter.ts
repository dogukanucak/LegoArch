import { HttpRequestConfig, HttpResponse, IHttpAdapter } from "@yellow/Interfaces/Http";
import { Observable, firstValueFrom } from "rxjs";
import { AjaxConfig, ajax } from "rxjs/ajax";
import { map } from "rxjs/operators";

export class RxJsAdapter implements IHttpAdapter {
  request<T = string | object>(config: HttpRequestConfig<string | object>): Promise<HttpResponse<T>> {
    const ajaxConfig: AjaxConfig = {
      url: config.url,
      body: config.data,
      headers: config.headers,
      queryParams: config.params,
      withCredentials: config.withCredentials,
    };

    const ajaxObservable: Observable<HttpResponse<T>> = ajax<T>(ajaxConfig).pipe(
      map((response) => {
        const httpResponse: HttpResponse<T> = {
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
