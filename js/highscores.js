const username = document.querySelector("#username")
const savescorebtn = document.querySelector("#savescorebtn")
const finalscore = document.querySelector("#finalscore")
const mostRecentScore = document.querySelector("#mostRecentScore")

const highScores = JSON.parse(localStorage.getItem("highScores")) || []

const MAX_HIGH_SCORES = 5

finalscore.innerText = mostRecentScore

username.addEventListener("keyup", () =>{
    savescorebtn.disabled = !username.value
})

saveHighScore = e =>{
    e.preventDefault()

    const score = 
}