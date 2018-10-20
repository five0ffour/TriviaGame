# TriviaGame

## Don't Know Much About History Trivia Game

This is a classic trivia game that is a kissing cousin of "Are you Smarter than a Fifth Grader?" in a school-ish looking theme.  It offers the player a series of quesions of varying school subjects and difficulties.  Current game includes History, English, Geography, Science and Mathematics. 

The features of the game there are ten questions per game.  Each quesiton is presented one at a time.  The player has 60 seconds to choose an answer or it will time out (and score it as a miss).  After each guess, the game pops up a relevant picture showing the correct answer and result of their guess.  

Once the game is over it gives a final grade score.  The player has an option of restarting,  but all of their previous scores will be erased.

## Getting Started
To get started,  copy the program to a clean directory and run "index.html" in your browser.   The program is ready to start automatically.  From there,  simply use your mouse to enter your guesses each round.   The game will automatically restart each question after a win or loss and offer a game restart button at the end.

## Prerequisites
A modern browser and an internet connection.   Chrome works best, but others should be fine too.
A modern IDE - it was developed using Visual Studio Code, but any text editor would work, including notepad.
GitHub 
GitBash installed locally

## Installing
1.  Find a Locate an empty directory on your hard drive
2.  Open a bash terminal in that directory
3.  Clone the unit-4-game repo down using  Git   
         "git clone https://github.com/five0ffour/TriviaGame.git"
4.  Open index.html in your favorite browser
        It should display the game board and prompt you for an entry

## Developer notes
index.html:  main entry point and user interface  
app.js:  the main mouse click and timer events and UI updates     
game.js:   the game state, rules handling and solution logic            

Overall the game is very straightforward.  The only special feature is to watch how the timers interact.  They will supress user input if they'e already made a guess.

## Built With
jQuery 3.3.1 - JavaScript library  

## Authors
Michael Galarneau - Initial work - Five0fFour

## Acknowledgements
reset css: http://meyerweb.com/eric/tools/css/reset/  
wallpaper:  https://www.deviantart.com/blueamnesiac/art/Chalk-Board-Texture-270753502  
images:  https://www.wikipedia.org  
title font: https://www.dafont.com/dk-crayon-crumble.font  
paper font: https://fonts.google.com/specimen/Schoolbell  
paper effect: https://www.techrepublic.com/blog/web-designer/how-to-get-the-ruled-paper-background-effect-with-css3/  
favicon: https://www.freefavicon.com/freefavicons/icons/iconinfo/pencil-icon-152-190958.html  
questions:  https://wehavekids.com/education/are-you-smarter-than-a-fifth-grader-questions  
