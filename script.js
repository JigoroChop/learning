function getComputerChoice(){
    const RPS = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = RPS[Math.floor(Math.random() * 3)];
    return computerChoice;
}


function playRound(playerSelection, computerSelection){
    if (playerSelection == 'Rock' && computerSelection == 'Paper'){
        computerScore++;
        return 'You lose! Paper beats Rock ';
}   else if (playerSelection == 'Paper' && computerSelection == 'Scissors'){
        computerScore++;
        return 'You lose! Scissors beats Paper ';
} else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
    computerScore++;
    return 'You lose! Rock beats Scissors ';
} else if (playerSelection == 'Rock' && computerSelection == 'Rock' || playerSelection == 'Paper' && computerSelection == 'Paper' || playerSelection == 'Scissors' && computerSelection == 'Scissors'){
    return 'You both chose ' + playerSelection + '. Tie game! Try again. '
} else {
    playerScore++;
    return 'You chose ' + playerSelection + ' & Computer chose ' + computerSelection + '. You win! ';
}
}

let playerScore = 0;
let computerScore = 0; 

function game(){
    playerChoice = prompt('Choose your weapon');
    let playerSelection = playerChoice.toUpperCase().substr(0,1) + playerChoice.toLowerCase().substr(1);
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log('You: ' + playerScore + ' - ' + 'Computer: ' + computerScore);
}

game()
game()
game()
game()
game()

// Look to see if you can implement a check that pauses the game until a valid PROMPT is entered.
// e.g. when playerChoice prompt pops up, and you enter "apple soup" -- the function prompts you to enter a valid response (rock, paper, scissors)
// this should be case-insensitive. Could be good to learn how to check the value of that input against the values in an array.