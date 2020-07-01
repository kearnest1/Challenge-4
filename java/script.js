//First page

var welcome = document.querySelector("#welcome-id")
var startButton = document.querySelector("#start-quiz")
var questioncontainerEl = document.querySelector("#question-container")
var currentQuestionIndex = 0;
var timerEl = document.querySelector("#timer")
var questiontextEl = document.querySelector("#question-text")
var nextbuttonEl = document.querySelector("#next-button")

//start button
startButton.addEventListener("click",startQuiz);

//next button
nextbuttonEl.addEventListener("click",nextbutton);

var seconds= 60;
timerEl.innerHTML = seconds

setInterval(timerfunction, 1000);
// timer
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

function startQuiz (){
    startButton.classList.add("hide");
    questioncontainerEl.classList.remove("hide");
renderQuestion();
}




var q = questions[currentQuestionIndex];
 var renderQuestion = function (){
     questiontextEl.innerHTML = "<h1 id='question-text'>" + q.question + "</h1>";
 }

 var aAnswerEl = document.createElement ("button");
 aAnswerEl.className = "btn";
 aAnswerEl.style = "margin: 20px"
 aAnswerEl.innerHTML = "<h3 id= answers>" + q.answers.a+"</h3>";
 questioncontainerEl.appendChild(aAnswerEl);

 var bAnswerEl = document.createElement ("button");
 bAnswerEl.className = "btn";
 bAnswerEl.style = "margin: 20px"
 bAnswerEl.innerHTML = "<h3 id= answers>" + q.answers.b+"</h3>";
 questioncontainerEl.appendChild(bAnswerEl);

 var cAnswerEl = document.createElement ("button");
 cAnswerEl.className = "btn";
 cAnswerEl.style = "margin: 20px"
 cAnswerEl.innerHTML = "<h3 id= answers>" + q.answers.c+"</h3>";
 questioncontainerEl.appendChild(cAnswerEl);

 var dAnswerEl = document.createElement ("button");
 dAnswerEl.className = "btn";
 dAnswerEl.style = "margin: 20px"
 dAnswerEl.innerHTML = "<h3 id= answers>" + q.answers.d+"</h3>";
 questioncontainerEl.appendChild(dAnswerEl);



 function nextbutton (){
    currentQuestionIndex++
    q = questions[currentQuestionIndex]
    questiontextEl.innerHTML = "<h1 id='question-text'>" + q.question + "</h1>";
    aAnswerEl.innerHTML = "<h3 id= answers>" + q.answers.a+"</h3>";  
    bAnswerEl.innerHTML = "<h3 id= answers>" + q.answers.b+"</h3>";
    cAnswerEl.innerHTML = "<h3 id= answers>" + q.answers.c+"</h3>";
    dAnswerEl.innerHTML = "<h3 id= answers>" + q.answers.d+"</h3>";
}

