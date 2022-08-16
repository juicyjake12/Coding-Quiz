const playbtn = document.getElementById("playbtn");
const HighScoresbtn = document.getElementById("HighScoresbtn");
const questionContainer = document.getElementById("question-container")




var Questions = [
    "in an infinite loop, a loop statment never ends because its conditional expression is never truthy",
    "JavaScript can be used to delete persistent cookies in a program",
    " 'var' is used to set a variable",
    "getElementbyId is used to get a class from the html",
    "classList.add creates a id",
    "An Array can store multiple values using a special syntax",
    //dont forget quizover
];

var questionCounter = 1;
var finalScore = 6;

playbtn.addEventListener("click", startgame);
playbtn.addEventListener("click", createbutton)


function startgame() {
    console.log("started");
    setnextQuestion();
}
function setnextQuestion() {
    document.getElementById("question-container")
     $("#question-container").html(Questions[0]);
    questionCounter++

}





