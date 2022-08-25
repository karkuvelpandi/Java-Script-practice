
//Over riding

function wish() {
    console.log("Good night");
}
wish();

function wish() {
    console.log("good morning");
}
wish();

//Without over riding Fat-arrow

var wish = () => {
    console.log("gm")
}
wish()
var wish = () => {
    console.log("gn")
}
wish()