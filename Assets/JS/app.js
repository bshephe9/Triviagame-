 //This is the array of questions the player will be answering//
 var triviaQuestions = [{
     question: "Which of the following was a character in A Bug's Life?",
     answerList:["Dot", "Fineas", "Nala", "Tiana"],
     answer: 0
 }, {
     question: "Who is Princess Auroa's Prince?",
     answerList:["Prince Henry", "Prince Phillip", "Prince Charming", "John Smith"],
     answer: 1
 }, {
     question: "Who gave Snow White the poison apple?",
     answerList:["The Bad Queen", "The Evil Witch", "The Evil Queen", "The Wicked Queen"],
     answer: 2
 }, {
     question: "Who helped Nemo find his way back to his dad?",
     answerList:["Darla", "Gill", "Bruce", "Dory"],
     answer: 3
 }, {
     question: "What is the name of the Racoon from Pocahontas?",
     answerList:["Nico", "Nix", "Meeko", "Meeks"],
     answer: 2
 }, {
     question: "Who tried to kidnap the Little Mermaid?",
     answerList:["Ursula, Cruella De Vil", "Maleficent", "Jafar"],
     answer: 0
 }, {
     question: "What did Cinderella lose after the royal ball?",
     answerList:["A necklace", "A glass slipper", "A piece of her dress", "Her Prince"],
     answer: 1
 }, {
     question: "What is written on the bottom of Woody's boot?",
     answerList:["Sandy", "Danny", "Andy", "Manny"],
     answer: 2
 }, {
     question: "What is the name of the Racoon from Pocahontas?",
     answerList:["Nico", "Nix", "Meeko", "Meeks"],
     answer: 2
 }, {
     question: "Who does Cinderella live with?",
     answerList:["Step Mother", "Dad", "Mother", "Twin Sister"],
     answer: 0
 }, {
     question: "What country does Nemo go to in Finding Nemo?",
     answerList:["Africa", "Greece", "Australia","Spain"],
     answer : 2
 } , {
     question: "What does the crocodile swallow in Peter Pan?",
     answerList:["Peter Pan", "Tinker Bell", "A Clock", "Captain Hook"],
     answer: 2
 }, {
     question: "Which Disney movie features the song Two Worlds",
     answerList:["Aladin", "Tarzan", "A Bug's Life","Beauty and the Beast"],
     answer: 2
 }]

 //Array of pictures that will appear after the solution of each question is displayed//
var picArray = ['question1', 'question 2','question 3', 'question 4', 'question 5', 'question 6', 'questions 7', 'question 8','question 9', 'question 10', 'question 11', 'question 12', 'question 13']; 

var currentQuestion; var correctAnswer; var incorrectAnswer; var notAnswered; var seconds; var time; var answered; var playerSelect; 
var alerts = { 
    correct: "That's right!",
    incorrect: "You're wrong, try again!",
    endTime: "Out of time!",
    end: "Game Over. Let's see your results!"
}

$("#startButton").on('click',function(){
    $(this).hide(); 
    startGame(); 
}); 

$("#againButton").on('click',function(){
    $(this).hide(); 
    startGame(); 
});

function startGame(){ 
    $("#lastMessage").empty();
    $("#correctAnswers").empty();
    $("#incorrectAnswers").empty();
    $("#unanswered").empty();
    currentQuestion = 0; 
    correctAnswer = 0; 
    incorrectAnswer = 0; 
    unanswered = 0;
    newQuestion();
}

function newQuestion() {
    $("#message").empty();
    $("#correctedAnswer").empty();
    $("#pic").empty();
    answered = true; 
}

//sets up new questions and answerList
$("currentQuestion").html("Question #" + (currentQuestion+1)+"/"+triviaQuestions.length); 
$(".question").html("<h2>"+triviaQuestions[currentQuestion].question + "</h2>");
for(var i = 0; i < 4; i++) { 
    var choices = $('div'); 
    choices.text(triviaQuestions[currentQuestion].answerList[i]); 
    choices.attr({"data-idex": i}); 
    choices.addClass("thischoice"); 
    $(".answerList").append(choices); 
}
 countdown(); 
 $(".thisChoice").on("click", function() { 
     userSelect = $(this).data("index"); 
     clearInterval(time); 
     answerPage(); 
 }); 

}

function

var time;
var seconds;
function countdown() {
    seconds= 120;
    $("#timeLeft").text("Time Left:" + seconds);
    time = setInterval(showCountdown, 1000);
}

function showCountdown() {
    seconds--;
    $('#timeLeft').text('Time Left:' + seconds);
    if (seconds < 1) {
        clearInterval(time);
    }
}

// function scoreboard() {

// }
countdown();