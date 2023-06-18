// Arrays - are data structure in javascript.
const myArray = [];

// Add elements to an array.

myArray[0] = "Karkuvel";
myArray[1] = 101;
myArray[2] = false;

// refer to an array
console.log(myArray);
// length property
console.log(myArray.length);
// last element in an array
console.log(myArray[myArray.length - 1]);

// methods
// push and unshift methods return new length value.
const newLength = myArray.push("test");
const newLength2 = myArray.unshift(88);

console.log(myArray);
console.log(newLength);
console.log(newLength2);
// pop method will return the value of popped item.

let poppedItem = myArray.pop();
let poppedItem2 = myArray.shift();
console.log(myArray);
console.log(poppedItem);
console.log(poppedItem2);

// Deleting an element from the array using "delete" keyword
const array = [1, 2, 3, 4];
// XXX:Problematic
// delete array[2]
// console.log(array);
// console.log(array[2]);  //output undefined
// we will not work with undefined anytime for any logic,so better not use delete with array.
// In replacement to delete we can use other inbuilt methods like splice and others.

// splice
array.splice(1, 1);
console.log(array); //output [ 1, 3, 4 ]
// HACK: splice method also used to replace particular element on the go
//  Splice can delete one or multiple, but can only replace one value replacement of deleted values.
array.splice(1,1,"Replaced value")
console.log(array); // output [ 1, 'Replaced value', 4 ]
// We can insert a value to a particular position without evan deleting it by using below statement.
array.splice(1,0,"Inserted value")
console.log(array);  //[ 1, 'Inserted value', 'Replaced value', 4 ]

