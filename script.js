//button variables:-
const rockBtn= document.querySelector("#rock");
const paperBtn= document.querySelector("#paper");
const scissorsBtn= document.querySelector("#scissors");

//choice variables:-
const playerChoice= document.querySelector(".playerChoice");
const computerChoice= document.querySelector(".computerChoice");

//score display variables:-
const playerScoreDisplay= document.querySelector(".playerScoreDisplay");
const computerScoreDisplay= document.querySelector(".computerScoreDisplay");

//result variables:-
const result= document.querySelector(".result");
const finalResult= document.querySelector(".finalResult");

//score varaibles:-
let playerScore= 0;
let computerScore= 0;

rockBtn.addEventListener("click", function(){
    playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", function(){
    playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", function(){
    playRound("scissors", getComputerChoice());
});

function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock"){
        if(computerSelection == "rock"){
            playerChoice.textContent= "You chose: Rock";
            computerChoice.textContent= "Computer chose: Rock";
            result.textContent= "It's a tie!";
            displayScore();
        }
        else if(computerSelection == "paper"){
            playerChoice.textContent= "You chose: Rock";
            computerChoice.textContent= "Computer chose: Paper";
            result.textContent= "You lose!";
            computerScore++;
            displayScore();
        }
        else{
            playerChoice.textContent= "You chose: Rock";
            computerChoice.textContent= "Computer chose: Scissors";
            result.textContent= "You win!";
            playerScore++;
            displayScore();
        }
    }

    else if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            playerChoice.textContent= "You chose: Paper";
            computerChoice.textContent= "Computer chose: Rock";
            result.textContent= "You win!";
            playerScore++;
            displayScore();
        }
        else if(computerSelection == "paper"){
            playerChoice.textContent= "You chose: Paper";
            computerChoice.textContent= "Computer chose: Paper";
            result.textContent= "It's a tie!";
            displayScore();
        }
        else{
            playerChoice.textContent= "You chose: Paper";
            computerChoice.textContent= "Computer chose: Scissors";
            result.textContent= "You lose!";
            computerScore++;
            displayScore();
        }
    }

    else{
        if(computerSelection == "rock"){
            playerChoice.textContent= "You chose: Scissors";
            computerChoice.textContent= "Computer chose: Rock";
            result.textContent= "You lose!";
            computerScore++;
            displayScore();
        }
        else if(computerSelection == "paper"){
            playerChoice.textContent= "You chose: Scissors";
            computerChoice.textContent= "Computer chose: Paper";
            result.textContent= "You win!";
            playerScore++;
            displayScore();
        }
        else{
            playerChoice.textContent= "You chose: Rock";
            computerChoice.textContent= "Computer chose: Scissors";
            result.textContent= "It's a tie!";
            displayScore();
        }
    }


}

function getComputerChoice(){
        let number= Math.floor(Math.random() * 3) + 1;

        if(number == 1){
            return "rock";
        }
        else if(number == 2){
            return "paper";
        }
        else{
            return "scissors";
        }
}

function displayScore(){
    playerScoreDisplay.textContent= `Your Score: ${playerScore}`;
    computerScoreDisplay.textContent= `Computer Score: ${computerScore}`

    finalResult.textContent=``;

    if(playerScore == 5){
        finalResult.textContent= `You win the game!`;
        playerScore= 0;
        computerScore= 0;
    }
    if(computerScore == 5){
        finalResult.textContent= `Computer wins the game!`;
        playerScore= 0;
        computerScore= 0;
    }
}