const colorBlack = document.querySelector("#color-palette ul li.black");
const colorRed = document.querySelector("#color-palette ul li.red");
const colorGreen = document.querySelector("#color-palette ul li.green");
const colorBlue = document.querySelector("#color-palette ul li.blue");

window.addEventListener("load", function(event) {
  colorBlack.classList.add("selected");
})

colorBlack.addEventListener("click", function(event) {
  colorBlack.classList.add("selected");
  colorRed.classList.remove("selected");
  colorGreen.classList.remove("selected");
  colorBlue.classList.remove("selected");
})

colorRed.addEventListener("click", function(event) {
  colorBlack.classList.remove("selected");
  colorRed.classList.add("selected");
  colorGreen.classList.remove("selected");
  colorBlue.classList.remove("selected");
})

colorGreen.addEventListener("click", function(event) {
  colorBlack.classList.remove("selected");
  colorRed.classList.remove("selected");
  colorGreen.classList.add("selected");
  colorBlue.classList.remove("selected");
})

colorBlue.addEventListener("click", function(event) {
  colorBlack.classList.remove("selected");
  colorRed.classList.remove("selected");
  colorGreen.classList.remove("selected");
  colorBlue.classList.add("selected");
})