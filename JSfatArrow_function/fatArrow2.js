
function add(a, b) {
    console.log(a + b)
}
add(1, 2);            //ouput 3

function add1(c, d) {
    return (c + d)
}
let result = add1(10, 20);
console.log(result);   //output 30

function add2(x, y) {
    return (x + y)
}
console.log(add2(2, 5));  //output 7

let add3 = (g, h) => {
    console.log(g + h);
}
add3(4, 6);      //10

let add4 = (i, j) => {
    return (i + j);
}
let result1 = add4(22, 28)
console.log(result1);   //50

let add5 = (k, l) => {
    return (k + l)
}
console.log(add5(2, 6));  //8

//Implicit code

let add6 = (m, n) => (m + n)
console.log(add6(4, 4)); 