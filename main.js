
const submitEl = document.getElementById("submit-btn");
const setRating = document.getElementById("ratingnumber")
const buttons = document.getElementsByClassName("button")

for (let i =0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        let buttonsinnerhtml = this.innerHTML
        setRating.innerText = buttonsinnerhtml;
    })
}

submitEl.addEventListener("click", function(){
    document.getElementById("rating").style.display = "none";
    document.querySelector(".thank-you-state").style.display = "block"
}) 
