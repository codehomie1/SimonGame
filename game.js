const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];


// user must interact with the document before any sound can be played


// wait for user interaction
// then make start true
// start sequence

var startGame = false;
var level = 0;

$(document).keypress(function() {
    if(!startGame){
        startGame = true
        alert("Game has started!")
        nextSequence(level)
        
    }
})



// when button is clicked by user push it to userClickPattern
$(".btn").click(function(){
    let userChosenColor = this.id;
    userClickedPattern.push(userChosenColor)
    playSound(userChosenColor)
    animatePress(userChosenColor)
  });


// returns a random number between 0-3
function nextSequence(level) {
   let randomNum = Math.floor(Math.random() * 4);
   let randomChosenColor = buttonColors[randomNum];
   gamePattern.push(randomChosenColor);
   $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
   playSound(randomChosenColor)
   $('#level-title').text("Level " + level)
   level++;

}

// plays sound according to color name
function playSound(name) {
    var audio = new Audio('./sounds/'+name+'.mp3');
    audio.play();
}

// animate press given color by removing and adding .pressed class
function animatePress(currentColor) {
    $('.'+currentColor).addClass('pressed');

    setTimeout(function() {
        $('.'+currentColor).removeClass('pressed');
    }, 100)
}

