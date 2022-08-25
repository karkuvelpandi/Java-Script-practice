
//Normal vs Fat arrow functions

function greet() {
    console.log("good morning");
}

greet();

let greet1 = () => {
    console.log("Good evening");
}
greet1();


let greet2=()=>{
    return "Hi man"
}
let result=greet2();
console.log(result);

let greet3=()=>{
    return "Hi buddy"
}
console.log(greet3);

//implicit code

let greet4=()=>"Good nisght"