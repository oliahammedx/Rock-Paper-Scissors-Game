const gameSection = document.querySelector(".game-section");
let userHand = document.getElementById("userHand");
let computerHand = document.getElementById("computerHand");
let gameTitle = document.querySelector(".game-title");
let gameResult = document.getElementById("gameResult");
let choiceButton = document.querySelectorAll(".choice-button");

let userScore = document.getElementById("userScore");
let computerScore = document.getElementById("computerScore");

let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];

let choices = ["rock", "paper", "scissors"];

let userScoreCount = 0;
let computerScoreCount = 0;

choiceButton.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    // Active button

    choiceButton.forEach((button2, index2) => {});

    // User choice

    let imageSrc = button.querySelector("img").src;

    userHand.src = imageSrc;

    let userChoice = choices[index];

    // Computer choice

    let rendomNum = Math.floor(Math.random() * 3);

    computerHand.src = cpuImages[rendomNum];

    let computerChoice = choices[rendomNum];

    // Check Winner

    if (userChoice === computerChoice) {
      gameTitle.innerText = "It's a Draw!";
      gameResult.innerText = `Both chose ${userChoice}`;
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      gameTitle.innerText = "You Win!";
      gameResult.innerText = `${userChoice} beats ${computerChoice}`;

      userScoreCount++;
      userScore.innerText = userScoreCount;
    } else {
      gameTitle.innerText = "Computer Wins!";
      gameResult.innerText = `${computerChoice} beats ${userChoice}`;

      computerScoreCount++;
      computerScore.innerText = computerScoreCount;
    }
  });
});
