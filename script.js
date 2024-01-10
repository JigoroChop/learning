function getComputerChoice(){
    const RPS = ['Rock', 'Paper', 'Scissors']
    let compChoice = RPS[Math.floor(Math.random() * 3)];
    return compChoice
}

console.log(getComputerChoice())