const addClassSelected = document.querySelector(".color");
addClassSelected.className = "color selected";

const alteraNomeClasse = document.getElementById("color-palette");

function colorSelected (event) {
    document.getElementById("black").className = "color";
    document.getElementById("blue").className = "color";
    document.getElementById("yellow").className = "color";
    document.getElementById("green").className = "color";
    
    let targetEvent = event.target.id;
    document.getElementById(targetEvent).className = "color selected";
}

alteraNomeClasse.addEventListener("click", colorSelected);

const variavel = document.getElementById("pixel-board");

function colorize (colorPixel) {
    let colorizePixel = document.querySelector(".selected").id;
    colorPixel.target.style.backgroundColor = colorizePixel;
}

variavel.addEventListener("click", colorize);
