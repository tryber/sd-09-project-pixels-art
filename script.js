// colorir
const colorPalette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
let blackEvent = document.querySelector('.selected').style.backgroundColor;
// botão + apagar/ pintar de branco
const clickWhite = document.querySelector('#clear-board');
const whiteColor = document.querySelector('.whiteColor');

pixelBoard.addEventListener('click', function (event) {
  // console.log(event.target);
  event.target.style.backgroundColor = blackEvent;
  // console.log(blackEvent);
});

colorPalette.addEventListener('click', function (event) {
  // console.log(event.target);
  blackEvent = event.target.style.backgroundColor;
});

clickWhite.addEventListener('click', function (event) {
  let pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});

function removePixel() {
  let pixelsBoard = document.getElementById('pixel-board');
  let pixelBoardChildren = pixelsBoard.children;
  let rowNumbers = Number(pixelBoardChildren[0].children.length);
  for (let index = rowNumbers - 1; index >= 0; index -= 1) {
    pixelBoard.deleteRow(index);
  }
}

function addPixels() {
  if(validBoardSize() === null) {
    return null;
  }
  let qntPixels = document.getElementById('board-size').value;
  let qntNumbers = Number(qntPixels);
  let pixelsBoard = document.getElementById('pixel-board');
  removePixel();
  for (let index = 0; index < qntNumbers; index += 1) {
    let newRow = pixelsBoard.insertRow(index);
    for (let aux = 0; aux < qntNumbers; aux += 1) {
      let newPixel = newRow.insertCell(aux);
      newPixel.className = 'pixel';
      newPixel.style.backgroundColor = 'white';
    }
  }
  return 0;
}

document.getElementById('generate-board').addEventListener('click', addPixels);

function validBoardSize() {
  let boardSize = document.getElementById('board-size');
  let menorMaiorPixels = Number(document.getElementById('board-size').value);
  if (boardSize.value === '') {
    alert('Board inválido!');
    return null;
  }
  if (menorMaiorPixels < 5) {
    boardSize.value = 5;
    // alert("A quantidade de pixels modificada")
  } else if (menorMaiorPixels > 50) {
    boardSize.value = 50;
    // alert("A quantidade de pixels modificada")
  }
  return 0;
}

document
  .getElementById('board-size')
  .addEventListener('change', validBoardSize);
// change: executa quando o usuário tira o foco, ou seja, "desclica".
