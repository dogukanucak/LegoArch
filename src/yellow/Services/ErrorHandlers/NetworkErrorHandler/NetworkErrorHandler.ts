import { IErrorHandler } from "@red/Interfaces/IErrorHandler";
import { ErrorType, TypedError } from "@red/Types/ErrorTypes/error.type";
import { NetworkErrorHandlerConstants } from "./constants";
import { hasErrorType } from "@red/Utility/error.utility";

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
