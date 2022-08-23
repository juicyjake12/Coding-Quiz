const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questioncounter = 0;
let availableQuestions = []

let questions = [
    {
        question: "what is 2+2?",
        choice1: "2",
        choice2: "4",
        choice3: "21",
        choice4: "17",
        answer: "2",
    },
    {
        question: "what is 2+2?",
        choice1: "2",
        choice2: "4",
        choice3: "21",
        choice4: "17",
        answer: "2",
    },
    {
        question: "what is 2+2?",
        choice1: "2",
        choice2: "4",
        choice3: "21",
        choice4: "17",
        answer: "2",
    },
    {
        question: "what is 2+2?",
        choice1: "2",
        choice2: "4",
        choice3: "21",
        choice4: "17",
        answer: "2",
    },
    {
        question: "what is 2+2?",
        choice1: "2",
        choice2: "4",
        choice3: "21",
        choice4: "17",
        answer: "2",
    },
    {
        question: "what is 2+2?",
        choice1: "2",
        choice2: "4",
        choice3: "21",
        choice4: "17",
        answer: "2",
    },
    {
        question: "what is 2+2?",
        choice1: "2",
        choice2: "4",
        choice3: "21",
        choice4: "17",
        answer: "2",
    },
]
const score_points = 100;
const max_questions = 7;

startgame = () => {
    questioncounter = 0
    score = 0
    availableQuestions = [...questions]
    setnextquestion()
}
setnextquestion = () =>{
    if(availableQuestions.length === 0 || questioncounter > max_questions){
        localStorage.setitem("mostrecentscore", score)

        return window.location.assign("/end.html")
    }
    questioncounter++
    ProgressText.innertext = `Question ${questioncounter} of ${max_questions}`

    const questionindex = Math.floor(math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionindex]
    question.innertext = currentQuestion.question

    choices.forEach(choice =>{
        const number = choice.dataset[]
    })
        
    });
}


