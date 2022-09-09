
//Normal  function

let cal = (a, b, op) => {
    if (op == "su") {
        return a + b
    }
    if (op == "mult") {
        return a * b
    }
}
let re1 = cal(10, 20, "su")
console.log(re1);
let re2 = cal(12, 20, "mult")
console.log(re2);

//Functions with Callback
let calc=(a,b,callback)=>{
return callback(a,b)
}
let sum=(a,b)=>{
return a+b
}
let multi=(a,b)=>{
return a*b
}

let result1=calc(10,20,sum)
console.log(result1);
let result2=calc(10,30,multi)
console.log(result2);