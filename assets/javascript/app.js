$(document).ready(function () {

    /* Game Timers */
    const secondsPerRound = 60;
    const secondsBetweenRounds = 10;
    var roundTimerId = 0;
    var waitTimerId = 0;
    var waitTime = 0;

    /* Click event Handlers */

    // Game start click event
    $("#btn-start").on("click", function () {

        // Initialize the game 
        game.resetGame();

        // Load the first question

        // Hide the start button
        // or use css("display:none") or jQuery.hide()
        $("#start-card").addClass("invisible");

        // Display the questions & answer cards
        // or use css("display:block") or jQuery.hide()
        $("#question-card").removeClass("invisible");
        $("#answer-card").removeClass("invisible");

        // Start the wait timer
        //  MIKE -  START HERE IN THE MORNING!!!!  <-----------------------
//        if (!clockRunning) {
            waitTime = secondsBetweenRounds;
            waitTimerId = setInterval(updateDisplayTimer, 1000);
            // clockRunning = true;
  //        }
      
    });

    function updateDisplayTimer() {
        $("#trivia-countdown").text(waitTime);
        waitTime--;
    }

    // Trivia question category selector
    $("#trivia-category").on("click", function () {
        var category = $(this).val();
    });

    // Trivia grade level category selector
    $("#trivia-grade").on("click", function () {
        var grade = $(this).val();
    });

    // Trivia answer selector
    $(".trivia-button").on("click", function () {

        var answer = $(this).val();

    });

});