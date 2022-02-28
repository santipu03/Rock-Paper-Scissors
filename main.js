//DOM Selection
const buttons = document.querySelectorAll(".button");
const playerPoints = document.querySelector(".my-points");
const compPoints = document.querySelector(".computer-points");
const roundMessage = document.querySelector(".message");
const finalBtn = document.querySelector(".final-btn");


// when a button is clicked, the game starts and pass the election as the argument to the playGame() function
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        playGame(e.target.id)
    });
});


//define variables
let computerPoints = 0;
let myPoints = 0;
let winnerRound;


//function that choose a random option for the computer 
const computerPlay = () => {
    const array = ["rock","paper","scissors"];
    let randomNumber = Math.floor(Math.random()*3)
    return array[randomNumber];
}

//function that prints the message of the result of each round
const updatePoints = (winnerRound,myPoints,computerPoints) => {
    if (winnerRound == "TIE"){
        roundMessage.textContent = `TIE`;
    } else {
        playerPoints.textContent = myPoints;
        compPoints.textContent = computerPoints;
        roundMessage.textContent = `The winner of this round is ${winnerRound}`;
    }
};

//function that prints the final message of the game, disable the main buttons and adds the "reset" button
const endGame = (myPoints,computerPoints) => {
    buttons.forEach(btn => {
        btn.disabled = true;
    })

    if (myPoints > computerPoints){
        roundMessage.textContent = "Congratulations, you are the WINNER";
    } else if (computerPoints > myPoints){
        roundMessage.textContent = "Loser, don't look at me";
    } 
    
    finalBtn.classList.add("end-round");
    

};


// When "reset" button is clicked, the game restarts from 0 and the button dissapears
finalBtn.addEventListener("click", () => {
    computerPoints = 0;
    myPoints = 0;
    playerPoints.textContent = 0;
    compPoints.textContent = 0;
    roundMessage.textContent = "";

    buttons.forEach(btn => {
        btn.disabled = false;
    });
    finalBtn.classList.remove("end-round")
});



//main function that define the game
const playGame = (playerSelection) => {
    //get the random selection from the computer
    const computerSelection = computerPlay();

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
        endGame(myPoints,computerPoints);
    } else  {
        return;
    }
};


