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

function clearBoard() {
  for (let index = 0; index < pixelBoard.length; index += 1) {
    if (pixelBoard[index].classList[1] = !undefined) {
      console.log(pixelBoard[index].classList[1]);
      let color = pixelBoard[index].classList[1];
      pixelBoard[index].classList.remove(color);
    }
  }
}

addListener(paleta, changeClassSelected);
addListener(pixelBoard, paintPixel);
