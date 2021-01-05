
window.onload = function () {
  let divFather = document.getElementById("pixel-board");
  for (let index = 0; index < 5; index += 1) {
    for (let j = 0; j < 5; j += 1) {
      let pixel = document.createElement("div");
      pixel.className = "pixel";
      divFather.appendChild(pixel);
    }
  }
}

function selected(event) {
  let selectedItem = document.getElementsByClassName("selected")[0];
  selectedItem.className = "color";
  event.target.className = "color selected";
  storeColor = event.target.style.backgroundColor;
}
function clickColorPalette() {
  const colorPalette = document.getElementById("color-palette");
  colorPalette.addEventListener("click", selected);
}
clickColorPalette();

let pixList = document.querySelector('#pixel-board');

function changePixels(evento) {
  evento.target.style.backgroundColor = storeColor;
}
changePixels();