let homeScore = document.getElementById("home")
let guestScore = document.getElementById("guest")



document.getElementById("single-home").addEventListener("click", () => updateScore("single-home"))
document.getElementById("double-home").addEventListener("click", () => updateScore("double-home"))
document.getElementById("single-guest").addEventListener("click", () => updateScore("single-guest"))
document.getElementById("double-guest").addEventListener("click", () => updateScore("double-guest"))
document.getElementById("triple-home").addEventListener("click", () => updateScore("triple-home"))
document.getElementById("triple-guest").addEventListener("click", () => updateScore("triple-guest"))
document.getElementById("new-game").addEventListener("click", newGame)

function updateScore(id){
  if(id === "single-home"){
    homeScore.textContent = parseInt(homeScore.textContent) +1
  }
  if(id === "single-guest"){
    guestScore.textContent = parseInt(guestScore.textContent) +1
  }
  if(id === "double-home"){
    homeScore.textContent = parseInt(homeScore.textContent) +2
  }
  if(id === "double-guest"){
    guestScore.textContent = parseInt(guestScore.textContent) +2
  }
  if(id === "triple-home"){
    homeScore.textContent = parseInt(homeScore.textContent) +3
  }
  if(id === "triple-guest"){
    guestScore.textContent = parseInt(guestScore.textContent) +3
  }
}


function newGame(){
    homeScore.textContent = 0
    guestScore.textContent = 0
}