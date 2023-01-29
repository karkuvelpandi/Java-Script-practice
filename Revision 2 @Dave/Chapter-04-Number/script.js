const myNumber=45;
const myFloat=45.3;
const myString="55"
console.log(myNumber);
// A number with a decimal point is a float which
// references the "floating point"

console.log(myFloat);

//Number default function
console.log(Number("75"));  //number 75
console.log(Number(""));   //0
console.log(Number("pk"));   //NaN
console.log(Number(undefined));   //NaN
console.log(Number(true));   //1
console.log(Number(false));   //0

//Number Methods 
// .isInteger will check the given number whole number or not
console.log(Number.isInteger(myNumber)); //true 
console.log(Number.isInteger(myFloat)); //false


/* The Number. parseFIoat() method parses an argument and
returns a floating point number. If a number cannot be
parsed from the argument, it returns NaN. */
// parseFloat always give output of number only
console.log(typeof Number.parseFloat(4)); //number 4
console.log(typeof Number.parseFloat("4")); //number 4
console.log(typeof Number.parseFloat("5jk")); //number 5

 /* The toFixed() method formats a number according to how
many decimal points you provide as the parameter. */

console.log( Number.parseFloat(45.2222).toFixed(2)); //number 45.22
console.log(typeof Number.parseFloat(45.2222).toFixed(2)); //number 
//while using toFixed method it always return string as a output

 /* The Number. parselnt() method parses a string argument and
returns an integer */
console.log( Number.parseInt(45.2222)); //number 45
console.log( Number.parseInt("45.2")); //number 45

 /* The tostring() method returns a string representing the
number . */

console.log( myFloat.toString()); //string 45
console.log(typeof myFloat.toString()); //string 

//Chaining = Using several methods chained together

console.log( Number.parseFloat("45.2sdfs").toFixed(1));

/***************************************************/
 
// NaN return
console.log(Number("test"));  //NaN

//isNaN method
/* The Number.isNaN() method determines whether the passed
value is NaN AND its type is Number. */
console.log(Number.isNaN(8)); //false //for every datatype it will returns false only

//we can use global isNaN METHOD to check whether is NaN or not
console.log(isNaN("test"));  //true
console.log(isNaN(0));  //false


