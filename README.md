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

- **Red**: Dependency container (cannot be changed)
- **Yellow**: Interfaces (hardly changed)
- **Green**: Services (can be changed, but will affect the whole app)
- **Blue**: Modules (can be easily replaced or modified)

Each color corresponds to a specific level of abstraction, with red representing the core dependencies of the application, yellow representing the interfaces that define the contracts between different parts of the application, green representing the services that implement the core business logic of the application, and blue representing the modules that consume these services and provide the user-facing functionality of the application.

## Conclusion

The Lego and color architecture is a simple, easy-to-use front-end architecture that is designed to be independent of any particular framework and to follow the SOLID principles of object-oriented design. Its modular design and color-coded folder structure make it easy to read, write, test, and extend, making it a powerful tool for building scalable and maintainable front

