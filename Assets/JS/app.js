

 $(document).ready(function () {

	//Trivia Question Array
 var options = [
     {
    question: "Which of the following was a character in A Bug's Life?",
    choice:["Dot", "Fineas", "Nala", "Tiana"],
     answer: 0,
    photo: "assets/images/dot.png"
 }, { 
     question: "Who is Princess Auroa's Prince?",
     choice:["Prince Henry", "Prince Phillip", "Prince Charming", "John Smith"],
     answer: 1,
     photo: "assets/images/phillip.jpg"
 }, {
     question: "Who gave Snow White the poison apple?",
     choice:["The Bad Queen", "The Evil Queen", "The Ugly Lady", "The Old Witch"],
     answer: 1,
     photo: "assets/images/evil.jpg"
 }, {
     question: "Who helped Nemo find his way back to his dad?",
     choice:["Darla", "Gill", "Bruce", "Dory"],
     answer: 3,
     photo: "assets/images/dory.jpeg"
 }, {
     question: "What is the name of the Racoon from Pocahontas?",
     choice:["Nico", "Nix", "Meeko", "Meeks"],
     answer: 2,
     photo: "assets/images/meeko.jpg"
 }, {
     question: "Who tried to kidnap the Little Mermaid?",
     choice:["Ursula", "Cruella De Vil", "Maleficent", "Jafar"],
     answer: 0,
     photo: "assets/images/ursula.png"
 }, {
     question: "What did Cinderella lose after the royal ball?",
     choice:["A necklace", "A glass slipper", "A piece of her dress", "Her Prince"],
     answer: 1,
     photo: "assets/images/cinderella.jpg"
 }];

var correctCount = 0;
var wrongCount = 0;
var unanswerCount = 0;
var timer = 10;
var intervalId;
var userGuess ="";
var running = false;
var qCount = options.length;
var pick;
var index;
var newArray = [];
var holder = [];

$("#reset").hide();

//Start game function 
$("#start").on("click", function () {
		$("#start").hide();
		displayQuestion();
		runTimer();
		for(var i = 0; i < options.length; i++) {
	holder.push(options[i]);
}
	})

//Timer start funtion
function runTimer(){
	if (!running) {
	intervalId = setInterval(decrement, 1000); 
	running = true;
	}
}

//Countdown function
function decrement() {
	$("#timeleft").html("<h3>Time remaining: " + timer + "</h3>");
	timer --;

	//Timer stops once reaching zero 
	if (timer === 0) {
		unanswerCount++;
		stop();
		$("#answerblock").html("<p>Time is up! The correct answer is: " + pick.choice[pick.answer] + "</p>");
		hidepicture();
	}	
}

//Timer Function
function stop() {
	running = false;
	clearInterval(intervalId);
}

function displayQuestion() {
	index = Math.floor(Math.random()*options.length);
	pick = options[index];

	$("#questionblock").html("<h2>" + pick.question + "</h2>");
		for(var i = 0; i < pick.choice.length; i++) {
			var userChoice = $("<div>");
			userChoice.addClass("answerchoice");
			userChoice.html(pick.choice[i]);
			
			userChoice.attr("data-guessvalue", i);
			$("#answerblock").append(userChoice);

		}	
}
//click function to select answer and outcomes
$(".answerchoice").on("click", function () {
	//grab array position from userGuess
	userGuess = parseInt($(this).attr("data-guessvalue"));

	//correct guess or wrong guess outcomes
	if (userGuess === pick.answer) {
		stop();
		correctCount++;
		userGuess="";
		$("#answerblock").html("<p>Correct!</p>");
		hidepicture();

	} else {
		stop();
		wrongCount++;
		userGuess="";
		$("#answerblock").html("<p>Wrong! The correct answer is: " + pick.choice[pick.answer] + "</p>");
		hidepicture();
	}
})

function hidepicture () {
	$("#answerblock").append("<img src=" + pick.photo + ">");
	newArray.push(pick);
	options.splice(index,1);

	var hidpic = setTimeout(function() {
		$("#answerblock").empty();
		timer= 10;

	//run the score screen if all questions answered
	if ((wrongCount + correctCount + unanswerCount) === qCount) {
		$("#questionblock").empty();
		$("#questionblock").html("<h3>Game Over!  Here's how you did: </h3>");
		$("#answerblock").append("<h4> Correct: " + correctCount + "</h4>" );
		$("#answerblock").append("<h4> Incorrect: " + wrongCount + "</h4>" );
		$("#answerblock").append("<h4> Unanswered: " + unanswerCount + "</h4>" );
		$("#reset").show();
		correctCount = 0;
		wrongCount = 0;
		unanswerCount = 0;

	} else {
		runTimer();
		displayQuestion();

	}
	}, 3000);

}

$("#reset").on("click", function() {
	$("#reset").hide();
	$("#answerblock").empty();
	$("#questionblock").empty();
	for(var i = 0; i < holder.length; i++) {
		options.push(holder[i]);
	}
	runTimer();
	displayQuestion();

})

});


