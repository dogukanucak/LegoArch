import { QUOTE_ENDPOINT } from "@red/ApplicationConstants/Integration/server.config";
import { HTTP_TOKENS } from "@red/IoC/Tokens/Http.token";
import { IHttpClient } from "@red/Contracts/Http";
import { HttpMethod } from "@red/Contracts/Http/enums/HttpMethod.enum";
import { inject } from "inversify";

export class QuoteService {
  private httpClient: IHttpClient;

  constructor(@inject(HTTP_TOKENS.HttpClient) httpClient: IHttpClient) {
    this.httpClient = httpClient;
  }

  public async getQuote(): Promise<void> {
    await this.httpClient.request({
      method: HttpMethod.GET,
      url: QUOTE_ENDPOINT,
    });
  }
}
