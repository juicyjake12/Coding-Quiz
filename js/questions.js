const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questioncounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Which of the following keywords is used to define a variable in Javascript? ",
        choice1: "var",
        choice2: "let",
        choice3: "Both A and B",
        choice4: "None of the above",
        answer: "1",
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        choice1: "GetElementbyid()",
        choice2: "getElementsbyClassName()",
        choice3: "Both A and B",
        choice4: "None of the above",
        answer: "3",
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        choice1: "document.write()",
        choice2: "console.log()",
        choice3: "window.alert",
        choice4: "All of the above",
        answer: "4",
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        choice1: "const",
        choice2: "var",
        choice3: "let",
        choice4: "constant",
        answer: "1",
    },
    {
        question: "Which function is used to serialize an object into a JSON string in Javascript?",
        choice1: "strigify()",
        choice2: "parse()",
        choice3: "convert()",
        choice4: "None of the above",
        answer: "1",
    },
    {
        question: "Which of the following is not a Javascript framework?",
        choice1: "Node",
        choice2: "Vue",
        choice3: "React",
        choice4: "Cassandera",
        answer: "4",
    },
    {
        question: "How to stop an interval timer in Javascript?",
        choice1: "clearInterval",
        choice2: "clearTimer",
        choice3: "intervalOver",
        choice4: "None of the above",
        answer: "1",
    },
]
const SCORE_POINTS = 100;
const MAX_QUESTIONS = 7;

startgame = () => {
    questioncounter = 0
    score = 0
    availableQuestions = [...questions];
    setnextquestion()
}
setnextquestion = () =>{
    if(availableQuestions.length === 0 || questioncounter > MAX_QUESTIONS){
        localStorage.setitem("mostRecentScore", score);

        return window.location.assign("/end.html");
    }
    questioncounter++
   

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question

    choices.forEach(choice =>{
        var number = choice.dataset[number];
        choice.innertext = currentQuestion["choice" + number];
    })
      availableQuestions.splice(questionIndex, 1);

      acceptingAnswers = true
    }

    choices.forEach(choice =>{
        choice.addEventListener("click", e =>{
            if(!acceptingAnswers) return

            acceptingAnswers = false
            const selectedChoice = e.target
            const selectedAnswer = selectedChoice.dataset["number"];

           let classToApply = selectedAnswer == currentQuestion.answer ? "correct" :
           "incorrect";

           if(classToApply === "correct"){
            incrementscore(SCORE_POINTS);
           }

           selectedChoice.parentElement.classList.add(classToApply);

           setTimeout(() =>{
            selectedChoice.parentElement.classList.remove(classToApply);
            setnextquestion();
           }, 1000)
        })
    })
 incrementscore = num =>{
    score += num
    score.innerText = score
 }
startgame()


