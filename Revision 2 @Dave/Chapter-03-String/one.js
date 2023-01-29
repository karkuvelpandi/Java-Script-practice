//string
let myVariable="karkuvel pandi"

//length property
console.log(myVariable.length); 
console.log("myVariable".length); 

//method -charAt(0)
console.log(myVariable.charAt(5));   // v
console.log(myVariable.indexOf("vel")); // 5 
// it will give the index of starting letter from front side first matched string
 console.log(myVariable.lastIndexOf("a"));
// it will give the index of starting letter from last side first matched string

console.log(myVariable.slice(5,8)); // vel
console.log(myVariable.slice(5)); // vel pandi  
console.log(myVariable.toUpperCase()); //KARKUVEL PANDI - Don't need a parameter
console.log(myVariable.toLowerCase()) //karkuvel pandi

//method - includes
console.log(myVariable.includes("vel"))//true  -include method return Boolean
console.log(myVariable.includes("den"))//false

//method - split
console.log(myVariable.split("a")) //[ 'k', 'rkuvel p', 'ndi' ]  -It 
console.log(myVariable.split("")) //['k', 'a', 'r', 'k','u', 'v', 'e', 'l',' ','p', 'a', 'n','d', 'i' ]
console. log( "John,Joe,Dave". split(",") ) //[ 'John', 'Joe', 'Dave' ]
// Word spliting
console.log("Every good boy doing fine". split(" "));//[ 'Every', 'good', 'boy', 'doing', 'fine' ]

//map method testcase

let arr=[1,2,"hi",3]


// arr.map((a)=>{
//     console.log(a);
//  }) 

// console.log(arr.map((a)=>{
//     a
//   }));

// console.log(arr.map((a)=>{
//     return a 
//   }));


console.log(
    arr.filter((a)=>{
        return typeof a==="string"
      // if(typeof a==="string"){
  
      //     return console.log(a)
      // }
    }) 
);

arr.map((a)=>{
        // return typeof a==="string"
    if(typeof a==="string"){
          return console.log(a)
      }
    }) 

//arr.every(()=>{})  - Method
// Checking every element inside a array is a similar data type or not strictly.
let arr2=["hi",1]
console.log( arr2.every((a)=>{
    return typeof a==="string"
}));
 