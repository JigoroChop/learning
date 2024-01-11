function getComputerChoice(){
    const RPS = ['Rock', 'Paper', 'Scissors']
    let compChoice = RPS[Math.floor(Math.random() * 3)];
    return compChoice
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == 'Rock' && computerSelection == 'Paper'){
        return 'You lose!'
    }  else if (playerSelection == 'Paper' && computerSelection == 'Scissors'){
        return 'You lose!'
    } else if (playerSelection == 'Scissors' && computerSelection != 'Rock') {
        return 'You lose!'
    } else if (playerSelection == 'Rock' && computerSelection == 'Rock' || playerSelection == 'Paper' && computerSelection == 'Paper' || playerSelection == 'Scissors' && computerSelection == 'Scissors'){
        return 'Tie game! Try again.'
    } else {
        return 'You win!';
    }
}

const playerSelection = 'Rock'
const computerSelection = getComputerChoice()
console.log('You chose ' + playerSelection)
console.log('Computer chose ' + computerSelection)
console.log(playRound(playerSelection,computerSelection))
