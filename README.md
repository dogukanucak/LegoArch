# Lego and Color Architecture

The Lego and color architecture is a front-end architecture that is designed to be simple, easy to read, easy to write, easy to test, easy to extend, and independent of any particular framework.

## Principles

The Lego and color architecture is based on the following principles:

- **Be Simple**: The architecture should be as simple as possible, without unnecessary complexity.
- **Easy to Read**: The architecture should be easy to read and understand, even for developers who are new to the project.
- **Easy to Write**: The architecture should be easy to write, with clear and concise code.
- **Easy to Test**: The architecture should be easy to test, with a focus on unit testing and automated testing.
- **Easy to Extend**: The architecture should be easy to extend and modify, with a modular design that allows new features to be added without disrupting the existing codebase.
- **No Convention**: The architecture should not be tied to any particular convention or framework, allowing developers to choose the best tools and approaches for the task at hand.
- **SOLID**: The architecture should follow the SOLID principles of object-oriented design, including the Single Responsibility Principle, the Open-Closed Principle, the Liskov Substitution Principle, the Interface Segregation Principle, and the Dependency Inversion Principle.

## Folder Structure

The Lego and color architecture uses a folder structure that is based on colors, with the following conventions:

- **Red**: Dependency container && Business (cannot be changed)
- **Yellow**: Contacts (hardly changed - contains how application consume services)
- **Green**: Base Services (can be changed, but will affect the whole app)
- **Blue**: Concrete Implementations (can be easily replaced or modified)

Each color corresponds to a specific level of abstraction, with red representing the core dependencies of the application, yellow representing the interfaces that define the contracts between different parts of the application, green representing the services that implement the core business logic of the application, and blue representing the modules that consume these services and provide the user-facing functionality of the application.

## Project Components

### Error Handler

The goal of this error handling architecture is to provide a unified way to handle and log errors in an application. It consists of the following main components:

`ErrorHandler`: This is an abstract class that defines the interface for handling errors. It has a single method handle that takes an error as input and returns a boolean indicating whether the error has been handled or not.

`TypedError`: This is a type that extends the Error interface and adds a property types which is an array of ErrorTypes. It allows the error to be associated with one or more error types.

`ErrorTypes`: This is an enumeration that defines the available error types.

`UIErrorHandler`: This is a concrete implementation of ErrorHandler that handles errors of type ErrorTypes.UIError. It is responsible for displaying the error to the user.

`NetworkErrorHandler`: This is a concrete implementation of ErrorHandler that handles errors of type ErrorTypes.NetworkError. It is responsible for logging the error and possibly retrying the failed network request.

`hasErrorType`: This function is a utility function that takes an error object and an ErrorType and returns a boolean indicating whether the error object has the specified error type. It can be used to determine the type of an error object and handle it accordingly.

#### Usage

To use the error handling architecture, you need to do the following:

1. Create an instance of `ErrorHandler` for each error type you want to handle. For example, to handle UI errors and network errors, you would create an instance of `UIErrorHandler` and an instance of `NetworkErrorHandler`.

2. Create a chain of error handlers by calling the `setNext` method on each error handler, passing the next error handler in the chain as an argument.

   For example:

   ```typescript
   const uiErrorHandler = new UIErrorHandler();
   const networkErrorHandler = new NetworkErrorHandler();

   uiErrorHandler.setNext(networkErrorHandler);
   ```

3. When an error occurs, pass it to the first error handler in the chain by calling its handle method. If the error is not handled by the first error handler, it will be passed to the next error handler in the chain, and so on, until it is either handled or reaches the end of the chain.
   Here is an example of how to use the error handling architecture in an application:

   ```typescript
   import { ErrorHandler, TypedError, ErrorTypes, UIErrorHandler, NetworkErrorHandler } from "./error-handling";

   const uiErrorHandler = new UIErrorHandler();
   const networkErrorHandler = new NetworkErrorHandler();

   uiErrorHandler.setNext(networkErrorHandler);

   function handleError(error: TypedError) {
     uiErrorHandler.handle(error);
   }

   try {
     // some code that might throw an error
   } catch (error) {
     handleError(error);
   }
   ```

## Conclusion

The Lego and color architecture is a simple, easy-to-use front-end architecture that is designed to be independent of any particular framework and to follow the SOLID principles of object-oriented design. Its modular design and color-coded folder structure make it easy to read, write, test, and extend, making it a powerful tool for building scalable and maintainable front
