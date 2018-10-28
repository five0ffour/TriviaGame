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

database.ref().on("child_added", function (childSnapshot) {

    console.log("--- database child event ----");
    console.log(childSnapshot.val());
    console.log("------------------------ ----");

    // Save the new question into our master questions array.
    var q = childSnapshot.val();
    questions.push(q);
});