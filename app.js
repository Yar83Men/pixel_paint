const color = document.querySelector("input");
const button = document.querySelector("button");
const canvas = document.querySelector(".canvas");
let pixel = "";

for(let i = 1; i < 1600; i++) {
   pixel += "<div class='pixel'></div>"; 
}

canvas.innerHTML = pixel;

let colorChoice = "black";
let click = false;
const allPixels = document.querySelectorAll(".pixel");

color.onchange = function(){
    colorChoice = color.value;    
}

canvas.onmousedown = function() {
    click = true;
}

canvas.onmouseup = function() {
    click = false;
}

for (let i = 0; i < allPixels.length; i++) {
    allPixels[i].onmouseover = function(){
        if (click == true) {
            allPixels[i].style.background = colorChoice;
        }
    }
}

button.onclick = function() {
    for (let i = 0; i < allPixels.length; i++){
        allPixels[i].style.background = "white";
    }
}