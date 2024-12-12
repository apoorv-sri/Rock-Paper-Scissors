let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const mssg = document.querySelector("#mssg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};

const drawGame = () => {
  mssg.innerText = "Game was draw. Play again.";
  mssg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    mssg.innerText = "You Win!";
    mssg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    mssg.innerText = "You lose.";
    mssg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  const compChoice = genCompChoice();
  console.log("comp choice =", compChoice);

  if (userChoice === compChoice) {
    // Draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // scissors, rock
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // usersChoice = scissors
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
