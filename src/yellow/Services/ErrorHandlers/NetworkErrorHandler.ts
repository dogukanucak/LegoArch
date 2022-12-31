import { IErrorHandler } from "@red/Interfaces/IErrorHandler";

export class NetworkErrorHandler implements IErrorHandler {
  private next: IErrorHandler | null = null;

  public handleError(error: Error): void {
    // Handle network errors
    if (error.message === "Network error") {
      console.error(
        "There was a network error. Please check your connection and try again.",
      );
    } else if (this.next) {
      this.next.handleError(error);
    }
  }

  public setNext(handler: IErrorHandler): void {
    this.next = handler;
  }
}
