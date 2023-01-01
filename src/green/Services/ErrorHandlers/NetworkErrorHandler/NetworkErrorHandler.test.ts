import { ErrorType, TypedError } from "@yellow/Types/ErrorTypes/error.type";
import { IErrorHandler } from "@yellow/Interfaces/Error/IErrorHandler";
import { NetworkErrorHandler } from "./NetworkErrorHandler";
import { NetworkErrorHandlerConstants } from "./constants";

const mockHandleErrorMethod = jest.fn();

// Arrange
const error: TypedError = {
  types: [ErrorType.NetworkError],
  message: "An error occurred in the user interface",
};

class MockTestErrorHandler implements IErrorHandler {
  handleError(error: TypedError): void {
    mockHandleErrorMethod();
  }
  setNext(handler: IErrorHandler): void {
    throw new Error("Next is not implemented.");
  }
}

describe("NetworkErrorHandler", () => {
  it("should log error to console", () => {
    const networkErrorHandler = new NetworkErrorHandler();

    const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {
      return;
    });

    // Act
    networkErrorHandler.handleError(error);

    // Assert
    expect(consoleSpy).toHaveBeenCalledWith(NetworkErrorHandlerConstants.DefaultErrorMessage);
  });

  it("should call next handler", () => {
    const networkErrorHandler = new NetworkErrorHandler();
    networkErrorHandler.setNext(new MockTestErrorHandler());

    // Act
    networkErrorHandler.handleError(error);

    // Assert
    expect(mockHandleErrorMethod).toHaveBeenCalledTimes(1);
  });
});
