// Conditionals : Switch Statements
// Syntax

// switch ("expression or value") {
//   case choice1:
//     // run this code
//     break;
//   case choice2:
//     // run this code
//     break;

//   // add as many cases as needed

//   default:
//   //   run this code if no case matches
//   //   no need of break here
// }

// random value for 1 to 3
Math.floor(Math.random() * 4 + 1);

switch (Math.floor(Math.random() * 3 + 1)) {
  case 1:
    console.log("Given value is 1");
    break;
  case 2:
    console.log("Given value is 2");
    break;
  case 3:
    console.log("Given value is 3");
    break;
  default:
    console.log("No value match");
}

// Example 2

let player = "paper";
let computer = "rock";
// simply compare the switch value and case value then execute the code block
switch (player) {
  case computer:
    console.log("Tie");
    break;
  case "rock":
    if (computer === "paper") console.log("Computer wins ...!");
    else console.log("Player wins");
    break;
  case "paper":
    if (computer === "scissors") console.log("Computer wins ...!");
    else console.log("Player wins");
    break;
  default:
    if (computer === "rock") console.log("Computer wins...!");
    else console.log("Player wins");
}
