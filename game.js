// return  ‘Rock’, ‘Paper’ or ‘Scissors’ randonly.
function computerPlay() {
  const options = ["Rock", "Paper", "Scisor"];
  let x = Math.floor(Math.random() * 3);
  return options[x];
}

// Perform a single game
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie"
  } else if (playerSelection === "Paper" && computerSelection == "Rock") {
    return "Win";
  } else if (playerSelection === "Rock" && computerSelection == "Scisor") {
    return "Win";
  } else if (playerSelection === "Scisor" && computerSelection == "Paper") {
    return "Win";
  } else if (playerSelection === "Paper" && computerSelection == "Scisor") {
    return "Lose";
  } else if (playerSelection === "Rock" && computerSelection == "Paper") {
    return "Lose";
  } else if (playerSelection === "Scisor" && computerSelection == "Rock") {
    return "Lose";
  };
};

function registerResult(result,playerSelection, computerSelection){
  if (result == "Win") {
    playerScore++;
    pPlayerScore.textContent = `${playerScore} POINTS`;
    resultMessage.textContent = 'You won!';
  } else if (result == "Lose") {
    computerScore++;
    pComputerScore.textContent = `${computerScore} POINTS`;
    resultMessage.textContent = 'Computer won!';
  } else {
    resultMessage.textContent = 'It is a tie!';
  }
  resultText.textContent = `(Player) ${playerSelection} x ${computerSelection} (Computer) `;
  resultText.classList.add('played');
  resultMessage.classList.add('played');  
}

function endGame(winner) {
  btnsContainer.removeChild(btnsDiv);
  btnsContainer.removeChild(btnsMessage);
  resultMessage.textContent = '';
  resultText.textContent = '';
  resultDiv.removeChild(resultMessage);
  resultDiv.removeChild(resultText);
  if (winner == 'player') {
    msgResult.textContent = 'You Won! 😀';
  } else {
    msgResult.textContent = 'You Lost! 🙁';
  }
  btnsContainer.appendChild(msgResult);
  btnsContainer.appendChild(msgInfo);
  btnsContainer.appendChild(msgBtn);

}

function removeTransition() {
  // if (e.propertyName !== "transform") return; // skip if the transition is not related to the transform
  // this is equal to wenever it has been called, in this case the key
  // console.log(e);
  resultMessage.classList.remove("played");
  resultText.classList.remove("played")
}

function resetGame() {
  computerScore = 0;
  playerScore = 0;
  pPlayerScore.textContent = `${playerScore} POINTS`;
  pComputerScore.textContent = `${computerScore} POINTS`;
  btnsContainer.removeChild(msgResult);
  btnsContainer.removeChild(msgInfo);
  btnsContainer.removeChild(msgBtn);
  btnsContainer.appendChild(btnsMessage);
  btnsContainer.appendChild(btnsDiv);
  resultDiv.appendChild(resultMessage);
  resultDiv.appendChild(resultText);
}


function game(playerSelection) {
  computerSelection = computerPlay()
  result = playRound(playerSelection, computerSelection);
  registerResult(result,playerSelection, computerSelection);
  if (playerScore == 5) {
    endGame('player');
  } else if (computerScore == 5) {
    endGame('computer');
  }
}

// game();

//Pseudo-code
// 1-Add queryselector for all btns
// 2-for each btn add an eventlistener related to the click
//    2.1-the event click is related to the call of game function
// 3-the main function perform:
//    3.1-an game
//    3.2-update the scoreboard
//    3.3-check if the game ended (one player achive 5 wins)
//        3.3.1-if no player with 5 wins CONTINUE (step 2)
//        3.3.2-if player with 5 wins
//            3.3.2.1-finish the game and show massage of the winner
//            3.3.2.2-present an button to replay
// 4-if player press replay button, game reestart

// 0 Global variable definition
let computerScore = 0;
let playerScore = 0;

// 1 
// Existing elements
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scisorBtn = document.getElementById('scisorBtn');
const pPlayerScore = document.getElementById('playerScore');
const pComputerScore = document.getElementById('computerScore');
const resultMessage = document.getElementById('resultMessage');
const resultText = document.getElementById('resultText');
const resultDiv = document.querySelector('.result');
const btnsDiv = document.querySelector('.btnsDiv');
const btnsMessage = document.querySelector('.btnsMessage');
const btnsContainer = document.querySelector('.btnsContainer');
// created elements
const msgResult = document.createElement('h3');
const msgInfo = document.createElement('p');
msgInfo.textContent = 'Do you want to play again?';
const msgBtn = document.createElement('button')
msgBtn.classList.add('btnReset');
msgBtn.textContent = 'Yes';




// addEvent
rockBtn.addEventListener('click', () => game('Rock'));
paperBtn.addEventListener('click', () => game('Paper'));
scisorBtn.addEventListener('click', () => game('Scisor'));
msgBtn.addEventListener('click', () => resetGame());
resultMessage.addEventListener('transitionend',removeTransition)






