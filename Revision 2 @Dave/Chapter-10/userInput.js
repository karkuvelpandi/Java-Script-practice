// user input methods

// alert("Hello everyone");

let myBoolean = confirm("ok===true\n cancel===false");
// console.log(myBoolean);

let name = prompt("Please enter ur name");

// ?? "nullish coalescing operator" if name has no value it will return optional value that we provide
// It will inly checks for "null or undefined"
// The operator works by returning the value on the left-hand side of the operator if it is not null or undefined, otherwise, it returns the value on the right-hand side of the operator.
// if we click cancel it will return null as a value
console.log(name ?? "no data received");
// if we click ok without enter anything it will return empty string
// for that we can write condition
console.log(typeof name); // its a string so we can write condition based on this string without using nullish coalescing operator...!

if (name) {
  console.log(name.length);
  console.log(name.trim().length);
  console.log(name.trim());
} else console.log("No data received");

// String method trim()
// this method is used for removing the white space only from start and end of a string not the whitespace which is between the string.
