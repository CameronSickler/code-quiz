var startTime = 30
var time = startTime
var score = 0
var intervalId

var quizDescription = "This is a Quiz. Good Luck."
var quizBtn = "Click to Begin"

var countdownEl = document.getElementById('countdown')
var scoreEl = document.getElementById('score')

var questionsEl = document.getElementById('questions')
var answersEl = document.getElementById('answers')
var answerEl = document.getElementById('answer')

var clearH2 = document.getElementById("questions");
var clearUl = document.getElementById("answers");
var clearLi = document.getElementById("answer");

var allQuestions = [Q1, Q2, Q3]
var allAnswers = [Q1A, Q2A, Q3A]

var Q1 = "Who would win in a fight?"
var Q1A = ["lion", "tiger", "bear", "chicken"]

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

function handleStartClick() {
    console.log("get clicked")
    //call functions with perameters
    startQuiz(Q1, Q1A)
}

function startQuiz(allQuestions, allAnswers) {
    //clear all pre-existing elements
    clearElements();

    console.log('quiz starts here')

    // for (i = 0; i = allQuestions[i]; i++) {
    //create an h2 heading that holds quiz question
    var h2 = document.createElement('h2')
    h2.innerText = allQuestions
    questionsEl.appendChild(h2)
    // }
    for (i = 0; i < allAnswers.length; i++) {
        var ul = document.createElement('ul')
        ul.className = "answer"
        ul.innerText = allAnswers[i]
        questionsEl.appendChild(ul)
    }
}


function startPage() {
    //clear pre-exsting elements
    // clearElements();

    console.log("creating start page...")

    //create an h2 heading that displays quiz description
    var h2 = document.createElement('h2')
    h2.innerText = quizDescription
    questionsEl.appendChild(h2)

    // create an ul element to house li elements
    var ul = document.createElement('ul')
    answersEl.appendChild(ul)

    // create li element to act as a button
    var li = document.createElement('li')
    li.innerText = quizBtn
    li.className = "answer"
    li.addEventListener('click', handleStartClick)
    answerEl.appendChild(li)
}

function startTimer() {
    console.log("starting timer...")
}

startPage();