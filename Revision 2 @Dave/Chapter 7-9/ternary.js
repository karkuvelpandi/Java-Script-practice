// Conditionals : Ternary Operator
// Syntax
// Conditions ? (executes if condition true) : (executes if condition false)

// Example 1:
let soup;
const isBanned = true;
let response = soup ? "Yes, we have soup" : "Sorry, no soup today";
// console.log(response);

// Example 2:

let secondType = isBanned
  ? "Sorry no soup for you"
  : soup
  ? "Yes, we have soup"
  : "Sorry, no soup today";
// console.log(secondType);

// Example 3: Nested if else
let testScore = 55;
let myGrade =
  testScore > 89
    ? "A"
    : testScore > 79
    ? "B"
    : testScore > 69
    ? "C"
    : "Low grade";

// console.log(myGrade);

// Example 4: Rock paper scissors
// Game condition paper > Rock , scissors > paper , rock > scissors
let player = "rock";
let computer = "rock";

let result =
  player === computer
    ? "tie"
    : player === "rock" && computer === "paper"
    ? "computer wins"
    : player === "paper" && computer === "scissors"
    ? "computer wins"
    : player === "scissors" && computer === "rock"
    ? "computer wins"
    : "player wins";

console.log(result);
