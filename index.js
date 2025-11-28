let homeScore = document.getElementById("home")
let guestScore = document.getElementById("guest")


function increase(){
    if(event.target.id === "single-home"){
        homeScore.textContent = parseInt(homeScore.textContent) +1

    }
    if(event.target.id === "single-guest"){
        guestScore.textContent= parseInt(guestScore.textContent) +1

    }
    if(event.target.id === "double-home"){
        homeScore.textContent = parseInt(homeScore.textContent) +2

    }
    if(event.target.id === "double-guest"){
        guestScore.textContent= parseInt(guestScore.textContent) +2

    }
    if(event.target.id === "triple-home"){
        homeScore.textContent = parseInt(homeScore.textContent) +3

    }
    if(event.target.id === "triple-guest"){
        guestScore.textContent= parseInt(guestScore.textContent) +3

    }

}

function newGame(){
    homeScore.textContent = 0
    guestScore.textContent = 0
}
