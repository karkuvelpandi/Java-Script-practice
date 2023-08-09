// Javascript fetch/async-await

//*Fetch api
// * callback, Promises, Thenable, Async/Await

/*Callback
Callbacks are functions that are passed to another function as parameters
So they will call that function after that finishing other stuffs.
*/
// Example:

function demoFunction(callback) {
  //    do stuffs
  callback();
}
function callBackFunc() {
  console.log("Hello from the callback...!");
}
demoFunction(callBackFunc);

// Callback allows us to call a function inside another function.
// Essentially a chain of events.

// Promises are came to get rid of the chaining called as callback hell.

//PROBLEM STATEMENT:  "Callback hell"
let param;
function firstFunction(parameter, callback) {
  // do stuffs
  callback();
}
function secondFunction(parameter, callback) {
  // do stuffs
  callback();
}
function thirdFunction(parameter, callback) {
  // do stuffs
  callback();
}

// calling the functions
firstFunction(param, function () {
  // Do stuffs
  secondFunction(param, function () {
    // Do stuffs
    thirdFunction(param, function () {
      // do stuffs
      console.log("Hello from deep hell....!");
    });
  });
});

/*
In the above example each level you go deeper. After while adding extra functionality lines to the
above function will be hard to follow. consecutive functions has its own callbacks.

To get rid the behavior Promises are introduced.
*/
