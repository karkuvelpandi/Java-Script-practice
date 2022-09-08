//Normal method to create the new array

let a = [1, 2, 3, 4, "a"];

let b = [];

for (aa of a) {
    b.push(aa);
};
console.log(b);

//uaing spread Operator

let size = [32, 34, 36, 38, 40];

let new_size = [...size]

size[1] = 35;

console.log(size);
console.log(new_size);