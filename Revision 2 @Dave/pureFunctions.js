// Pure functions

// A part of the Functional programming paradigm

/* why write pure function?
 * Clean code
 * Easy to test
 * Easy to debug
 * Decoupled and independent
 * Could be added to your utility functions
 */

/* Rules for pure functions:
 * 1) The same input always gives the same output.
 * 2) No side effects
 */

// Rule no: 1) The same input always gives the same output.
// Example:
const add=(x,y)=>x+y
console.log(add(2,3));

const fullName=(first,last)=>`${first} ${last}`
console.log(fullName("Karkuvel","Pandi"));

// we can replace the function with the output
// This is called "referential transparency"

// A pure function should have at least one parameter
// Otherwise, it is the same as a constant because they can only work with their input.
// XXXExample:
const firstName=()=>"Karkuvel"; //this is same const firstName="karkuvel";


// Rule no: 2) No side effects:

// This also means accessing the scope outside the function makes the function impure.

// we are accessing the global scope here and in a function we can
// access the lexical scope that is outside of the function, But this makes it impure.
const z=5
const sum=(x,y)=>x+y+z;
console.log(sum(1,2));
 
// Pure functions  
// cannot access the database, API, file system, storage, etc,.
// cannot modify the DOM.
// cannot even log to the console.
// Further, no input state can be modified.
// That is, no data should be modified.
// Consider all input data to be immutable.

// That said, clearly "Impure" functions are necessary.
// but they are harder to test and debug.

/************************************************************************ */

// Impure Example 1:
let x=1
const increment=()=>x+=1
console.log(increment());
console.log(x);
// Here we are mutating the existing value by reassigning.

// Impure Example 2:
const myArray=[1,2,3]
const addToArray=(array,data)=>{
  array.push(data)
  return array
}
console.log(addToArray(myArray,4)); //output: [ 1, 2, 3, 4 ]
console.log(myArray);  //output: [ 1, 2, 3, 4 ]
// Here in this example both returned array and myArray are mutated.
