var startTime = 30
var time = startTime
var score = 0
var intervalId

var allQuestions = [Q1, Q2]

var Q1 = "Who would win in a fight?"
var Q1Answers = ["lion", "tiger", "bear", "chicken"]

var Q2 = "What do you want to eat?"
var Q2Answers = ["pizza", "hotdog", "salad", "apple"]


var questionsEl = document.getElementById('questions')
var answersEl = document.getElementById('answers')
var scoreEl = document.getElementById('score')
var countdownEl = document.getElementById('countdown')





function createQuestions() {
    for (i = 0; i < 1; i++) {
        var h2 = document.createElement('h2')
        h2.innerText = Q1
        h2.classList.add('question')
        questionsEl.appendChild(h2)
        var li = document.createElement('li')
        li.innerText = Q1Answers
        li.classList.add('answer')
        // li.addEventListener('click', handleAnswerClick)
        answersEl.appendChild(li)
    }
}





function startQuiz() {
    createQuestions()
}

startQuiz()