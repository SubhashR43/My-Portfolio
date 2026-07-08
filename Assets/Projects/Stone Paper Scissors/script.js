//Get access of elements
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScores = document.querySelector("#user-score");
const compScore = document.querySelector("#computer-score")

//Make score variables
let userScore = 0;
let computerScore = 0;

// click event on images 
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

// Game function condition of winning and loss
let playGame = (userChoice) => {
  let compChoice = genrCompChoice();
  
  if (userChoice === compChoice) {
    // Game Draw
    drawGame();
  }
  else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    }
    else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    }
    else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
}

//Random selection generastion by computer
let genrCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const ranindex = Math.floor(Math.random() * 3);
  return options[ranindex];
}

//Draw game funtion
const drawGame = () => {
  msg.innerText = "Game is Draw, Play Again!";
  msg.style.backgroundColor = "#081b31";
}

// Winning condtion msg display function and score print
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScores.innerText = userScore;
    msg.innerText = `"You Win!" Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    compScore.innerText = computerScore;
    msg.innerText = `"Computer Win!" Computer ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}