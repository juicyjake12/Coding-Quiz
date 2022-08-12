const playbtn = document.getElementById("playbtn");
const highscorebtn = document.getElementById("highscorebtn");
const questionContainer = document.getElementById("question-container")

let currentQuestion = {}
let acceptingAnswers = true
let highscore = 0
let availableQuestions = []


const questions = [
    {
        question: "what are strings",
        choice1: "2",
        choice2: "3",
        choice3: "3",
        answer: 2,

    },
]
question: [
    {
        question: "what are strings",
        choice1: "2",
        choice2: "3",
        choice3: "3",
        answer: 2,

    },
]
question: [
    {
        question: "what are strings",
        choice1: "2",
        choice2: "3",
        choice3: "3",
        answer: 2,

    },
]
question: [
    {
        question: "what are strings",
        choice1: "2",
        choice2: "3",
        choice3: "3",
        answer: 2,

    },
]
question: [
    {
        question: "what are strings",
        choice1: "2",
        choice2: "3",
        choice3: "3",
        answer: 2,

    }
]
const score = 100
const maxquestions = 5

playbtn.addEventListener("click", startgame)

function startgame()  {
    console.log("started")
    playbtn.classList.add("hide")
    getNewQuestion()
}


