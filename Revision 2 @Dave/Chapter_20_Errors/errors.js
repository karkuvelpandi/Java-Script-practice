// "use strict";
// Javascript errors

// Javascript is not strictly typed language.
// For example:
variable = "pk";
console.log(variable); //Output : pk
// It will still printing the name without initialize with any variables.

// "use strict" this is an option in javascript. with use strict it will
// throw an error says Uncaught ReferenceError: variable is not defined.

// Type Two
// Object..create()
// SyntaxError: Unexpected token '.'

// Type Three
// const a = 10;
// a = 20;
// TypeError: Assignment to constant variable.

// Creating the custom error

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

const makeError = () => {
  try {
    // throw new customError("This is a custom error...!"); or we can use new Error object.
    throw new Error("This is a common error template...!");
  } catch (err) {
    console.error(err);
  }
};
makeError();
