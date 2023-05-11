import { ErrorType } from "@yellow/Types/ErrorTypes/error.type";

import { HttpRequestConfig, HttpResponse, IHttpAdapter, IHttpMiddleware } from "@red/Contracts/Http";
import { HttpClient } from "./HttpClient";
import { HttpMethod } from "@red/Contracts/Http/enums/HttpMethod.enum";

const mockRequestConfig: HttpRequestConfig = { url: "mockURL", method: HttpMethod.GET };

describe("HttpClient", () => {
  let httpClient: HttpClient;
  let mockAdapter: IHttpAdapter;
  let mockMiddleware: IHttpMiddleware;

  beforeEach(() => {
    mockAdapter = {
      request: jest.fn().mockResolvedValue({ status: 200, data: {} }),
    };
    httpClient = new HttpClient(mockAdapter);
    mockMiddleware = {
      handleRequest: jest.fn().mockResolvedValue({}),
      handleResponse: jest.fn().mockResolvedValue({}),
    };
  });

  describe("request", () => {
    it("should apply request middlewares", async () => {
      await httpClient.useMiddleware(mockMiddleware).request(mockRequestConfig);
      expect(mockMiddleware.handleRequest).toHaveBeenCalledWith(mockRequestConfig);
    });

    it("should send request", async () => {
      await httpClient.request(mockRequestConfig);
      expect(mockAdapter.request).toHaveBeenCalledWith(mockRequestConfig);
    });

    it("should apply response middlewares", async () => {
      const response: Partial<HttpResponse> = {};
      mockAdapter.request = jest.fn().mockResolvedValue(response);
      await httpClient.useMiddleware(mockMiddleware).request(mockRequestConfig);
      expect(mockMiddleware.handleResponse).toHaveBeenCalledWith(response);
    });

    it("should return response", async () => {
      const response: Partial<HttpResponse> = {};
      mockAdapter.request = jest.fn().mockResolvedValue(response);
      const result = await httpClient.request(mockRequestConfig);
      expect(result).toBe(response);
    });

    it("should throw network error on request failure", async () => {
      mockAdapter.request = jest.fn().mockRejectedValue({ message: "request failed" });
      try {
        await httpClient.request(mockRequestConfig);
      } catch (error) {
        expect(error).toEqual({
          message: "request failed",
          types: [ErrorType.NetworkError],
        });
      }
    });
  });
});
