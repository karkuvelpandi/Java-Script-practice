// Interactive game

let playGame = confirm("Shall we play rock, paper, or scissors");

function game() {
  if (playGame) {
    // play
    let playerChoice = prompt("Please enter rock, paper, or scissors.");
    if (playerChoice) {
      let playerOne = playerChoice.trim().toLowerCase();
      if (
        playerOne === "rock" ||
        playerOne === "paper" ||
        playerOne === "scissors"
      ) {
        let computerChoice = Math.floor(Math.random() * 3 + 1);
        let computer =
          computerChoice === 1
            ? "rock"
            : computerChoice === 2
            ? "paper"
            : "scissors";
        // implementing previous section same game logic here
        let result;
        result =
          playerOne === computer
            ? "tie"
            : playerOne === "rock" && computer === "paper"
            ? "computer wins"
            : playerOne === "paper" && computer === "scissors"
            ? "computer wins"
            : playerOne === "scissors" && computer === "rock"
            ? "computer wins"
            : "player wins";
        alert(
          `Computer choice: ${computer}\nYour choice: ${playerOne}\nRound result: ${result}`
        );
        let playAgain = result
          ? (playGame = confirm(
              "Shall we play rock, paper, or scissors again ???"
            ))
          : null;
        //   instead of recursive function game() we can use location.reload() to refresh whole page without a function
        playAgain ? game() : alert("Ok thanks for playing..");
      } else alert("You did't enter rock, paper, scissors");
    } else alert("I guess you changed your mind. Maybe next time.");
  } else alert("Ok, May be next time...!");
}
game();
