const username = document.querySelector("#username")
const savescorebtn = document.querySelector("#savescorebtn")
const finalscore = document.querySelector("#finalscore")
const mostRecentScore = localStorage.getItem("mostrecentscore")

const highScores = JSON.parse(localStorage.getItem("highScores")) || []

const MAX_HIGH_SCORES = 5

finalscore.innerText = mostRecentScore

username.addEventListener("keyup", () =>{
    savescorebtn.disabled = !username.value
})

saveHighScore = e =>{
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }
    highScores.push(score)
    highScores.sort((a,b) =>{
        return b.score -a.score
    })
    highScores.splice(5)
    localStorage.setItem("highScores", JSON.stringify(highScores))
}