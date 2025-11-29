let homeScore = document.getElementById("home")
let guestScore = document.getElementById("guest")


function increase(){
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

console.log("Hola Mundo!")
