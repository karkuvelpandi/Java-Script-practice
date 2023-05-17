// example

let soup = "chicken noodles";

let reply;
if (soup) {
  reply = `Here is your ${soup}`;
} else {
  reply = `sorry we are out of ${soup}`;
}
// console.log(reply);

// Example-2

let collegeStudent = false;
let score = 50;

if (score >= 90) {
  console.log("Grade-A");
} else if (score >= 80) {
  console.log("Grade-B");
} else if (score >= 70) {
  console.log("Grade-C");
} else if (score >= 60) {
  console.log("Grade-D");
} else {
  if (collegeStudent) {
    console.log("Grade U");
  } else {
    console.log("No grade");
  }
}

// Example-3 Rock,Paper,Scissor
const game = () => {
  // To change button label
  document.getElementById("btn").innerText = "Play again...!";
  let playerOne = document.getElementById("playerInput").value;
  let arr = ["rock", "paper", "scissors"];
  let computer = arr[Math.floor(Math.random() * arr.length)];
  console.log(playerOne);
  console.log(computer);
  //   result statement
  let result;

  if (playerOne === computer) {
    // tie game
    result = "Tie game";
  } else if (playerOne === "rock") {
    if (computer === "paper") {
      // computer wins
      result = "computer wins";
    } else {
      // player one wins
      result = "player one wins";
    }
  } else if (playerOne === "paper") {
    if (computer === "scissors") {
      // computer wins
      result = "computer wins";
    } else {
      // player one wins
      result = "player one wins";
    }
  } else {
    if (computer === "rock") {
      // computer wins
      result = "computer wins";
    } else {
      // player one wins
      result = "player one wins";
    }
  }
  document.getElementById("result").innerHTML = result;
};
