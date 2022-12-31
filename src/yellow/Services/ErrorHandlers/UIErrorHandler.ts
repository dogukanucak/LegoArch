import { IErrorHandler } from "@red/Interfaces/IErrorHandler";

export class UIErrorHandler implements IErrorHandler {
  private next: IErrorHandler | null = null;

  public handleError(error: Error): void {
    // Show the error to the user
    console.error("From UI Error Handler: ", error.message);

    if (this.next) {
      this.next.handleError(error);
    }
  }

  public setNext(handler: IErrorHandler): void {
    this.next = handler;
  }
}
