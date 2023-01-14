import { HttpMethod } from "@yellow/Interfaces/Http/enums/HttpMethod.enum";
import { axiosConfigMapper } from "../AxiosMapper";

describe("axiosConfigMapper", () => {
  it("should map an Axios config to an HttpRequestConfig", () => {
    const axiosConfig = {
      method: "POST",
      url: "https://example.com/api",
      data: {
        foo: "bar",
      },
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        baz: "qux",
      },
      withCredentials: true,
    };

    const expectedHttpRequestConfig = {
      method: HttpMethod.POST,
      url: "https://example.com/api",
      data: {
        foo: "bar",
      },
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        baz: "qux",
      },
      withCredentials: true,
    };

    expect(axiosConfigMapper(axiosConfig)).toEqual(expectedHttpRequestConfig);
  });
});
