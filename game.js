var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];


// user must interact with the document before any sound can be played
var startGame = false;
var level = 0;

// when user presses key game will start first sequence
$(document).keypress(function() {
    if(!startGame){
        $('#level-title').text("Level " + level)
        nextSequence();
        startGame = true 
    }
})


// when button is clicked by user push it to userClickPattern
$(".btn").click(function(){
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor)
    playSound(userChosenColor)
    animatePress(userChosenColor)

    checkAnswer(userClickedPattern.length-1)
  });




// controls the game pattern 
function nextSequence() {

    // reset userClicked pattern for new level to start
    userClickedPattern = [];
    level++;
    $('#level-title').text("Level " + level)

   let randomNum = Math.floor(Math.random() * 4);
   let randomChosenColor = buttonColors[randomNum];
   gamePattern.push(randomChosenColor);

   $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosenColor)
   
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


// check answer of the current Level index
// if answer is correct and they are same length start next sequence
function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
              }, 1000);
        }

    } else {
        console.log("wrong")
        playSound("wrong")
        let body = document.querySelector("body");

        $(body).addClass('game-over');

        setTimeout(function() {
             $(body).removeClass('game-over');
        }, 200)

        $('#level-title').text("Game over, Press Any Key to Restart")

        startOver();

    }

    function startOver() {
        startGame = 0;
        level = 0;
        gamePattern.length = [];

    }

} 
