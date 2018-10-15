var game = {
    totalQuestions : 10,           // number of questions in a game

    correctAnswers : 0,             // how many they got right
    incorrectAnswers : 0,           // how many they got wrong
    unansweredQuestions: 0,         // how many they let timeout
    
    questionsLeft : this.totalQuestions, // number of questions left to ask in the current game
    currentQuestion : 0,            // current questions on the board
    questionsAsked : [],            // index of the questions already asked (to avoid duplicates)

    categoryChoice: 0,              // category to use to source questions 
    gradeLevelChoice: 0,            // difficulty of questions to use

    // ---------------
    // resetGame()
    // ---------------
    resetGame : function () {
        this.correctAnswer = 0;
        this.incorrectAnswer = 0;
        this.questionsLeft = this.totalQuestions;
        this.currentQuestion = 0;
        this.questionsAsked = [];

        // clear the board
        $("#trivia-question, #answer-txt-1, #answer-txt-2, #answer-txt-2, #answer-txt-4").empty();
      }
}