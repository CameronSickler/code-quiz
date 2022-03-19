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

var allQuestions = [Q1, Q2, Q3]

var Q1 = "Who would win in a fight?"
var Q1Answers = ["lion", "tiger", "bear", "chicken"]

var Q2 = "What do you want to eat?"
var Q2Answers = ["pizza", "hotdog", "salad", "apple"]

var Q3 = "Which color do you like best?"
var Q3Answers = ["red", "blue", "green", "pink"]

function handleStartClick() {
    console.log("get clicked")
}

function createStartPage() {
    console.log("creating start page...")

    var h2 = document.createElement('h2')
    h2.innerText = quizDescription
    questionsEl.appendChild(h2)

    var ul = document.createElement('ul')
    answersEl.appendChild(ul)

    var li = document.createElement('li')
    li.innerText = quizBtn
    li.className = "answer"
    li.addEventListener('click', handleStartClick)
    answerEl.appendChild(li)
}

function startTimer() {
    console.log("starting timer...")

}


function startQuiz() {
    console.log("quiz starting...")
    createStartPage()
    startTimer()
}

startQuiz();