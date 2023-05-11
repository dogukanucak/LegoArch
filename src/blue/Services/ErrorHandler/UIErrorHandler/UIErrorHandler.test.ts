import { ErrorType, TypedError } from "@yellow/Types/ErrorTypes/error.type";
import { UIErrorHandler } from "./UIErrorHandler";
import { IErrorHandler } from "@red/Contracts/Error/IErrorHandler";

const mockHandleErrorMethod = jest.fn();

// Arrange
const error: TypedError = {
  types: [ErrorType.UIError],
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

describe("UIErrorHandler", () => {
  it("should log error to console", () => {
    const uiErrorHandler = new UIErrorHandler();

    const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {
      return;
    });

    // Act
    uiErrorHandler.handleError(error);

    // Assert
    expect(consoleSpy).toHaveBeenCalledWith(error.message);
  });

  it("should call next handler", () => {
    const uiErrorHandler = new UIErrorHandler();
    uiErrorHandler.setNext(new MockTestErrorHandler());

    // Act
    uiErrorHandler.handleError(error);

    // Assert
    expect(mockHandleErrorMethod).toHaveBeenCalledTimes(1);
  });
});
