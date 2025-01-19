const rockBtn = document.getElementById("rock_btn");
const paperBtn = document.getElementById("paper_btn");
const scissorsBtn = document.getElementById("scissors_btn");
const playerScoreSpan = document.getElementById("player_score");
const computerScoreSpan = document.getElementById("computer_score"); 
const allScore = document.querySelectorAll(".score");
const resultMsg = document.getElementById("results");
const winnerMsg = document.getElementById("winner");
const resetBtn = document.getElementById("reset_game_btn");

const optionsContainer = document.getElementById("options_container")
const resultsContainer = document.getElementById("results_container")

// rockBtn.innerText = "Rock"
// paperBtn.innerText = "Paper"
// scissorsBtn.innerText = "Scissors"



const getComputerResult = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length)
    return options[randomIndex]
}

let playerScore = 0;
let computerScore = 0;

const doesPlayerWinsRound = (player, computer) => {
   return (player === "Rock" && computer === "Scissors") || 
          (player === "Scissors" && computer === "Paper") || 
          (player === "Paper" && computer === "Rock")
}; 

const getOutcomeOfRound = (option) => {
    const computerOption = getComputerResult(); 

    if (doesPlayerWinsRound(option, computerOption)) {
        playerScore++
        return `Player wins the round ${option} beats ${computerOption}`
    } 
    else if (option === computerOption) {
        return `It is a tie! Both chooses ${option}`
    } else {
        computerScore++
        return `Computer wins the round ${computerOption} beats ${option}` 
    }
}

const displayResults = (option) => {
    resultMsg.innerText = getOutcomeOfRound(option);
    playerScoreSpan.innerText = playerScore;
    computerScoreSpan.innerText = computerScore; 

    if (playerScore === 3 || computerScore === 3) {
        winnerMsg.innerText = `${playerScore === 3 ? 
        "Player" : "Computer"} has won the game!`;

        optionsContainer.style.display = "none"; 
        resetBtn.style.display = "block";
    };

};

const resetGame = () => {
    resetBtn.style.display = "none";
    optionsContainer.style.display = "flex"; 
    playerScoreSpan.innerText = 0;
    computerScoreSpan.innerText = 0;
    playerScore = 0;
    computerScore = 0; 
    winnerMsg.innerText = ""
    resultMsg.innerText = ""
}

rockBtn.addEventListener("click", (event) => {
    const element = event.currentTarget.getAttribute('data-text');
    displayResults(element)
});

paperBtn.addEventListener("click", (event) => {
    const element = event.currentTarget.getAttribute('data-text');
    displayResults(element)
});


scissorsBtn.addEventListener("click", (event) => {
    const element = event.currentTarget.getAttribute('data-text');
    displayResults(element)
}); 

resetBtn.addEventListener("click", resetGame)




