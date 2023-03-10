<h1>Intro</h1>
This is a challenge Module from the Complete 2023 Web-dev course created by Dr.Angela Yu.

In this challenge Module our goal is to try and recreate the Simon Game famously known by many kids where you try and memorize a sequence of patterns that keeps
increasing each round.

<img src="https://user-images.githubusercontent.com/96314847/209585152-32aebc63-c248-4c59-b4d6-e9f46cf8dc5e.png" width="400" height="280">

The purpose of this challenge is to apply javascript logic and Document Object Model manipulation to create a real game.
I will also be using jQuery as a supplement to practice using other libraries instead of plain vanilla js.

<h2>Step 1 - Link JS and JQuery to html </h2>
<ol>
    <li>Link JS using script tag</li>
    <li>Link Jquery using google CDN</li>
</ol>

<h2>Step 2 - Create a new Pattern </h2>
<ol>
    <li>create a function that will return a number between 0-3</li>
    <li>create an array called buttonColors and gamePattern</li>
    <li>create a var named randomChosenColor and add it to the end of the gamePattern</li>
</ol>

<h2>Step 3 - Show the Sequence to the User with Animations and Sounds</h2>
<ol>
    <li>Use jQuery to select button with same id as randomChosenColor</li>
    <li>create an array called buttonColors and gamePattern</li>
    <li>Figure out how to play the sound of the randomChosenColor</li>
</ol>
<p>A problem I had here was that my Jquery wasnt working to fix this I realized I had to place my jquery script tag before the js tag</p>

<h2>Step 4 - Check which button is pressed</h2>
<ol>
    <li>Use jQuery to have an event listener for any button, when clicked save its id(color) as UserChosenColor</li>
    <li>create an array for the User clicked Pattern</li>
    <li>append or push the UserChosenColor to the User Clicked Pattern Array</li>
</ol>

<h2>Step 5 - Add sounds to Button Clicks</h2>
<ol>
    <li>Create a new function called playSound() that takes an input parameter called name</li>
    <li>Take the code we used to play sound and move it to playSound</li>
    <li>Allow the function to work for whether a random color or user color clicks a button</li>
</ol>
<h2>Step 6 Add Animations to User Clicks</h2>
<ol>
    <li>Create a new function called AnimatePress() it should take a single parameter called currentColor.</li>
    <li>consider css style '.pressed' that adds a box shadow and changes background color to grey</li>
    <li>Use JQuery to add the .pressed class to the button that gets clicked inside animatePress()</li>
    <p>Tip: use the Set Timeout function with 100ms to simulate a flash</p>
</ol>

<h2>Step 7 Start the Game and check against game sequence </h2>
<ol>
    <li>Use Jquery to detect when a keyboard key has been pressed, when that happens for the first time call nextSequence()</li>
    <li>create a function called checkAnswer passing in the index of the last answer in the users sequence. The input should be called currentLevel</li>
    <li>write an if statement inside checkAnswer to check if the most recent user answer is the same as the gamepattern. If so log success else log wrong.</li>
    <li>log the userClickedPattern with the gamePattern in Chrome Developer tools to check if your code is preforming as you would expect.</li>
    <li>Call nextsequence after a 1000 miliSec delay and reset the userClickedPattern array for the next level</li>
</ol>

<h2>Step 8: Game Over</h2>
<li> Use the wrong.mp3 file in the sounds folder to play a sound when the user gets the anwser wrong</li>
<li> apply the css style game-over to the body's class and remove it after 200 miliSecs using SetTimeOut function</li>
<li>change h1 title to say something like Game Over and press key to restart</li>

<h2>Step 9: Restart Game</h2>
<li> Create function called startOver()</li>
<li>Call startOver if the User gets the sequence wrong</li>
<li>Inside the function reset level=0, gamePattern=[] and started=false to restart game</li>
<li>Use this function in the checkAnswer function when the gamepattern doesnt match the userPattern</li>

<h3>And just like that you have completed the SimonSays game!</h3>