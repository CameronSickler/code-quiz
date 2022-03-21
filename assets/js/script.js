//Quiz timer & Score variables
var startTime = 30
var time = startTime
var score = 0
var intervalId

//The following variable progresses user through the quiz
var currentQuestionIndex = 0;

//The following variable is the number of choices for each question in the quiz
var choicesPerQuizQuestion = 4;

//The following variable is equal to the number of question in the quiz
// This number should be equal to the number of question + 1 to account for the 
// default value of the first question being 0 in the array. 
var questionsPerQuiz = 2;

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

//Object that holds all questions and their answers in an array. 
var allQuestions = [
    {
        question: "Who would win in a fight?",
        answer: "chicken",
        choices: ["lion", "tiger", "bear", "chicken"],
    },
    {
        question: "What do you want to eat?",
        answer: "pizza",
        choices: ["pizza", "cheese", "donut", "apple"],
    },
    {
        question: "Which color do you like best?",
        answer: "red",
        choices: ["blue", "red", "green", "purple"],
    },
]

// functions

console.log("Welcome to Cameron's quiz generator");

// This function clears any currently displayed elements.
// This function is used by other functions to clear old content 
// prior to creating and displaying new content. 
function clearElements() {

    //replace the h2 Element in HTML with null
    clearH2.innerHTML = '';
    //replace the Ul Element in HTML with null
    clearUl.innerHTML = '';
    //replace the li Element in HTML with null
    clearLi.innerHTML = '';
}

//This function starts a Timer at the start of a quiz. 
function startTimer() {
    console.log("starting timer...")

}

//This function handles starting the quiz. 
function handleStartClick() {
    console.log("start clicked")
    //call functions with perameters
    //call startTimer function
    quizGenerator()
}

//This function handles a choice being clicked during the quiz.
//I call this function with 'event' in the paremeters so that the identity of the eventListener that was clicked
//to run the function is passed along as useful information. With that info, this function can check if the 
// eventListener that was clicked was assigned to a correct or incorrect answer based upon the innerText.
function handleAnswerClick(event) {
    console.log(event.target)
    console.log('ive been clicked')

    // need to discuss logic here for how best to proceed
    if (event.target.innerText === allQuestions[currentQuestionIndex].answer) {
        console.log('correct answer of ' + event.target.innerText + ' was picked');
        score = score + 1;
        currentQuestionIndex = currentQuestionIndex + 1;
    } else {
        console.log('incorrect answer picked of ' + event.target.innerText + ' was picked');
        score = score - 1;
        currentQuestionIndex = currentQuestionIndex + 1;
    }

    if (currentQuestionIndex <= questionsPerQuiz) {
        console.log('user keeps going')
        quizGenerator();
    } else {
        console.log('user has finished all quiz questions')
        return
    }
}

// This function creates elements and populates them with quiz content
function quizGenerator() {
    //clear all pre-existing elements
    clearElements();

    // create an h2 element to display questions or quiz description
    var h2 = document.createElement('h2')
    // set the h2 element I created to look into the allQuestions object, go to the array item that is 
    //equal to currentQuestionIndex at the moment, and display the value of the object property called 
    // 'question' as the innerText element of this newly created h2 element. 
    h2.innerText = allQuestions[currentQuestionIndex].question
    questionsEl.appendChild(h2)

    // create an ul element to house li elements
    var ul = document.createElement('ul')
    answersListEl.appendChild(ul)

    // for loop here is going to generate li elements and populate them with choices. It loops until
    // we have generated as many li elements as available choices in the allQuestions array. Each question
    // has a total of 4 possible choices, so I made a global variable called choicesPerQuizQuestion and 
    // set it to 4.
    for (i = 0; i < choicesPerQuizQuestion; i++) {
        var li = document.createElement('li')
        // sets the li innerText to be the an array item picked from the choices array
        // as determined by the value of 'i' at the time it is called. The particular set of choices
        //comes from the allQuestions object as determined by the value of currentQuestion Index at the 
        //time the it is called. The global variable currentQuestionIndex is set to 0 as default.
        li.innerText = allQuestions[currentQuestionIndex].choices[i];
        li.className = "answer"
        li.addEventListener('click', handleAnswerClick)
        answersListEl.appendChild(li)
    }

}

// This function starts the page the user first sees
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

// calls the startPage function
startPage();