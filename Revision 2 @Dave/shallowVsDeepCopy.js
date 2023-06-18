// Foundational Knowledge for Writing Pure Functions
// javascript Data types
// Primitive vs Structural

/* Primitive:
    1.undefined
    2.Boolean
    3.Number
    4.String
    5.Biglnt
    6.Symbol
*/
/* Structural:
    1. Object: (new) Object, Array, Map, Set, WeakMap Date
    2. Function
*/

// Value vs Reference

// Primitives pass values.
let x = 2;
let y = x;
y += 5;
console.log(y);
console.log(x);
// Structural types use Reference.
// Array uses references in memory.
let xArray = [1, 2, 3];
let yArray = xArray;
yArray.push(4);
console.log(yArray);
console.log(xArray);

// Conclusion:
// Primitive datatypes pass values while
// structural datatypes pass references to a spot in memory.
/*************************************************************** */

// Mutable vs Immutable.

// Primitives are Immutable
let myName = "Karkuvel";
myName[0] = "J"; // nope!
console.log(myName);

// Reassignment is not the same as mutable
myName = "pandi";
console.log(myName); //It will work //output: "pandi"
// XXX: Do not confuse reassignment with mutable or immutable.

// Structures contain mutable data.
yArray[0] = 9;
console.log(yArray); //output: [ 9, 2, 3, 4 ]
console.log(xArray); //output: [ 9, 2, 3, 4 ] this means the array still share the reference.

/*************************************************************** */

// Pure Functions require you to avoid mutating the data.

// Impure function that mutates the data.
// Example for impure function
const addToScoreHistory = (array, score) => {
  array.push(score);
  return array;
};
const scoreArray = [50, 66, 78];
console.log(addToScoreHistory(scoreArray, 100));
console.log(scoreArray);
//It is also mutating the original array.
// This consider to be a side effect.

// Notice: "const" does not make the array immutable.
// "const" is not mean we can't change anything.
// "const" only we can't reassign or redeclare.
// for structural data type it can sill mutable.

// We need to modify our function so it doesn't mutate the original data that we pass.

/*************************************************************** */

// Shallow copy Vs. Deep copy (clones)

// Shallow copy
// With the spread operator
const zArray = [...yArray, 10];
console.log(zArray);
console.log(yArray);

console.log(xArray === yArray); //true
console.log(yArray === zArray); // false
// Here by using the shallow copy with spread operator, we are not sharing the reference.

// With Object.assign()
const tArray = Object.assign([], zArray);
console.log(tArray);
console.log(tArray === zArray); //false
// Even though the array values are same.We made the reference are different.
// By shallow copy we actually make the different reference.
// test case
tArray.push(1000);
console.log(zArray); //output: [ 9, 2, 3, 4, 10 ]
//1000 will not be available inside because the reference is different.
console.log(tArray); //output: [ 9, 2, 3, 4, 10, 1000 ]

/*************************************************************************** */
// But if there are nested arrays or objects....
yArray.push([8, 9, 10]);
const vArray = [...yArray];
console.log(vArray);
vArray[4].push(5);
console.log(vArray); //output : [ 9, 2, 3, 4, [ 8, 9, 10, 5 ] ]
console.log(yArray); //output : [ 9, 2, 3, 4, [ 8, 9, 10, 5 ] ]
// nested structural data types still share a reference.
/* Whether we use Object.assign() or use a spread operator to make a new array 
or even a new object they don't share the reference until original has a nested
structural data types*/

/* XXX: we have the same problem shallow copy does not go level deep when comes to
structural data types, so any nested data structural data types still share a reference.
Although the types are not nested they do not share. so that its called as shallow.
 */
// Note: Array.from() and slice() creates shallow copies, too.

/************************************************************************************** */
// When it comes to objects, what about using... Object.freeze()?
// objects also have freeze possibilities.

// we can freeze that preventing from mutating.
// XXX BUT this will only work for normal object and array not for the nested array or objects.
const test = {
  first: 44,
  second: 12,
};
Object.freeze(test);
test.first = 100;
console.log(test);
//
const scoreObj = {
  first: 44,
  second: 12,
  third: { a: 1, b: 2 },
};
console.log(scoreObj);
Object.freeze(scoreObj);
scoreObj.third.a = 8;
console.log(scoreObj); //output : { first: 44, second: 12, third: { a: 8, b: 2 } }
// Even though we freeze the object we still able to mutate the value.
//XXX So still Object.freeze() also shallow freeze.so that is also a problem.

//TODO So How do we avoid these mutations?
// Instead of shallow copy, Deep copy is needed to avoid this with structural data types...!

// Several libraries like lodash,Ramda, and others do have this feature built in.

// Here is a one line Vanilla JS solution,
/*but it does not work with Dates, functions, undefined, infinity, RegExps,
Maps, Sets, Blobs, FileLists, ImageDatas, and other complex datatypes.
*/
const newScoreObj = JSON.parse(JSON.stringify(scoreObj));
/*Here we essentially turn it into a json string and parsing it back into an object.
But JSON.stringify() method looses the data types that we list above.
XXX This needs to be keep it in mind.
This may be a quick solution if we are not dealing with the complex data types.
 */
console.log(newScoreObj);
console.log(newScoreObj === scoreObj);

/***************************************************************************** */
// Instead of using a library, here is a Vanilla JS function for deepClone

const deepClone = (obj) => {
  if (typeof obj !== "object" || obj === null) return obj;

  // Create an array or object to hold the values
  const newObject = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    const value = obj[key];
    // recursive call for nested objects and array.
    newObject[key] = deepClone(value);
  }
  return newObject;
};

const newScoreArray = deepClone(scoreArray);
console.log(newScoreArray);
console.log(newScoreArray === scoreArray);

const myScoreObj = deepClone(scoreObj);
console.log(myScoreObj);
console.log(myScoreObj === scoreObj);
/***************************************************************************** */
// Now we can make a pure function

const pureAddToScoreHistory = (array, score, cloneFunc) => {
  const newArray = cloneFunc(array);
  newArray.push(score);
  return newArray;
};

const pureScoreHistory = pureAddToScoreHistory(scoreArray, 18, deepClone);
console.log(pureScoreHistory);
console.log(scoreArray);

/***************************************************************************** */
// Review
/*
* Primitive vs structural Datatypes.
* Primitive data types pass values.
* Structural data types pass references.

* Primitive data types are immutable.
* Reassignment is not the same as mutable.
* Structural data types contain mutable data.

* Shallow copy vs. Deep copy (clones of data structure).

* Shallow copies still share references of nested structure
* Which allows for mutation of the original data.

* Object.freeze() create a shallow freeze.
// we can freeze that preventing from mutating.
// XXX BUT this will only work for normal object and array not for the nested array or objects.
// XXX this will still share the reference for the nested or complex structures.

* All of this important to know when constructing the pure functions.
* Because they require you to avoid mutating the original data.
*/
