let myNum = 50;
// ***************** while ******************
// while (myNum < 50) {
//     console.log(myNum);
//     myNum+=2
// }
// Don't create endless loop

// ***************** do while ******************

// do {    //Do something first and check for the condition then. this way if the condition not even satisfied one time also this loop run for one time.
//     console.log(myNum);
//     myNum++
// }while(myNum<50);

// ***************** for loop ******************

// for(let i=0;i<10;i++){
//     console.log(i);
// }

// can write like this
// let i=0;
// for(;i<10;){
//     console.log(i);
//     i++
// }

// let name= "Karkuvel Pandi"
// for(let i=0;i<name.length;i++){
//     console.log(name.charAt(i));
// }

// Examples
//  using break keyword and counter
let name = "pandi";
let counter = 0;
let myLetter;
while (counter <= 4) {
  myLetter = name[counter];
  console.log(myLetter);
  if (counter === 2) {
    counter += 2;
    // continue;
  }
  if (myLetter === "d") break;
  counter++;
}
console.log(counter);
