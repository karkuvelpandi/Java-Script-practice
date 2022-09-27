
let calculate=(a,b,operation)=>{
      let result=""
      if(operation=="sum"){
           result=a+b
           
      }
      if(operation=="multi"){
        result=a*b
       
      }
      return result
};
let r1=calculate(100,25,"sum");
console.log(r1);
let r2=calculate(10,25,"multi")
console.log(r2);
