// slice
// syntax  array.slice(starting position, ending position)
// For ending position it will not include the mentioned position value.
// @return new array with sliced values.

let array = ["A", "B", "C", "D", "E", "F"];
let arr = array.slice(2, 5);
console.log(arr);

// Reverse method
// Its a method to reverse the overall array
let ex = array;
ex.reverse();
console.log(ex);
console.log(array);

// Join & split method
let a = ["k", "a", "r", "k", "u", "v", "e", "l"];
const newStr = a.join(); // If we don't use string inside join("") // output comes with coma "k,a,r,k,u,v,e,l"
const newStr1 = a.join(""); //If we use string inside then output // "karkuvel"
console.log(newStr1);
const newArray = newStr.split(","); //In newStr we already have string with coma ",".
console.log(newArray);

// Concat method
// It is a method to combine 2 arrays and create new single array.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

let fullArray = array1.concat(array2);
console.log(fullArray); 
// Instead if using the concat method we can also use the spread operator.
let spreadArray=[...array1,...array2] // spread out the array element into the single array.
console.log(spreadArray);



