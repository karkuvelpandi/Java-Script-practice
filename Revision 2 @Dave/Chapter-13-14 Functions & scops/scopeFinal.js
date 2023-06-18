// let
let a = 1;
let b = 2;
console.log(`Global first ${a}`);
console.log(`Global first ${b}`);
{
  let a = 10;
  b = 20;
  console.log(`block ${a}`);
  console.log(`block ${b}`);
}
function test() {
  let a = 100;
  b = 200;
  {
    b = 300;
  }
  console.log(`function ${a}`);
  console.log(`function ${b}`);
}
test();

console.log(`Global last ${a}`);
console.log(`Global last ${b}`);
console.log("***************************************************************");

// conclusion for let
// let is a block scope. If we redeclare in other scope it will not affect the outside function or block scope.
// But we can reassign the global from inside block or function scope anywhere.
// *******************************************************************************

// const
const p = 11;
console.log(`Global first ${p}`);
{
  const p = 110;
  console.log(`block ${p}`);
}
function test2() {
  const p = 210;
  console.log(`function ${p}`);
}
test2();
console.log(`Global last ${p}`);
console.log("***************************************************************");
// conclusion for const
// const also a block scope. If we redeclare in other scope it will not affect the outside function or block scope.
// Here we cannot redeclare in same scope and cannot be reassign from anywhere from inside function or block scope.
// *******************************************************************************

// var
// Example separately for Re-declare
var x = "Pandi";
console.log(`Global first ${x}`);
{
  var x = "mani";
  console.log(`block ${x}`);
}
function test3() {
  var x = "kishore";
  console.log(`function first ${x}`);
  {
    var x = "Imad";
    console.log(`function block ${x}`);
  }
  console.log(`function last ${x}`);
}
test3();
console.log(`Global last ${x}`);
// conclusion for redeclare 
// * we can redeclare var variable from block scope to the parent scope only. 
// if the parent is global we can redeclare global var.if parent is function scope we can redeclare the function scope var variable.
// * we cannot redeclare var global variable from inside the function. Meaning var is function scoped.
// * If a variable is declared within a function using var, it is function-scoped. This means that the variable is accessible within the function in which it is defined, as well as any nested functions within that function. However, it is not accessible outside of that function.
// * On the other hand, if a variable is declared outside of any function using var, it is considered to have global scope. This means that the variable is accessible throughout the entire program, including all functions and code blocks.

// Example separately for Re-assign
var y = "lion";
console.log(`Global first ${y}`);
{
  y = "Tiger";
  console.log(`block ${y}`);
}
function test4() {
  y = "cheeta";
  console.log(`function first ${y}`);
  {
    y = "cat";
    console.log(`function block ${y}`);
  }
  console.log(`function last ${y}`);
}
test4();
console.log(`Global last ${y}`);

// conclusion for reassign.
// * As similar like let keyword we can reassign our variable from anywhere within function or block inside the global scope.