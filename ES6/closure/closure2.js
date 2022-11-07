function outerFuncation(outerVariable){
    const outer='Hai'
    return function innerFuncation(innerVariable){
        console.log(outerVariable);
        console.log(innerVariable);
        console.log(outer);

    }
}
let newFunction=outerFuncation("outer")
         newFunction("inner")