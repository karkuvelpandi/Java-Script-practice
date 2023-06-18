// var, let, const

// var- Re-assignable and re-declarable
var x = 1;
var x = 2;
console.log(x); // output 2

// let can be re-declarable but not re-assignable
let y = 3;
// let y=4  if re-assign it will through type error
y = 5;
console.log(y); // output 5

// const cannot be re-declare or re-assignable
const z = 6;
// const z=7   //type error
// z=8         //type error
console.log(z);

// global scope      //simply available to all
var a = 1;
let b = 2;
// const c=3

// local scope
function something() {
  const c = 8;
  console.log(b); //2     // it will look for local then pick from global if its available
  // local scope
  {
    let b = 6;
    console.log(b); //6     //Here b is locally available.
  }

  // Another type of block scope
  //   Examples: for loop , switch statements
  if (true) {
    console.log(c); //8      // c is available inside this function scope
  }
}
something();
// console.log(b); if it not defined in global it will through reference error.
