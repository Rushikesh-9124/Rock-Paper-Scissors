const choices = ["rock", "paper", "scissor"];

const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");


let computerScore = 0;
let playerScore = 0;

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result = "";
    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else{
        switch (playerChoice){
            case "rock" :
                result = (computerChoice === "paper") ? "You Lose!" : "You Won!";
                break;
            case "paper" :
                result = (computerChoice === "rock") ? "You Won!" : "You Lose!";
                break;
            case "scissor" :
                result = (computerChoice === "rock") ? "You Lose!" : "You Won!";
                break;
        }
    }
    if(result == "You Won!"){
        playerScore++;
    }
    else if(result == "You Lose!"){
        computerScore++;
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch (result){
        case "You Won!" :
            resultDisplay.classList.add("greenText");
            break;
        case "You Lose!" :
            resultDisplay.classList.add("redText");
            break;

    }


    playerScoreDisplay.textContent = `${playerScore}`;
    computerScoreDisplay.textContent = `${computerScore}`;
;}