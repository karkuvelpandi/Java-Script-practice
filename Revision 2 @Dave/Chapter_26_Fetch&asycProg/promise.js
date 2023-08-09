// Promises
// 3 states : Pending, Fulfilled, rejected.

// Examples :
const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Resolved...!");
  } else {
    reject("Rejected...!");
  }
});

console.log(myPromise); //Output: Promise { 'Resolved...!' }
// But we are not use like this.

// Nested callbacks are used with thenable.
myPromise
  .then((value) => {
    return value + "extra";
    // Here whatever we are returning from the first thenable will be available
    // to the next then callback as a parameter.
  })
  .then((newValue) => {
    //    do stuffs
    console.log(newValue);
  })
  .catch((error) => {
    console.log(error);
  });
/* If the error is happens anywhere along the way in here including in 
the promise itself.Its goes to the chain at the very End. It just log that error.

So it could skip the rest if the chain actually whenever encounter the first error 
it goes straight to the catch and you got the message or something you have passed
through the reject.

The fetch method does return a promise of its own.

Reasons we have the Promise
Big reason we use the fetch is requesting Data from an other server (or) another side of
the web and what can happen we have to wait with. So we need to tell our code Hey! wait 
for this and do this, after we actually got the data and that make sense when we look
at the chain of thenable.
*/

// Simulation Example for a fetch with timeouts.

const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolve Done");
  }, 3000);
});

// Calling and comparing both promises.
myNextPromise.then((value) => {
  //Promise with 3s time delay calling at first place
  console.log(value);
});
myPromise.then((value) => {
  console.log(value);
});
// Output order :
// 1. myPromise console "Resolved...!extra".
// 2. myNextPromise console "Resolve Done".

/************************************************************************************** */
