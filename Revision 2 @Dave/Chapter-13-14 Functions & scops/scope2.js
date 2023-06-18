// var,let,const

// global scope
var x = 2;
let y = 3;
const z = 4;

console.log(`global:${x}`);
console.log(`global:${y}`);
console.log(`global:${z}`);
{
  var x = 33;
}
function myFunc() {
  var x = 10;
  // y = 33;
  const z = 5;
  {
    var x = 11; //var is function scope so it will over ride the var x=10 into x=11.
    const z = 6; // const is block scope it will not available outside the block.
    console.log(`block:${x}`);
    console.log(`block:${y}`);
    console.log(`block:${z}`);
  }
  console.log(`function:${x}`);
  console.log(`function:${y}`);
  console.log(`function:${z}`);
}
myFunc();
console.log(`Outside:${x}`);

// Understanding SCOPE
// Global = Not in a function or block. Not desirable.
// Local = In a function or block. Not global.
// var instantiates function() scoped variables.
// let and const instantiate {block} scoped variables.

// Helpful Tips!
// Avoid using var. Stick with const and let.
// Use const unless you need to reassign value.
// Use let if you know you will reassign value.
