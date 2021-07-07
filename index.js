const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const MOVES = [ROCK,PAPER,SCISSORS]
var WINNER = false;

function computerPlays(){
    let move = Math.floor(Math.random() * 3);
    return MOVES[move];
}

function checkValidMove(move){
    let FALSEMOVE = true;
    for(i=0; i<3; i++){
        if(move.toUpperCase() == MOVES[i]){
            FALSEMOVE = false;
        }
    }
    return !FALSEMOVE;
}

function playerPlays(){
    let playerMove = prompt("Rock, Paper or Scissors!")
    if(checkValidMove(playerMove)){
        return playerMove;
    }
    else {
        playerPlays();
    }
}

function youWin(pMove, cMove){
    WINNER = true;
    console.log("You win " + pMove + " beats "+ cMove )
}

function youLose(pMove, cMove){
    WINNER= true; 
    console.log("You lose " + cMove + " beats "+ pMove )
}

function draw(){
    console.log("Draw!")
}

function round(player, computer){
    const playerMove = player.toUpperCase();
    const computerMove = computer.toUpperCase();
    switch(playerMove){
        case ROCK:
            computerMove==playerMove?draw():computerMove==SCISSORS?youWin(playerMove,computerMove):youLose(playerMove,computerMove);
            break;
        case SCISSORS:
            computerMove==playerMove?draw():computerMove==PAPER?youWin(playerMove,computerMove):youLose(playerMove,computerMove);
            break;
        case PAPER:
            computerMove==playerMove?draw():computerMove==ROCK?youWin(playerMove,computerMove):youLose(playerMove,computerMove);
    }
}


function game(){
    while(!WINNER){
        round(playerPlays(),computerPlays())
    }
}
game()