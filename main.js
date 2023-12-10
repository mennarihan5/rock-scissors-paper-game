function game(player1, player2){
    const paper = "paper";
    const rock = "rock";
    const scissors = "scissors";
    let player1Points = 0;
    let player2Points = 0;

    if (player1 === player2) {
        return `It's a tie!`;
    }
    else if (player1 === paper && player2 === rock || player1 === rock && player2 === scissors || player1 === scissors && player2 === paper) {
        return `Player One Wins!`;
    } else {
        return `Player Two Wins!`;
    }
    
}

const playerOne = "scissors";
const playerTwo = "rock";

console.log(game(playerOne, playerTwo));