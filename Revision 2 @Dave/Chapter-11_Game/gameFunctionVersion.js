// Refactor rock, paper & scissor into function version.

const initGame = () => {
  const startGame = confirm("Shall we play rock, paper, scissor");
  startGame ? playGame() : alert("Ok, may be next time..!");
};

// Game flow function
const playGame = () => {
  while (true) {
    let playerChoice = getPlayerChoice();
    playerChoice = formatPlayerChoice(playerChoice);
    if (playerChoice === "") {
      invalidChoice();
      continue;
    }
    if (!playerChoice) {
      decideNotToPlay();
      break;
    }
    playerChoice = evaluateChoice(playerChoice);
    if (!playerChoice) {
      invalidChoice();
      continue;
    }
    const computerChoice = getComputerChoice();
    const result = determineWinners(playerChoice, computerChoice);
    displayResult(result);
    if (askToPlayAgain()) {
      continue;
    } else {
      thanksForPlaying();
      break;
    }
  }
};

// Helper functions
const getPlayerChoice = () => {
  return prompt("Please enter rock, paper, scissor..!");
};
//
const formatPlayerChoice = (choice) => {
  if (choice || choice === "") {
    return choice.trim().toLowerCase();
  } else return false;
};
//
const invalidChoice = () => {
  alert("You didn't enter rock, paper, scissor..!");
};
//
const decideNotToPlay = () => {
  alert("I guess you changed your mind");
};
//
const getComputerChoice = () => {
  const random = Math.floor(Math.random() * 3);
  console.log(random);
  const rpsArray = ["rock", "paper", "scissor"];
  return rpsArray[random];
};
//
const determineWinners = (player, computer) => {
  let winner =
    player === computer
      ? "Tie game..!"
      : player === "rock" && computer === "paper"
      ? `Player: ${player}\nComputer: ${computer}\nComputer wins..!`
      : player === "paper" && computer === "scissor"
      ? `Player: ${player}\nComputer: ${computer}\nComputer wins..!`
      : player === "scissor" && computer === "rock"
      ? `Player: ${player}\nComputer: ${computer}\nComputer wins..!`
      : `Player: ${player}\nComputer: ${computer}\Player wins..!`;
  return winner;
};
//
const displayResult = (result) => {
  alert(result);
};
//
const askToPlayAgain = () => {
  return confirm("Shall we play again..!");
};
//
const thanksForPlaying = () => {
  alert("Thanks for playing..!");
};
//
const evaluateChoice = (choice) => {
  if (choice === "rock" || choice === "paper" || choice === "scissor") {
    return choice;
  } else return false;
};
// Init the game
initGame();
