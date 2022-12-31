import { IErrorHandler } from "@red/Interfaces/IErrorHandler";
import { ErrorType, TypedError } from "@red/Types/ErrorTypes/error.type";
import { hasErrorType } from "@red/Utility/error.utility";

export class UIErrorHandler implements IErrorHandler {
  private next: IErrorHandler | null = null;

  public handleError(error: TypedError): void {
    if (hasErrorType(error, ErrorType.UIError)) {
      // Show the error to the user
      console.error(error.message);
    }

    if (this.next) {
      this.next.handleError(error);
    }
  }

  public setNext(handler: IErrorHandler): void {
    this.next = handler;
  }
}
