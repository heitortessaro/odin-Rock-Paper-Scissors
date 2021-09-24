// return  ‘Rock’, ‘Paper’ or ‘Scissors’ randonly.
function computerPlay(){
    const options = ["Rock", "Paper", "Scisor"];
    let x = Math.floor((Math.random() * 3));
    return options[x];
}

// Perform a single game
function playRound(playerSelection,computerSelection){
    let result
    const beats = " beats ";
    const point = ".";
    if (playerSelection == computerSelection){
        result = "It is a tie! Both player selected ";
        return [result + playerSelection + point, "tie"];
    } else if(playerSelection === "Paper" && computerSelection =="Rock"){
        result = "You Win! ";
    } else if(playerSelection === "Rock" && computerSelection =="Scisor"){
        result = "You Win! ";
    } else if(playerSelection === "Scisor" && computerSelection =="Paper"){
        result = "You Win! ";
    } else if(playerSelection === "Paper" && computerSelection =="Scisor"){
        result = "You Lose! ";
    } else if(playerSelection === "Rock" && computerSelection =="Paper"){
        result = "You Lose! ";
    } else if(playerSelection === "Scisor" && computerSelection =="Rock"){
        result = "You Lose! ";
    }
    
    if (result == "You Win! "){
        return [result + playerSelection + beats + computerSelection + point, "Win"];
    } else {
        return [result + computerSelection + beats + playerSelection + point, "Lose"];
    }


}

function playerPlay () {
    let playerSelection = prompt("Type between the game option (Rock, Scisor, Paper):");
    playerSelection = capitalize(playerSelection);
    return playerSelection;
}

function capitalize(phrase){
    firstLetter = phrase.charAt(0);
    otherLetters = phrase.slice(1,phrase.length);
    return firstLetter.toUpperCase() + otherLetters.toLowerCase();
}

function game(){
    let computerWins = 0;
    let playerWins = 0;

    for(let i = 1; i <= 10; i++){
        let playerSelection = playerPlay();
        [phase, result] = playRound(playerSelection,computerPlay());
        if (result == "Win"){
            playerWins++;
        } else if (result == "Lose"){
            computerWins++;
        }
        alert(phase);
        alert("You " + playerWins + " x Computer " + computerWins);
    }
}

game();