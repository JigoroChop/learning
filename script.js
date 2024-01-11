function getComputerChoice(){
    const RPS = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = RPS[Math.floor(Math.random() * 3)];
    return computerChoice;
}


function playRound(playerSelection, computerSelection){
    if (playerSelection == 'Rock' && computerSelection == 'Paper'){
        return 'You lose! Paper beats Rock'
}   else if (playerSelection == 'Paper' && computerSelection == 'Scissors'){
        return 'You lose! Scissors beats Paper'
} else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
    return 'You lose! Rock beats Scissors'
} else if (playerSelection == 'Rock' && computerSelection == 'Rock' || playerSelection == 'Paper' && computerSelection == 'Paper' || playerSelection == 'Scissors' && computerSelection == 'Scissors'){
    return 'You both chose ' + playerSelection + '. Tie game! Try again.'
} else {
    return 'You chose ' + playerSelection + ' & Computer chose ' + computerSelection + '. You win!';
}
}
playerChoice = prompt('Choose your weapon');
let playerSelection = playerChoice.toUpperCase().substr(0,1) + playerChoice.toLowerCase().substr(1);
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
