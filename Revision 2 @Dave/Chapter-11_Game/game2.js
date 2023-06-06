const playerOne = confirm("Can we play...!");
const game = () => {
  let result;
  if (playerOne) {
    let playerOneInput = prompt();
    const inputs = ["rock", "paper", "scissor"];
    if (inputs.includes(playerOneInput)) {
      let computerInput = inputs[Math.floor(Math.random() * inputs.length)];
      console.log(computerInput);
      if (playerOneInput === computerInput) {
        result = "Tie...!";
      }
      if (playerOneInput === "rock") {
        result =
          computerInput === "scissor" ? "You wins...!" : "Computer wins...!";
      } else if (playerOneInput === "paper") {
        result =
          computerInput === "scissor" ? "Computer wins...!" : "You wins...!";
      } else if (playerOneInput === "scissor") {
        result =
          computerInput === "rock" ? "Computer wins...!" : "You wins...!";
      }
      alert(
        `Computer selection : ${computerInput}\nPlayer selection : ${playerOneInput}\nGame result : ${result}`
      );
      let playAgain = confirm("Play again...!");
      playAgain ? game() : alert("Thanks for play...!");
    } else {
      alert("Please enter valid input...!");
      game();
    }
  } else {
    alert("Ok may be next time...!");
  }
};
game();
