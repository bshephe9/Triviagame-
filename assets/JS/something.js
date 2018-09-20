function postQuestion(n) {

    if (currentQuestionIndex < questions.length) {
        $('#question').remove();
        $('.pickAnswer').remove();
        countDown();
        $('#questionContainer').append("<div id='question'>" + questions[n].q + "</div>");
        for (var i = 0; i < questions[n].c.length; i++) {
            var newDiv = $("<div>");
            newDiv.addClass("pickAnswer").attr("indexnum", i).text(questions[n].c[i]);
            $('#choices').append(newDiv);
        }


    } else {
        resetGame(); // the conditional successfully loops the game
    }

    $(".pickAnswer").on("click", function() {
        var userChoice = $(this).attr('indexnum'); // stored as a string not a number
        userChoice = parseInt(userChoice);

        // checks if user is correct and will tally accordingly
        if (userChoice === questions[currentQuestionIndex].answer) {
            correctCounter++;
            currentQuestionIndex++
            randomCongrats();

        } else {
            incorrectCounter++;
            currentQuestionIndex++;

        }
        postQuestion(currentQuestionIndex);
    })
}