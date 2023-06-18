// syntax
function identifier(parameter) {
  //logic
  return; // values return from logic
}
identifier("argument");

// Example

function sum(num1, num2) {
  if (!num2) {
    return num1 + num1;
  }
  return num1 + num2;
}
console.log(sum(3));

// console.log(1+undefined); // NaN
// console.log("1"+undefined);  // "1undefined"
// console.log(2*undefined);  //NaN
// console.log(undefined*undefined);  //NaN
// console.log(undefined+undefined);  //NaN
// console.log(1+NaN);  //NaN
// console.log("1"+NaN);  //"1NaN"
// console.log(1*NaN);  //NaN

function getUserNameFromEmail(email) {
  console.log(email.slice(0, email.indexOf("@")));
  return email.slice(0, email.indexOf("@"));
}
getUserNameFromEmail("karkuvelpandi007@gmail.com");

// Anonymous function
// const getUserNameFromEmail=function(email){
//     // logic
// }
// getUserNameFromEmail("")

// This will give us the same result of previous normal function.

// Arrow
const greet = () => {
  // logic
};
greet();

// example

const toProperCase = (name) => {
  //    return name.charAt(0).toUpperCase()+name.slice(1,name.length)
  return name.charAt(0).toUpperCase() + name.slice(1);   // we can use slice like this just give starting position. 
//   if we are not giving end value it will take all rest of the elements and pick a end point automatically.
};
console.log(toProperCase("karkuvel"));
