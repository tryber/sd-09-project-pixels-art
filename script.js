function newDiv() {
  const div = document.createElement('div');
  return div;
}

function RandomColors() {
  const rgbArray = [];
  let color = '';
  for (let index = 0; index < 3; index += 1) {
    rgbArray.push(Math.round(Math.random() * 255));
    if (rgbArray[index] === 0) {
      rgbArray[index] += 1;
    }
  }
  color = `rgb(${rgbArray.join(', ')})`;
  return color;
}

function backgroundColorSquare(palette) {
  for (let index = 0; index < palette.length; index += 1) {
    if (index === 0) {
      palette[index].style.backgroundColor = 'rgb(0, 0, 0)';
      palette[index].className += ' selected';
    } else {
      palette[index].style.backgroundColor = RandomColors();
    }
  }
}

function newPaletteColorSquares(palette, amount) {
  const paletteArray = [];
  for (let index = 0; index < amount; index += 1) {
    const paletteSquare = palette.appendChild(newDiv());
    paletteSquare.className = 'color';
    paletteArray.push(paletteSquare);
  }
  backgroundColorSquare(paletteArray);
}

function createPixelBoard(board, amount) {
  const column = Math.sqrt(amount);
  const line = Math.sqrt(amount);
  for (let index = 0; index < column; index += 1) {
    const squarecolumn = board.appendChild(newDiv());
    for (let index2 = 0; index2 < line; index2 += 1) {
      const squareLine = squarecolumn.appendChild(newDiv());
      squareLine.className = 'pixel';
      squareLine.style.backgroundColor = 'rgb(255, 255, 255)';
    }
  }
}

const paletteColor = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const amountColors = 4;
const amountSquares = 25;
newPaletteColorSquares(paletteColor, amountColors);
createPixelBoard(pixelBoard, amountSquares);
paletteColor.addEventListener('click', selectColor);
pixelBoard.addEventListener('click', paintPixel);
document.querySelector('#generate-board').addEventListener('click', resizeBoard);




function paintPixel(event) {
  const selectedSquare = event.target;
  if (selectedSquare !== document.querySelector('#pixel-board')) {
    const currentColor = document.querySelector('.selected');
    selectedSquare.style.backgroundColor = currentColor.style.backgroundColor;
  }
}