//Understanding the HOISTING

/* Hoisting is a JavaScript mechanism where variable and function declarations are moved 
 to the top of their containing scope during the compilation phase, before the code is executed. 
 This means that regardless of where variables and functions are declared in the code, 
they are treated as if they were declared at the top of their respective scopes.*/

// Let's look at some examples to understand hoisting:

// Example 1: Variable Hoisting
console.log(x); // Output: undefined
var x = 10;
console.log(x); // Output: 10

/* In this example, the variable `x` is declared and assigned the value `10` after the first `console.log` statement. 
However, due to hoisting, the variable declaration is moved to the top of the scope, and its initial value is `undefined` 
until the assignment is reached. That's why the first `console.log` statement outputs `undefined`. The second `console.log`
statement outputs `10` after the variable has been assigned.*/

// Example 2: Function Hoisting
sayHello(); // Output: "Hello!"

function sayHello() {
  console.log("Hello!");
}
//EXPLANATION: Unlike variables declared with let or const, which are hoisted but not initialized, function declarations are hoisted and fully initialized.

/* In this example, the function `sayHello` is called before it is actually declared.
 However, due to hoisting, the function declaration is moved to the top of the scope, 
 allowing the function to be called before its declaration. Thus, the output is "Hello!".*/

// Example 3: Hoisting with Variable and Function Declarations
var x = 10;

function foo() {
  console.log(x); // Output: undefined
  var x = 20;
}

foo();
console.log(x); // Output: 10

/* In this example, we have a variable `x` declared outside the function `foo` and 
another variable `x` declared inside `foo`. Inside the function, due to hoisting, 
the local `x` declaration is moved to the top of the function scope, and its initial value is `undefined`. 
Therefore, the first `console.log` statement inside `foo` outputs `undefined`. 
The outer `x` variable retains its value of `10`, and the last `console.log` statement outputs `10`.*/

/* It's important to note that only the declarations are hoisted, not the initializations. 
So, if you try to access a variable before its declaration, it will still result in an error.*/

/* To avoid confusion and potential bugs, it is generally recommended to declare variables at 
the top of their respective scopes and use `let` and `const` instead of `var`, 
as they have block scope and do not exhibit hoisting in the same way as `var`.*/

// ********************************************************************************************************************************************************

// why is the behavior changed for the let and const . is there any particular reason given by the ECMA?

/*The behavior of `let` and `const` variables, where they are hoisted but not initialized, 
was introduced in the ECMAScript 2015 (ES6) specification. This change was made to address 
certain issues and improve the predictability of variable declarations.*/

/*One of the primary motivations behind the introduction of `let` and `const` was to provide block scoping, 
allowing variables to be limited in scope to the block in which they are defined. 
This was in contrast to the function scope provided by `var`. The introduction of block scoping 
also necessitated changes to the hoisting behavior.*/

/*The decision to introduce the temporal dead zone for `let` and `const` variables was to 
catch potential errors at runtime, instead of silently initializing them with `undefined` 
as `var` variables do. By throwing a `ReferenceError` when accessing variables in the temporal dead zone, 
it encourages developers to declare and initialize variables before using them, 
promoting better coding practices and preventing accidental usage of uninitialized variables.*/

/*Additionally, the temporal dead zone behavior provides more consistency and makes the hoisting process easier to understand. 
It aligns with the principle of "let and const variables are not accessible before their declaration and initialization within their block scope."*/

/*By introducing these changes, the ECMAScript specification aimed to improve the overall predictability and reliability of JavaScript code, 
reducing potential bugs and making the language more suitable for large-scale applications.*/

// ********************************************************************************************************************************************************

// what about the function hoisting if it is only hoist the declaration how it is run before its initialization?

/*When it comes to function hoisting, both the declaration and the entire function body are hoisted to the top of their containing scope. 
This means that a function declared using either the function declaration syntax (function functionName() {  function body  }) or 
the function expression syntax (`var functionName = function() {  function body  }) can be invoked before its actual declaration in the code.*/

// Here's an example to illustrate function hoisting:

sayHello(); // Output: "Hello!"

function sayHello() {
  console.log("Hello!");
}

/*In this example, the function `sayHello` is called before its declaration. 
However, due to function hoisting, the function declaration is moved to the 
top of the scope during the compilation phase. As a result, when the code is executed, 
the function is already available in memory, allowing it to be invoked.*/

/*Unlike variables declared with `let` or `const`, which are hoisted but not initialized, 
function declarations are hoisted and fully initialized. This means that the entire function body, 
including its logic and statements, is available for execution. The function can be called 
from any part of the code, including before its actual declaration.*/

/*It's important to note that function hoisting applies only to function declarations and 
function expressions assigned to variables using the `var` keyword. Arrow functions and 
functions assigned using `let` or `const` are not hoisted in the same way and must be defined before they are invoked.*/

/*In summary, function hoisting ensures that the entire function, including its body, 
is available for execution regardless of its position in the code. 
This behavior helps support forward referencing and allows functions to be called before their declarations in the code.*/