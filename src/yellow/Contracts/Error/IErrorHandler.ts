import { TypedError } from "@yellow/Types/ErrorTypes/error.type";

export interface IErrorHandler {
  handleError(error: TypedError): void;
  setNext(handler: IErrorHandler): void;
}
