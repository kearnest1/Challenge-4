//First page

var welcome = document.querySelector("Welcome")
var startButton = document.querySelector("start-quiz")
var questioncontainerEl = document.querySelector("Questions")


//start button
startButton.addEventListener("click".startQuiz);


// timer
var seconds=60;
var timer;
function timerfunction() {
    if (seconds <60){ 
        document.getElementById("timer").innerHTML = seconds;
    }
    if (seconds >0 ) {
        seconds--
    }
    else {
        clearInterval(timer);
        alert("Time is Up")
    }
}

//array of questions

var questions = [
    {
      question: "What file is correct for JavaScript?",
      answers: {
          a: "index.html",
          b: "script.java",
          c: "script.js",
          d: "style.css"
    },
    correctAnswer: "c"
   },
   {
       question: "What are the main elements of the world wide web (WWWW)?",
       answers: {
           a: "HTML,CSS,JS",
           b: "CSS,JS",
           c: "HTML,CSS",
           d: "HTML,JS"
       },
       correctAnswer: "a"
   },
   {
       question: "What year was JS released?",
       answers: {
           a: "1946",
           b: "1992",
           c: "1996",
           d: "2001"
       },
       correctAnswer: "c"
   },
   {
       question: "What is JavaScript used for?",
       answers: {
           a: "To give the page background color.",
           b: "A place to hold the HTML.",
           c: "Makes the webpage load faster.",
           d: "Gives the web page interactive elements."
       },
       correctAnswer: "D"
   },
   {
       question: "Who created JavaScript?",
       answers: {
           a: "Tim Berners-Lee",
           b: "Hakon Wium Lie",
           c: "Brendan Eich",
           d: "Brenden Eich"
       },
       correctAnswer: "c"
   },
]

var startQuiz = function (){
    startButton.classList.add("hide");
    questioncontainerEl.classList.remove("hide");
renderQuestion();
}

var renderQuestion = function (){

}



