import { IErrorHandler } from "@red/Contracts//Error/IErrorHandler";
import { ErrorType, TypedError } from "@yellow/Types/ErrorTypes/error.type";
import { hasErrorType } from "@yellow/Utility/ErrorUtilities/error.utility";
import { NetworkErrorHandlerConstants } from "./constants";

export class NetworkErrorHandler implements IErrorHandler {
  private next: IErrorHandler | null = null;

  public handleError(error: TypedError): void {
    // Handle network errors
    if (hasErrorType(error, ErrorType.NetworkError)) {
      console.error(NetworkErrorHandlerConstants.DefaultErrorMessage);
    }

    if (this.next) {
      this.next.handleError(error);
    }
  }

  public setNext(handler: IErrorHandler): void {
    this.next = handler;
  }
}
