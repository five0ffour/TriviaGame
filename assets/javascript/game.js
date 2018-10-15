var game = {
  numQuestionsPerGame: 10,  // number of questions in a game

  correctAnswers: 0,        // how many they got right
  incorrectAnswers: 0,      // how many they got wrong
  unansweredQuestions: 0,   // how many they let timeout

  questionsLeft: this.numQuestionsPerGame, // number of questions left to ask in the current game
  currentQuestion: 0,       // current questions on the board
  questionsAsked: [],       // index of the questions already asked (to avoid duplicates)

  categoryChoice: 0,        // category to use to source questions 
  gradeLevelChoice: 0,      // difficulty of questions to use

  answerGiven : false,      // don't allow a duplicate answer once we have a guess
  roundResult : false,      // did they get the answer right (true) or wrong (false)
  
  // ---------------
  // resetGame() -- clear the board and to get ready for a new game
  // ---------------
  resetGame: function () {
    this.correctAnswer = 0;
    this.incorrectAnswer = 0;
    this.questionsLeft = this.numQuestionsPerGame;
    this.currentQuestion = 0;
    this.questionsAsked = [];
    this.answerGiven = false;
    this.roundResult = false;

    // clear the board -- this belongs in the display handler, not in this model object
    $("#trivia-question, #answer-txt-1, #answer-txt-2, #answer-txt-2, #answer-txt-4").empty();
  },

  //-------------------
  // generateRandomNum() - randomly generates a number within the specified range
  //-------------------
  generateRandomNum: function (low, high) {
    var num = (Math.floor(Math.random() * (high - low + 1) + low));
    // console.log("game.generateRandomNum() - The randomly selected num between " + low + " and " + high + " is: \"" + num + "\"");
    return num;
  },


  // loadQuestions - selects a random question and answers from the database
  //               - uses the category selector to choose a topic
  //               - uses the grade level to choose the difficulty
  loadQuestion: function () {

    var found = false; // flag if we found a unique quesiton
    var num = 0; // index into questions array
    var count = 0; // counter used to find a unique question
    var maxNum = questions.length * 2; // number of attempts we'll allow ourselves to find a unique question

    // find a unique question, one that hasn't appeared in this game
    // put a max check in to keep us away from an infinite loop
    while (!found & count <= maxNum) {
      num = this.generateRandomNum(0, questions.length - 1);

      if (!this.questionsAsked.includes(num)) {
        found = true;
      }

      count++;
    }

    // Save the quesion as the current one for this round
    // Hold a copy in an array buffer so we don't choose it again
    this.currentQuestion = num;
    this.questionsAsked.push(num);

    console.log("game.loadQuestion() - random question selected is " + this.currentQuestion);
  },

  //-------------------------
  // validateAnswer() - process the user's guess to determine a correct/incorrect
  //                  - updates the appropriate game counter
  //                  - returns true if the answer was correct, false if otherwise
  //-------------------------
  validateAnswer: function (answer) {

    // validate to be numeric to index the answer arrays
    if ((answer < 0) ||
      (answer >= questions[this.currentQuestion].answers.length)) {
      console.log("game.validateAnswer() -- answer input out of range");
      return false;
    }

    // check answer against questions database for the current question
    if (answer === this.getCorrectAnswer()) {
      console.log("game.validateAnswer() -- they chose... wisely with " + answer);
      this.correctAnswers++;
      this.roundResult = true;
    } else {
      console.log("game.validateAnswer() -- they chose... poorly with " + answer + " instead of " + this.getCorrectAnswer());
      this.incorrectAnswers++
      this.roundResult = false;
    }

    return this.roundResult;
  },

  //-------------------------
  // getCorrectAnswer() - utilty function to lookup correct answer from the answer database
  //-------------------------
  getCorrectAnswer : function() {
    return questions[this.currentQuestion].answer;
  }
}