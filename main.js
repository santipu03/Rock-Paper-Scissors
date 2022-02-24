//define variables
let computerPoints = 0;
let myPoints = 0;
let winnerRound;
let message;


//function that choose a random option for the computer 
const computerPlay = () => {
    const array = ["rock","paper","scissors"];
    let randomNumber = Math.floor(Math.random()*3)
    return array[randomNumber];
}

//function that prints the message of the result of each round
const updatePoints = (winnerRound,myPoints,computerPoints) => {
    if (winnerRound == "TIE"){
        console.log("TIE");
    } else {
        console.log(`The winner of this round is ${winnerRound}, so my points are ${myPoints} and the computer points are ${computerPoints}`); 
    }
};

//function that prints the final message of the game
const finalResults = (myPoints,computerPoints) => {
    if (myPoints > computerPoints){
        console.log("Congratulations, you are the WINNER")
    } else if (computerPoints > myPoints){
        console.log("Loser, don't look at me")
    } 
};


//main function that define the game
const playGame = () => {
    //get the random selection from the computer
    const computerSelection = computerPlay();

    //get the selection of the player
    const playerSelection = prompt("rock paper or scissors ");

    //conditional that decides who wins depending of the choice and adds the points
    if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")
        ){
        computerPoints++;
        winnerRound = "COMPUTER";
    } else if (
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "rock" && computerSelection == "scissors")
        ){
        myPoints++;
        winnerRound = "ME";
    } else if (playerSelection == computerSelection){
        winnerRound = "TIE";
    };
    //call the function that prints the results of the round
    updatePoints(winnerRound,myPoints,computerPoints);
   

    //if someone reaches 5 points, is the winner and the game ends, if not, the game continue
    if (myPoints === 5 || computerPoints === 5){
        finalResults(myPoints,computerPoints);
    } else  {
        playGame();
    }
    
    
};
    

//call the function to start the game
playGame();