// Initialize Firebase
var config = {
    apiKey: "AIzaSyDAcoilKeLvn6aC9jTIeZdJxRcZfyyS8h0",
    authDomain: "train-schedule-3e718.firebaseapp.com",
    databaseURL: "https://train-schedule-3e718.firebaseio.com",
    projectId: "train-schedule-3e718",
    storageBucket: "train-schedule-3e718.appspot.com",
    messagingSenderId: "501768322690"
};

firebase.initializeApp(config);

var database = firebase.database();
// Button click function
$("#submit").on("click", function(event) {
    event.preventDefault();

    // Grabs user input
    var trainName = $("#train_name").val().trim();
    var destination = $("#destination").val().trim();
    var firstTime = $("#first_train_time").val().trim();
    var frequency = $("#frequency").val().trim();


    // Creates Object with user input variables
    var newTrain = {
        trainName: trainName,
        destination: destination,
        firstTime: firstTime,
        frequency: frequency
    };

    database.ref().push(newTrain);

    $("#train_name").val("");
    $("#destination").val("");
    $("#first_train_time").val("");
    $("#frequency").val("");

    // Prevents moving to new page
    return false;

});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var newTrainName = childSnapshot.val().trainName;
  var newDestination = childSnapshot.val().destination;
  var newFirstTime = childSnapshot.val().firstTime;
  var newFrequency = childSnapshot.val().frequency;

  // Add each train's data into the table
  $("table > tbody").append("<tr><td>" + newTrainName + "</td><td>" + newDestination + "</td><td>" +
  newFrequency + "</td><td>" + something + "</td><td>" + something + "</td></tr>");
});
