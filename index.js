let homeScore = document.getElementById("home")
let guestScore = document.getElementById("guest")


function increase(event){
    const targetId = event.target.id
    if(targetId === "single-home"){
        homeScore.textContent = parseInt(homeScore.textContent) +1

    }
    if(targetId === "single-guest"){
        guestScore.textContent= parseInt(guestScore.textContent) +1

    }
    if(targetId === "double-home"){
        homeScore.textContent = parseInt(homeScore.textContent) +2

    }
    if(targetId === "double-guest"){
        guestScore.textContent= parseInt(guestScore.textContent) +2

    }
    if(targetId === "triple-home"){
        homeScore.textContent = parseInt(homeScore.textContent) +3

    }
    if(targetId === "triple-guest"){
        guestScore.textContent= parseInt(guestScore.textContent) +3

    }

}

function newGame(){
    homeScore.textContent = 0
    guestScore.textContent = 0
}

document.getElementById("single-home").addEventListener("click", () => updateScore("single-home"))
document.getElementById("double-home").addEventListener("click", () => updateScore("double-home"))
document.getElementById("single-guest").addEventListener("click", () => updateScore("single-guest"))
document.getElementById("double-guest").addEventListener("click", () => updateScore("double-guest"))
document.getElementById("triple-home").addEventListener("click", () => updateScore("triple-home"))
document.getElementById("triple-guest").addEventListener("click", () => updateScore("triple-guest"))

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

console.log("Hola Mundo!")
