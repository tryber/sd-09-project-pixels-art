//selecionado.classList.remove('selected')

const paleta = document.getElementsByClassName('color');
let pixelBoard = document.querySelectorAll('.pixel');

//console.log(pixel);

function addListener(objeto, func) {
  let objFunc = objeto;

  for (let index = 0; index < objeto.length; index += 1) {
    objFunc[index].addEventListener("click", func);
  }
}

function changeClassSelected(event) {
  let selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
  console.log(selected);
}

function paintPixel(event) {
  let classToAdd = document.querySelector('.selected').classList[1];
  let pixelCLicked = event.target;

  pixelCLicked.classList.add(classToAdd);
}

addListener(paleta, changeClassSelected);
addListener(pixelBoard, paintPixel);
