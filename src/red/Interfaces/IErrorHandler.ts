export interface IErrorHandler {
  handleError(error: Error): void;
  setNext(handler: IErrorHandler): void;
}
