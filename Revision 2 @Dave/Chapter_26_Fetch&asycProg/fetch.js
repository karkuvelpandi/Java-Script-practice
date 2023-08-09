// Javascript fetch

import fetch from "node-fetch";

// Pending state in a Promise.
const users = fetch("https://jsonplaceholder.typicode.com/users");
// pending
console.log(users); //output : Promise { <pending> }

// how to use fetch method
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((newResponse) => {
    // console.log(newResponse);
  });
/*
Here in the above code json() also a promise which is used to convert fetch response 
Readable stream to json format.
*/

// *************************************************************************************
// Example for default execution behavior of Javascript:
/*We need to remember that its within this block of thenable of the fetch method we 
  can't suddenly  take the data out into the global area because that s not executing the
  code in the same order. Outside of the fetch in the global space it will go ahead and execute
  code below the fetch in our file before its complete.
  */

// PROBLEM: Simulation example for code execution

const users1 = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    //This one log after the global execution after getting the response from the api
    // console.log(response, "out");
  });
console.log(users1, "global execution"); //Here this one logged first

// Output order
// 1. Promise { <pending> } global execution
// 2. [...data{}]

/* This is happening because this fetch has to actually go get the data and 
comeback so it waits. But its a promise it says Hey! javascript go ahead and
execute the rest of the code while im fetching the data.
 */

// To solve the above problem javascript introduced the async/await

// Async/Await

// Example

const myUser = {
  userList: [],
};

async function myFunction() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //   Here this await telling my code to wait until get the results from the fetch.

  const jsonUserData = await response.json();
  //  In here json() also a promise to convert the data in to json so here is also we are waiting
  // for the response from the json() promise
  //   console.log(jsonUserData);
  return jsonUserData;
}
// myFunction();

const anotherMyFunc = async () => {
  const data = await myFunction();
  //   console.log(data); //Data is properly coming and console upto here.
  myUser.userList = data; //Here we are try to update a object with our data
};
anotherMyFunc();
console.log(myUser.userList); //Try to access the updated data but getting [] empty array.Actual data is missing.

/*Here is the problem we need to remember these promises are like , Hey! im going to do my work
so go ahead and execute the rest of the code. There is nothing about the console log statement, or
nothing says the above console log statement to wait for anything else. (Here the function inside we 
have the waiting mechanism but we don't have any control over the calling the function and calling the 
console in global scope)
 */

//If we want to work with the data getting from an async function we need to have our expectation.

// Solution for the above example problem to have the workflow in mind

// Workflow function example

const getAllUserEmail = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonData = await response.json();

  const userEmailArray = jsonData.map((user) => {
    return user.email;
  });
  //   console.log(userEmailArray);
  return userEmailArray;
};

getAllUserEmail(); //Output if console:[...emails]

// if we return the response and console that outside the function
console.log(getAllUserEmail()); //Output: Promise { <pending> }

/*We cannot take out the data using return and use it in global
Instead we can pass the data to another function to work with the data.
*/

// Example
const getUserEmail = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonData = await response.json();

  const userEmailArray = jsonData.map((user) => {
    return user.email;
  });

  // return userEmailArray  (Instead of returning the data we need to pass it in a function as a argument)
  postToPage(userEmailArray);
};

const postToPage = (data) => {
  console.log(data);
};

getUserEmail();
//******************************************************************** */
// Second parameter of fetch is a object
const getJoke = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const jokeJson = await response.json(); //Use json() promise and content type "application/json" when we need a json
  // const jokeText = await response.text(); //Use text() promise and content type "text/plain" when we need a text
  // But check the api docs whether response is text or json or both.
  console.log(jokeJson);
};
getJoke();

/********************************************************************** */
// Example for POST data
const dataObj = {
  title: "foo",
  body: "bar",
  userId: 1,
};
const postData = async (dataObj) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataObj),
  });
  const responseJson = await response.json();
  console.log(responseJson);
};
postData(dataObj);

// ********************************************************************
/*  Query string
 1.  & symbol chains the url parameters.
 2.  ? question mark identify where the first parameter in the url start.
 */
const firstName = "John";
const lastName = "cena";
const url = `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`;

const requestJoke = async () => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  console.log(jsonResponse);
};
// requestJoke(); this example is only syntax example not real api.
