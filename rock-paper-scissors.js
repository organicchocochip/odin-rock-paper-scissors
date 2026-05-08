

function getComputerChoice() {
    let z = Math.floor(Math.random() * 10);
    if (z <= 3) {
        return "rock";
    } else if (z <= 6) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Rock paper scissors!").toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            return "Draw!"
        } else if (humanChoice == "rock" && computerChoice == "scissors" ||
            humanChoice == "paper" && computerChoice == "rock" ||
            humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
            return "You Win!";
            
        } else {
            computerScore++;
            return "You Lose...";
        }
    }

    for (let i = 0; i < 5; i++) {

        console.log("Round" + (1 + i));

        let humanChoice = getHumanChoice();
        console.log("You choose " + humanChoice);
        let computerChoice = getComputerChoice();
        console.log("Computer choose " + computerChoice);
        
        let roundResult = playRound(humanChoice, computerChoice);
        console.log(roundResult);

        console.log(
            "Your Score is " +
            humanScore + 
            " and " +
            "Computer's Score is " +
            computerScore
        );
        console.log("------------------------------")
        console.log("")
    }

    function declareWinner() {
        if (humanScore > computerScore) {
            return "***You Win!***";
        } else if (humanScore == computerScore) {
            return "***It's a Draw!***";
        } else {
            return "***You Lose...***";
        }
    }
    console.log(declareWinner())
}

playGame();



