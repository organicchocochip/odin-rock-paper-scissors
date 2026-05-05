let i = Math.floor(Math.random() * 10);

function getComputerChoice() {
    if (i <= 3) {
        return "rock";
    } else if (i <= 6) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(getComputerChoice());
console.log(Math.floor(Math.random() * 10));