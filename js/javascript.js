//timer
var timeEl = document.querySelector("#time");
timeEl.textContent = "60";
timeEl.setAttribute("style", "font-size: 32px")

var timeLeft = 60;

function countdown() {


    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        //
        // YOUR CODE HERE
        timeLeft--;
        timeEl.textContent = timeLeft;


        if (timeLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timeInterval);
            // Calls function to create and append image
        }
        //
    }, 1000);
}






// question body
var startButton = document.querySelector(".control");
var question = document.querySelector("#question");
var mainContainer = document.querySelector(".container");
var questionContainer = document.querySelector("#question-container");
var buttons = document.querySelectorAll(".btn")
var answerButton = document.querySelector("#answer-btns");
var feedback = document.querySelector("#feedback");
var formEl = document.querySelector("#form")
var scoreEl = document.querySelector("#score")
var submitEl = document.querySelector("#submit")
var initialNameEl = document.querySelector("#name")
var index = 0;

var quiz = [
    {
        questions: "What does CSS stand for?",
        answers: ["Cascade style sheets", "Color and style sheets", "Cascading style sheets", "None of the above"],
        correct: "Cascading style sheets",
    },
    {
        questions: "The HTML attribute used to define the inline styles is ?",
        answers: ["style", "id", "class", "None of the above"],
        correct: "style"
    },
    {
        questions: "who is the coolest dude ?",
        answers: ["me", "you", "the dude", "None of the above"],
        correct: "me"
    }
]


//once the start button is clicked, I want it to be disappeared and next question show up.
startButton.addEventListener("click", start)

function start() {
    startButton.classList.add("hide");
    countdown();
    showFirstQuestion();
    console.log(startButton);
}

//this will make the question and answer show up.
function showFirstQuestion() {
    question.textContent = quiz[index].questions;
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].textContent = quiz[index].answers[i];
    }
    questionContainer.removeAttribute("class");
};

//the question's textConetnt will be next question and the button's answer will be next answers ------------------------------------???????????????????????/
function goToNextQuestion() {
    if (index < quiz.length - 1) {
        index++;
    } else {
        viewHighScore()
    }

    question.textContent = quiz[index].questions;
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].textContent = quiz[index].answers[i];

    }
}

//seletct correct answer: when the option choise is clicked, it will compare with the correct answer and turn green if correct.
answerButton.addEventListener("click", function (event) {

    var element = event.target;
    var makeButtonGreen = function () {
        element.style.backgroundColor = "green"
    }
    var makeButtonWhite = function () {
        element.style.backgroundColor = "white"
    }
    var makeButtonRed = function () {
        element.style.backgroundColor = "red"
    }

    if (element.textContent === quiz[index].correct) {
        //console.log(element.textContent)
        //console.log(quiz[index].correct)
        feedback.textContent = "Correct"
        makeButtonGreen()
        setTimeout(makeButtonWhite, 1000)
        setTimeout(goToNextQuestion, 1000)
    } else {
        timeLeft = timeLeft - 10;
        feedback.textContent = "Wrong"
        makeButtonRed()
        setTimeout(makeButtonWhite, 1000)
        setTimeout(goToNextQuestion, 1000)

    }

});


//if index is >= quiz.length, disappear. move to next step
function viewHighScore() {
    mainContainer.classList.add("hide")
    formEl.removeAttribute("class")
    scoreEl.innerHTML = "Your Score is: " + timeLeft;
}

//form that will ask user's name. on the form, the score will show (time left)


//on submit,  the form will disapear. user data will be stored into localstorage.

formEl.addEventListener("submit", function (event) {
    event.preventDefault();


    //Stores User initials to local storage
    var newUserInfo = {
        Initial: initialNameEl.value,
        score: timeLeft
    }
    var scoresList = [];

    if (localStorage.scoresList) {
        var oldUsers = JSON.parse(localStorage.getItem("scoresList"));
        // list = [{ Initial: "mmm", score: 32}]
        console.log(oldUsers)
        for(var i=0; i<oldUsers.length;i++){
            scoresList.push(oldUsers[i])
        }
    }
    scoresList.push(newUserInfo);

    localStorage.setItem("scoresList", JSON.stringify(scoresList));

    //Hides the form
    formEl.classList.add("hide")
    location.href = "./display.html"

});


