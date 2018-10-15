$(document).ready(function () {

    /* Global game Timers */
    const secondsPerRound = 5;                  // time user is allowed to choose their answer
    const secondsBetweenRounds = 3;             // time user is allowed to view result and rest before next question

    var roundTimerId = 0;                       // round timer id for setInterval/clearInterval
    var roundTime = 0;                          // time left for this question round
    var roundTimerRunning = false;              // flags for the round timer so we don't spawn multiple timers
    var waitTimerId = 0;                        // wait timer id for setInterval/clearInterval
    var waitTime = 0;                           // time left between rounds of questions
    var waitTimerRunning = false;               // flags for the wait timer so we don't spawn multiple timers  

    //---
    // validKey() - Determine if this an acceptable keystroke.
    //            - Only accept r/b/y/g/h/i/s or their capital counterparts
    //---
    function validKey (key) {

        // Regex expression parsing,  accept alphanumerics 'A', 'B', 'C' or 'D' and their lower cases only
        if (!/^[AaBbCcDd]*$/g.test(key)) {
            console.log("validKey() - invalid character [" + key + "]");
            return false;
        }

        return true;
    }

    //------------------------
    // playNextRound() - loads a question from the database and kicks off the round timer
    //                 - called when start button is pressed or another round ends
    //------------------------
    function playNextRound() {

        // load the question
        game.loadQuestion();

        // display the question
        $("#trivia-question").text(questions[game.currentQuestion].question);
        $("#answer-txt-1").text(questions[game.currentQuestion].answers[0]);
        $("#answer-txt-2").text(questions[game.currentQuestion].answers[1]);
        $("#answer-txt-3").text(questions[game.currentQuestion].answers[2]);
        $("#answer-txt-4").text(questions[game.currentQuestion].answers[3]);

        // Put 30 seconds on the clock and start the timer
        startRoundTimer();
    }

    /********************** */
    /* Timer event Handlers */
    /********************** */

    //-------------------------------
    // startRoundTimer() - called when a round starts, used to time the user play during questions
    //                   -  kicked off by playNextRound()
    //-------------------------------
    function startRoundTimer() {
        if (!roundTimerRunning) {
            roundTime = secondsPerRound;
            roundTimerId = setInterval(updateRoundTimer, 1000);
            roundTimerRunning = true;
        }
    }

    function stopRoundTimer() {
        if (roundTimerRunning) {
            clearInterval(roundTimerId);
            roundTimerRunning = false;
        }
    }

    //-----------------------------------
    // updateRoundTimer() - handles the timer event for a round of play
    //                    - if the time expires,  record it as an unanswered event and kick off wait timer for a new round
    //-----------------------------------
    function updateRoundTimer() {

        // Update Game clock
        roundTime--;
        $("#trivia-countdown").text(roundTime);

        // Times Up!
        if (roundTime <= 0) {
            stopRoundTimer();

            // Log unanswered result
            game.unansweredQuestions++;

            $("#trivia-question").text("times up, round over");

            // Start a delay timer and wait between rounds
            startWaitTimer();
        }
    }

    //------------------------
    // startWaitTimer()  - kicks off an interval to vamp until next question
    //------------------------
    function startWaitTimer() {
        if (!waitTimerRunning) {
            waitTime = secondsBetweenRounds;
            waitTimerId = setInterval(updateWaitTimer, 1000);
            waitTimerRunning = true;
        }

    }

    function stopWaitTimer() {
        if (waitTimerRunning) {
            clearInterval(waitTimerId);
            waitTimerRunning = false;
        }
    }

    //---------------------
    // updateWaitTimer() - does nothing to give user a chance to rest and kicks off the next round at the end
    //----------------------
    function updateWaitTimer() {

        // Update Game clock
        waitTime--;

        // Times Up!
        if (waitTime <= 0) {
            stopWaitTimer();

            // Load the next question
            playNextRound();
        }
    }

    /********************** */
    /* Click event Handlers */
    /********************** */

    // Game start click event
    $("#btn-start").on("click", function () {

        // Initialize the game 
        game.resetGame();

        // Hide the start button
        // or use css("display:none") or jQuery.hide()
        $("#start-card").addClass("invisible");

        // Display the questions & answer cards
        // or use css("display:block") or jQuery.hide()
        $("#question-card").removeClass("invisible");
        $("#answer-card").removeClass("invisible");

        playNextRound();
      
    });

    // Trivia question category selector
    $("#trivia-category").on("click", function () {

        // Get the question category selected
        var category = $(this).val();

        // Update the question category here -- see loadQuestion()
    });

    // Trivia grade level category selector
    $("#trivia-grade").on("click", function () {

        // Get the difficulty selected
        var grade = $(this).val();

        // Update the game difficulty level here -- see loadQuestion()
    });

    //------------------------------------------
    // Trivia answer selector handler - does the hard work of adjudicating a round of play if they answered
    //------------------------------------------
    $(".trivia-button").on("click", function () {

        // get their answer
        var answer = $(this).val();

        // validate that it is "A B C or D"
        if (!validKey(answer)) {
            // Ignore the invalid keys
            return;
        }

        // stop the round timer
        stopRoundTimer();

        // convert letter to numeric array index and set game state
        var num = answer.charCodeAt() - 65;
        var result = game.validateAnswer(num);

        // highlight their answer

        // highlight the correct answer 

        // display the round result
        $("#trivia-question").text("You answered " + (result ? "correctly" : "incorrectly"));

        // start the wait timer and pause before next round
        startWaitTimer();
    });

});