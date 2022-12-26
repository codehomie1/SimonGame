const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];


let randomChosenColor = buttonColors[nextSequence()];
gamePattern.push(randomChosenColor);

// returns a random number between 0-3
function nextSequence() {
    return Math.floor(Math.random() * 4);
}

