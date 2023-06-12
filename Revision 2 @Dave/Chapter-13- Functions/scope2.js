// var,let,const

// global scope
var x = 2;
let y = 3;
const z = 4;

console.log(`global:${x}`);
console.log(`global:${y}`);
console.log(`global:${z}`);

function myFunc() {
  console.log(`function:${x}`);
  console.log(`function:${y}`);
  console.log(`function:${z}`);

  {
    console.log(`block:${x}`);
    console.log(`block:${y}`);
    console.log(`block:${z}`);
  }
}

myFunc();
