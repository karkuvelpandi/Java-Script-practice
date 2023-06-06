let playGame = confirm("Can we play...!");

const game = () => {
  let result;
  if (playGame) {
    let playerInput = prompt("Please enter rock/paper/scissor");
    if (playerInput) {
      let randomNum = Math.floor(Math.random() * 3 + 1);
      let computerInput =
        randomNum === 1 ? "rock" : randomNum === 2 ? "paper" : "scissor";
      result =
        playerInput === computerInput
          ? "Tie game...!"
          : playerInput === "scissor" && computerInput === "rock"
          ? `Player choice ${playerInput}\nComputer choice ${computerInput}\nComputer wins...!`
          : playerInput === "paper" && computerInput === "scissor"
          ? `Player choice ${playerInput}\nComputer choice ${computerInput}\nComputer wins...!`
          : playerInput === "rock" && computerInput === "paper"
          ? `Player choice ${playerInput}\nComputer choice ${computerInput}\nComputer wins...!`
          : `Player choice ${playerInput}\nComputer choice ${computerInput}\nPlayer wins...!`;
      alert(result);
      let playAgain = confirm("Play again...!");
      playAgain ? game() : alert("Thanks for playing...!");
    } else {
      alert("Please enter right choice...!");
      game();
    }
  } else {
    alert("Ok may be next time...!");
  }
};
game();
