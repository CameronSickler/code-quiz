//Quiz timer & Score variables
var startTime = 30
var time = startTime
var score = 0
var intervalId

// timer is meant to start at the beginning of quiz and continue to run until 0, which stops the quiz.
// the score is meant to add/subtract based upon correct and incorrect answers.

//Start page Quiz variables
var quizDescription = "This is a Quiz. Good Luck."
var quizBtn = "Click to Begin"

//Correct! and Wrong! variables
var countdownEl = document.getElementById('countdown')
var scoreEl = document.getElementById('score')

//Quiz questions and answers variables
var questionsEl = document.getElementById('questions')
var answersListEl = document.getElementById('answerslist')
var answerEl = document.getElementById('answer')
var confirmEl = document.getElementById('confirmation')

//Variables used in the clearElements Function
var clearH2 = document.getElementById("questions");
var clearUl = document.getElementById("answerslist");
var clearLi = document.getElementById("answer");
var clearConf = document.getElementById("confirmation");

//All Q&As set into arrays
var currentQuestionIndex = 0;
var allQuestions = [
    {
        question: "Who would win in a fight?",
        answer: "chicken",
        choices: ["lion", "tiger", "bear", "chicken"],
    },
    {
        // keep going for remaining Question content

    }
]

//Each question set as a variable and arrays of answers
var Q1A = ["lion", "tiger", "bear", "chicken"]
var Q1Correct = "chicken"

var Q2 = "What do you want to eat?"
var Q2A = ["pizza", "hotdog", "salad", "apple"]

var Q3 = "Which color do you like best?"
var Q3A = ["red", "blue", "green", "pink"]


// functions

function clearElements() {

    //replace the h2 Element in HTML with null
    clearH2.innerHTML = '';

    //replace the Ul Element in HTML with null
    clearUl.innerHTML = '';

    //replace the li Element in HTML with null
    clearLi.innerHTML = '';
}

function startTimer() {
    console.log("starting timer...")
}

function handleStartClick() {
    console.log("start clicked")
    //call functions with perameters
    startQuiz()
}

function handleAnswerClick() {

    console.log('ive been clicked')
    //need to discuss logic here for how best to proceed
}

function startQuiz() {
    //clear all pre-existing elements
    clearElements();

    console.log('quiz starts here')

    // for (i = 0; i = allQuestions[i]; i++) {
    //create an h2 heading that holds quiz question
    var h2 = document.createElement('h2')
    // h2.innerText = allQuestions
    h2.innerText = allQuestions[currentQuestionIndex].question
    questionsEl.appendChild(h2)
    // }

    // create an ul element to house li elements
    var ul = document.createElement('ul')
    answersListEl.appendChild(ul)

    console.log('created Ul success')
    console.log(ul)

    // make the conditional statement dynamic later
    for (i = 0; i < 4; i++) {
        var li = document.createElement('li')
        li.innerText = allQuestions[currentQuestionIndex].choices[i];
        li.className = "answer"
        li.addEventListener('click', handleAnswerClick)
        answersListEl.appendChild(li)
        console.log(li)
    }

}

function startPage() {
    //clear pre-exsting elements
    clearElements();

    console.log("creating start page...")

    //create an h2 heading that displays quiz description
    var h2 = document.createElement('h2')
    h2.innerText = quizDescription
    questionsEl.appendChild(h2)

    // create an ul element to house li elements
    var ul = document.createElement('ul')
    answersListEl.appendChild(ul)

    // create li element to act as a button
    var li = document.createElement('li')
    li.innerText = quizBtn
    li.className = "answer"
    li.addEventListener('click', handleStartClick)
    answersListEl.appendChild(li)
}



startPage();