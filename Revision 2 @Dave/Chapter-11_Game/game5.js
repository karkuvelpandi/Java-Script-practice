let playGame = confirm("Shall we play rock,paper,scissor?");
if (playGame) {
  //    Play
  while (playGame) {
    const playerChoice = prompt("Please enter rock, paper, scissor...!");
    if (playerChoice || playerChoice === "") {
      const playerOne = playerChoice.trim().toLowerCase();
      if (
        playerOne === "rock" ||
        playerOne === "paper" ||
        playerOne === "scissor"
      ) {
        const random = Math.floor(Math.random() * 3);
        const rpsArray = ["rock", "paper", "scissor"];
        const computerChoice = rpsArray[random];
        const result =
          playerOne === computerChoice
            ? "Tie game..!"
            : playerOne === "rock" && computerChoice === "paper"
            ? `Player: ${playerOne}\nComputer: ${computerChoice}\nComputer wins..!`
            : playerOne === "paper" && computerChoice === "scissor"
            ? `Player: ${playerOne}\nComputer: ${computerChoice}\nComputer wins..!`
            : playerOne === "scissor" && computerChoice === "rock"
            ? `Player: ${playerOne}\nComputer: ${computerChoice}\ncomputer wins..!`
            : `Player: ${playerOne}\nComputer: ${computerChoice}\nPlayer wins..!`;
        alert(result);
        playGame = confirm("Play again..!");
        if (!playGame) {
          alert("Ok thanks for playing..!");
        }
        continue;
      } else {
        alert("You didn't enter rock, paper, scissor...!");
        continue;
      }
    } else {
      alert("I guess you changed your mind..!");
      break;
    }
  }
} else {
  alert("Ok may be next time...!");
}
