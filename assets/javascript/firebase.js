// Global Methods() - Initialize Firebase remote database
var config = {
    apiKey: "AIzaSyBDKBI8NuMzPQHBHrzMerN3uHCDw7sjH1U",
    authDomain: "triviagame-f9503.firebaseapp.com",
    databaseURL: "https://triviagame-f9503.firebaseio.com",
    projectId: "triviagame-f9503",
    storageBucket: "triviagame-f9503.appspot.com",
    messagingSenderId: "1062823791252"
};

firebase.initializeApp(config);
var database = firebase.database();

// publishQuestionsToRemoteDatabase() - takes the static questions array and writes it out to the remote database
function publishQuestionsToRemoteDatabase() {

    // Overwrite previous content in the database
    database.ref().set(questionArchive);
    console.log("Published " + questionArchive.length + " questions to remote database");

}

// on database value update() - refresh questions array with database updates
database.ref().on("value", function (snapshot) {

    // overwrite our question array with the firebase database content
    var count = 0;
    if (snapshot.exists()) {
        questions = snapshot.val();
        count = questions.length;
    }

    console.log("database event() - loaded " + count + " questions from firebase")
});