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
        return result + playerSelection + point;
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
        return result + playerSelection + beats + computerSelection + point;
    } else {
        return result + computerSelection + beats + playerSelection + point;
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

let playerSelection = playerPlay();
alert(playRound(playerSelection,computerPlay()))
