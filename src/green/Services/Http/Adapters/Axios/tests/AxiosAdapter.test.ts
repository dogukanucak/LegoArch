import axios from "axios";
import { AxiosAdapter } from "../AxiosAdapter";
import { HttpMethod } from "@yellow/Interfaces/Http/enums/HttpMethod.enum";

describe("AxiosAdapter", () => {
  it("should send a request and return the response", async () => {
    // Mock the axios request function
    const requestSpy = jest.spyOn(axios, "request");
    requestSpy.mockResolvedValue({
      data: "Hello World!",
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    });

    // Create an instance of the AxiosAdapter
    const adapter = new AxiosAdapter();

    // Send a request using the adapter
    const response = await adapter.request({
      method: HttpMethod.GET,
      url: "https://example.com",
    });

    // Ensure the axios request function was called with the correct arguments
    expect(requestSpy).toHaveBeenCalledWith({
      method: HttpMethod.GET,
      url: "https://example.com",
    });

    // Ensure the response data is correct
    expect(response).toEqual({
      data: "Hello World!",
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    });
  });
});
