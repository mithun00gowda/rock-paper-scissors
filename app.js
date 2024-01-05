let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg-container");
const winner = document.querySelector(".winner");
const score = document.querySelector(".score-board");
const scoredMsg = document.querySelector(".scoredboard");

const genComChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const drawGame = () => {
  console.log("drawGame");
};

const playGame = (UserChoice) => {
  console.log("user choice =", UserChoice);
  //generate computer choice
  const compChoice = genComChoice();
  console.log("compChoice =", compChoice);

  if (UserChoice === compChoice) {
    //draw game logic
    scoredMsg.innerText = "Draw";
    drawGame();
  } else if (UserChoice === "rock" && compChoice === "paper") {
    compScore++;
    Comp();
    playerScore();
  } else if (UserChoice === "rock" && compChoice === "scissors") {
    userScore++;
    User();
    playerScore();
  } else if (UserChoice === "paper" && compChoice === "rock") {
    userScore++;
    User();
    playerScore();
  } else if (UserChoice === "paper" && compChoice === "scissors") {
    compScore++;
    Comp();
    playerScore();
  } else if (UserChoice === "scissors" && compChoice === "rock") {
    compScore++;
    Comp();
    playerScore();
  } else if (UserChoice === "scissors" && compChoice === "paper") {
    userScore++;
    User();
    playerScore();
  }
};

choice.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    const UserChoice = choice.getAttribute("id");
    console.log("choice was clicked", UserChoice);
    playGame(UserChoice);
  });
});

const playerScore = () => {
  if (userScore >= 5 || compScore >= 5) {
    if(userScore === 5){
        winner.innerText = "Winner is You";
        
        
    }else{
        winner.innerText = "Winner is Computer";
    }
    scoredMsg.classList.add("msg-hide");
    score.classList.add("msg-hide");
    winner.classList.remove("msg-hide");
    msg.classList.remove("msg-hide");
    resetGame();
  } else {
    document.querySelector("#user-score").innerText = userScore;
    document.querySelector("#comp-score").innerText = compScore;
  }
};

const resetGame = () => {
  userScore = 0;
  compScore = 0;
  playerScore();
  scoredMsg.innerText = " ";
};

const playButton = document.querySelector(".msg");
playButton.addEventListener("click", () => {
    resetGame();
    score.classList.remove("msg-hide");
    winner.classList.add("msg-hide");
    msg.classList.add("msg-hide");
    scoredMsg.classList.remove("msg-hide");

});

const User = () => {
    scoredMsg.innerText = "You Get Point";
}
const Comp = () => {
    scoredMsg.innerText = "Computer Get Point";
}

