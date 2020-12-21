const boardPixel = document.querySelector('#pixel-board');
let qttyPixels = 5;

function coloringTheColorPalette() {
  const colorsPalette = document.querySelectorAll('.color');
  colorsPalette[0].style.backgroundColor = 'black';
  colorsPalette[1].style.backgroundColor = 'yellow';
  colorsPalette[2].style.backgroundColor = 'hotpink';
  colorsPalette[3].style.backgroundColor = 'green';
}

function selectingAndRemovingColor(event) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}

function designingTheColorPalette() {
  const designsPalette = document.querySelectorAll('.color');
  for (let index = 0; index < designsPalette.length; index += 1) {
    designsPalette[index].style.display = 'inline-block';
    designsPalette[index].style.borderColor = 'black';
    designsPalette[index].style.borderStyle = 'solid';
    designsPalette[index].style.borderWidth = '1px';
    designsPalette[index].style.height = '60px';
    designsPalette[index].style.width = '60px';
    designsPalette[index].style.borderRadius = '10px';
    designsPalette[index].style.margin = 'auto';
    designsPalette[index].addEventListener('click', selectingAndRemovingColor);
  }
}

function coloringBoard(event) {
  const selectedColor = document.querySelector('.selected');
  const fillColor = selectedColor.style.backgroundColor;
  event.target.style.backgroundColor = fillColor;
}

function drawBoard() {
  boardPixel.innerHTML = '';
  for (let index = 0; index < qttyPixels; index += 1) {
    const linePixel = document.createElement('div');
    linePixel.className = 'line-pixel';
    boardPixel.appendChild(linePixel);
    for (let pxindex = 0; pxindex < qttyPixels; pxindex += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      linePixel.appendChild(pixel);
      pixel.addEventListener('click', coloringBoard);
    }
  }
}

function changeBoardSize() {
  const input = document.querySelector('#board-size');
  qttyPixels = input.value;
  if (qttyPixels < 5 && qttyPixels) {
    qttyPixels = 5;
  }
  if (qttyPixels > 50) {
    qttyPixels = 50;
  }
  if (!qttyPixels) {
    window.alert('Board inválido!');
    qttyPixels = 5;
  }
  drawBoard();
}

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

function addButtons() {
  const clearButton = document.querySelector('#clear-board');
  clearButton.addEventListener('click', clearBoard);
  const generButton = document.querySelector('#generate-board');
  generButton.addEventListener('click', changeBoardSize);
}

window.onload = () => {
  coloringTheColorPalette();
  designingTheColorPalette();
  drawBoard();
  addButtons();
};
