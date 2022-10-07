//for each print
let size = [34, 36, 38, 40, 42]


size.forEach((si) => {
    console.log(si);
})
console.log(size);

//for each return

// Map returning the values to the back end. If don't need a requirment of returning the value to the back end  go for FOREACH



size.forEach(() => {
    console.log("good morning");
})

let new_size = size.forEach((s) => {
    return s
})
console.log(new_size);                           //output Undefined