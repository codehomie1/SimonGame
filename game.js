const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];

let randomChosenColor = buttonColors[nextSequence()];
gamePattern.push(randomChosenColor);
let buttonAnimation = $("#"+randomChosenColor).fadeOut(100).fadeIn(100);

// when button is clicked by user push it to userClickPattern
$(".btn").click(function(){
    let userChosenColor = this.id;
    userClickedPattern.push(userChosenColor)
    console.log(userClickedPattern);
  });


// returns a random number between 0-3
function nextSequence() {
    return Math.floor(Math.random() * 4);
}

// plays sound according to color name
function playSound(color) {
    var audio = new Audio('./sounds/'+color+'.mp3');
    audio.play();
}