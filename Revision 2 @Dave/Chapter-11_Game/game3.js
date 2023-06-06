// switch case
let player = "scissor";
let computer = "rock";

switch (player) {
  case computer:
    console.log("Match tie...");
    break;

  case "rock":
    if (computer === "paper") {
      console.log("Computer wins...");
    } else {
      console.log("Player wins...");
    }
    break;
  case "paper":
    if (computer === "scissor") {
      console.log("Computer wins...");
    } else {
      console.log("Player wins...");
    }
    break;
  default:
    if (computer === "rock") {
      console.log("Computer wins...");
    } else {
      console.log("Player wins...");
    }
}
