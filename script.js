
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
}
function clickColorPalette() {
  const colorPalette = document.getElementById("color-palette");
  colorPalette.addEventListener("click", selected);
}
clickColorPalette();

let pixList = document.querySelector('#pixel-board');

function changePixels(evento) {
  let selectedColor = document.querySelector('.selected').id;
  evento.target.style.backgroundColor = selectedColor;
}
pixList.addEventListener('click', changePixels);

let btn = document.getElementById('clear-board');

function clearAll() {
  let childsBoard = document.querySelector('#pixel-board').childNodes;
  for (index = 0; index < childsBoard.length; index += 1) {
    childsBoard[index].style.backgroundColor = 'white';
  }
}
btn.addEventListener('click', clearAll);