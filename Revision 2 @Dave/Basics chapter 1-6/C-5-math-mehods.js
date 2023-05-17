// Inbuilt Math method
console.log(Math.PI);  //3.141592653589793

// Math.trunc()-method it return Integer portion of a number

console.log(Math.trunc(Math.PI)); //3

//Math.round() will round the value and give as a number datatype only
console.log( Math.round(3.14)); // number 3
console.log( Math.round("3.14")); // number 3
console.log( Math.round("3.50")); // number 4
console.log( Math.round("pk")); // NaN
console.log( Math.round(undefined)); // NaN
console.log( Math.round(null)); // 0
console.log( Math.round(true)); // 1
console.log( Math.round(false)); // 0

// Math.ceil()-It will give us incremental side round value
console.log( Math.ceil("3.14")); // number 4

// Math.floor()-It will give us decremental side round value
console.log( Math.floor("3.8")); // number 3


// Math.random() - property always return from 0-1
console.log(Math.random());
console.log(Math.random());

// From 1- 10
console.log(Math.floor(Math.random()*10)); // this will give us only 0-9
// Math.ceil() method and Math.random() have a chance of return 0 instead of given range
// so we can use Math.floor() method with 1 added with Math.random() is a full proof for randomizing number between a defined limits
console.log(Math.floor(Math.random()*10)+1);