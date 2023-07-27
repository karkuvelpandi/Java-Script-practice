// JSON-Javascript Object notation.

/*
JSON is used to send and receive data.
JSON is a text format that is completely language independent,
meaning JSON is used to send and receive data in many languages...Not just javascript.

We usually sending data between webapp and a server.
*/
//****************************************************************************************** */
// Example: For sending data using JSON text format.

const myObj = {
  name: "Pandi",
  hobbies: ["eat", "code", "sleep"],
  hello: function () {
    console.log("Hello...!");
  },
};

console.log(myObj); //Output the whole javascript object
console.log(myObj.name); //Output Pandi
myObj.hello(); //Output Hello...!

// JSON-method inbuilt in javascript.

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON); // There will be no hello method inside the json.
//Output :{"name":"Pandi","hobbies":["eat","code","sleep"]}
/* JSON doesn't send function.
so once we convert that over it just going to take the key value pairs of the properties and turn those into JSON.
*/

console.log(typeof sendJSON); //output string
console.log(sendJSON.name); //Output undefined It doesn't respond like our object.

//**************************************************************************************************** */

// Example: for Receiving data from database as a JSON format and using that.
// When we receive data from database by using JSON.Parse() method to convert JSON text format to the javascript Object.
// Its another static method which converts JSON string into Object.

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON); //Output : { name: 'Pandi', hobbies: [ 'eat', 'code', 'sleep' ] }
// We don't have any method because we lost it when we convert it into JSON string using JSON.stringify()
console.log(typeof receiveJSON); // Output : Object
