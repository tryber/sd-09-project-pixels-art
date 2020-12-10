window.onload = function() {
blackColor();
}
const reedColors = document.querySelectorAll('#color-palette>div');
const boardOfPixel = document.querySelector('#pixel-board');
const divPixels = document.createElement('div');

function coloPalette() {
  reedColors[1].style.backgroundColor = 'red';
  reedColors[2].style.backgroundColor = 'green';
  reedColors[3].style.backgroundColor = 'blue';
}
coloPalette();

function GeneratePixelBoard() {
  for (let index = 0; index < 25; index += 1) {
    const divPixels = document.createElement('div');
    divPixels.className = 'pixel';
    boardOfPixel.appendChild(divPixels);
  }
}
  GeneratePixelBoard();

function getBlackColor() {
  let blackColor = document.querySelector('.selected');
  let black = 'black';
  blackColor.style.backgroundColor = black;
  localStorage.setItem('backgroundColor', black)
}
getBlackColor();

function getDivColor() {
  divPixels.addEventListener('click', function() {
    for (let index = 0; index < divPixels.length; index += 1) {
      divPixels[index].style.backgroundColor = 'black';
    }
  });
}

function blackColor() {
  let selected = document.querySelector('#color-palette .selected');
  let pixelBoard = document.querySelectorAll('.pixel');
  let color = selected.style.backgroundColor;

  for (let index = 0; index < pixelBoard.length; index += 1) {
    let colorPixel = pixelBoard[index]
    colorPixel.addEventListener('click', function(event) {
      if(selected.classList.contains('selected')) {
        event.target.style.backgroundColor = color;
      }
    });
  }
}
