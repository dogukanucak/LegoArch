/* ErrorTypes is an enum containing strings representing different types of errors */
export enum ErrorType {
  UIError = "UI_ERROR",
  NetworkError = "NETWORK_ERROR",
}

/* TypedError is a type that represents an error with a property called "types"
 * which is an array of ErrorTypes. It also includes all the properties of the
 *  built-in Error type, but they are optional (hence the "Partial" type)
 */
export type TypedError = Partial<Error> & {
  types: ErrorType[];
};
