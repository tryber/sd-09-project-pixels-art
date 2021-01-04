const colorBlack = document.querySelector("#color-palette ul li.black");
const colorRed = document.querySelector("#color-palette ul li.red");
const colorGreen = document.querySelector("#color-palette ul li.green");
const colorBlue = document.querySelector("#color-palette ul li.blue");
const clearBoard = document.querySelector("#clear-board");
const table = document.querySelector("#table");
let color;

window.addEventListener("load", function(event) {
  colorBlack.classList.add("selected");
  color = "black";
})

colorBlack.addEventListener("click", function(event) {
  colorBlack.classList.add("selected");
  colorRed.classList.remove("selected");
  colorGreen.classList.remove("selected");
  colorBlue.classList.remove("selected");
  color = "black";
})

colorRed.addEventListener("click", function(event) {
  colorBlack.classList.remove("selected");
  colorRed.classList.add("selected");
  colorGreen.classList.remove("selected");
  colorBlue.classList.remove("selected");
  color = "red";
})

colorGreen.addEventListener("click", function(event) {
  colorBlack.classList.remove("selected");
  colorRed.classList.remove("selected");
  colorGreen.classList.add("selected");
  colorBlue.classList.remove("selected");
  color = "green";
})

colorBlue.addEventListener("click", function(event) {
  colorBlack.classList.remove("selected");
  colorRed.classList.remove("selected");
  colorGreen.classList.remove("selected");
  colorBlue.classList.add("selected");
  color = "blue";
})

table.addEventListener("click", function(e) {
  if (e.target.id == "table") {
    return;
  }
  e.target.style.backgroundColor = color;
})

clearBoard.addEventListener("click", function(event) {
  event.preventDefault();
  let pixels = document.querySelectorAll(".pixel");
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = "white";
  }
})