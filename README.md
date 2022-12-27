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
