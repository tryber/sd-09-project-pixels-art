const colorOne = document.querySelectorAll('.color')[0];
const colorTwo = document.querySelectorAll('.color')[1];
const colorThree = document.querySelectorAll('.color')[2];
const colorFour = document.querySelectorAll('.color')[3];

function colorGenerator() {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 6; index += 1) {
    color += hex[Math.floor(Math.random() * 16)];
    if (color === '#FFFFFF' || color === '#000000') {
      color = '#CCCCCC';
    }
  }
  return color;
}

colorOne.style.backgroundColor = 'black';
colorTwo.style.backgroundColor = colorGenerator();
colorThree.style.backgroundColor = colorGenerator();
colorFour.style.backgroundColor = colorGenerator();

sessionStorage.setItem('color', 'black');

function selectColorPalette() {
  const colors = document.querySelectorAll('.color');
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', function (event) {
      let element = colors[0];
      while (element) {
        if (element.className === 'color selected') {
          element.classList.remove('selected');
        }
        element = element.nextElementSibling;
      }
      event.target.classList.add('selected');
      sessionStorage.setItem('color', colors[index].style.backgroundColor);
    });
  }
}
selectColorPalette();

function paintPixel() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', function (event) {
      event.target.style.backgroundColor = sessionStorage.color;
    });
  }
}

function clearPixels() {
  const btnClear = document.querySelector('#clear-board');
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    btnClear.addEventListener('click', function () {
      pixels[index].style.backgroundColor = 'white';
    });
  }
}
clearPixels();

function createPixelsBoard(param) {
  const board = document.querySelector('tbody');
  for (let indexRow = 0; indexRow < param; indexRow += 1) {
    const tr = document.createElement('tr');
    for (let indexCol = 0; indexCol < param; indexCol += 1) {
      const td = document.createElement('td');
      td.className = 'pixel';
      tr.appendChild(td);
    }
    board.appendChild(tr);
  }
  paintPixel();
  clearPixels();
}
createPixelsBoard(5);

function deleteBoard() {
  const pixelsBoard = document.querySelector('#pixel-board');
  while(pixelsBoard.firstElementChild) {
    const child = pixelsBoard.firstElementChild;
    pixelsBoard.removeChild(child);
  }
}

function validPixelSize(param) {
  if(param > 50) {
    param = 50;
  }
  if (param < 5) {
    param = 5;
  }
  return param;
}

function inputBoard() {
  const input = document.querySelector('#board-size').value;
  if(input.length === 0) {
    alert('Board inválido!');
    return false;
  }
  return validPixelSize(input);
}

function generateBoard() {
  const size = inputBoard();
  if (size) {
    const board = document.querySelectorAll('.pixel');
    for (let index = 0; index < board.length; index +=1) {
      board[index].remove();
    }
    createPixelsBoard(size);
  }
}

const button = document.querySelector('#generate-board');
button.addEventListener('click', generateBoard);
