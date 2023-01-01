import { ErrorType, TypedError } from "@yellow/Types/ErrorTypes/error.type";

/* hasErrorType is a function that takes an error and an error type, and returns
 *  a boolean indicating whether the error has the given error type.
 */
export function hasErrorType(error: TypedError, errorType: ErrorType): boolean {
  return error.types.includes(errorType);
}
