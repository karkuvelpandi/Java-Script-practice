let sum=(a,b)=>{
 return a+b
}
let multi=(a,b)=>{
return a*b
}

let calculate=(a,b,callback)=>{
return callback(a,b)
}

let result=calculate(5,5,sum)
console.log(result);
let result2=calculate(15,5,multi)
console.log(result2);