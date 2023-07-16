// Object destructuring

// Example

const band = {
  vocals: "Robert",
  guitar: "jimmy",
  bass: "john",
  drums: "johnny",
};

// We are defining variables from our band object

// Way: 1 - Renaming the existing key with variable.
const { guitar: myNewVariable } = band;
// here guitar is available key inside our object which have the value init.
// myNewVariable is what we are assigning while destructuring.
console.log(myNewVariable); //Output : jimmy

// Way: 2 - Using existing key as a variable
const { guitar, bass } = band;
//  here we are not assign any variables
// We are using key as a variable.
console.log(bass); //Output: john

// Way: 3 - setting default variable and using it
const { vocals, drums, owner = "Pandi" } = band;
console.log(vocals); //Output: Robert
console.log(owner); //Output: Pandi (default value since "owner" property is not present)

/* Conclusion: Object destructuring is a feature in JavaScript that allows 
 you to extract properties from an object and assign them to individual variables. 
It provides a concise and convenient way to access and work with object properties, 
making your code cleaner and more readable.*/
