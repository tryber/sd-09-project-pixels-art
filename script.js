function createPalette() {
  const colorPalette = document.getElementById('color-palette');
  const numberOfColors = 4;
  for (let index = 0; index < numberOfColors; index += 1) {
    const colorSquare = document.createElement('div');
    colorSquare.classList.add('color');
    colorPalette.appendChild(colorSquare)
  }
  document.querySelector('.color').classList.add('selected');
}

function createPixelBoard(num) {
  const pixelBoard = document.getElementById('pixel-board');
  let numberOfColumns = num;
  for (let line = 0; line < numberOfColumns; line += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.classList.add('pixel-line');
    for (let columns = 0; columns < numberOfColumns; columns += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixelLine.appendChild(pixel);
    }
    pixelBoard.appendChild(pixelLine);
  }
}
createPixelBoard(5);

function getInputValue() {
  let input = parseInt(document.querySelector('input').value);
  if (input < 5 && input > 0){
    input = 5;
  } else if (input > 50) {
    input = 50;
  }
  return input;
}

function deleteBoard() {
  let lines = document.getElementById('pixel-board').children;
  const boardSize = lines.length;
  for (let i = 0; i < boardSize; i++) {
    lines[0].remove();
  }
}

function classSelected() {
  const colors = document.getElementsByClassName('color');
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', function(event) {
      for (let index2 = 0; index2 < colors.length; index2 += 1) {
        colors[index2].classList.remove('selected');
      }
      event.target.classList.add('selected');
    })
  }
}

function paintPixel() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', function(event) {
      const elementSelected = document.querySelector('.color.selected');
      const elementSelectedBackgroundColor = window.getComputedStyle(elementSelected).getPropertyValue('background-color');
      event.target.style.backgroundColor = elementSelectedBackgroundColor;
    });
  }
}

function clearPixelBoard() {
  const pixels = document.getElementsByClassName('pixel');
  const button = document.getElementById('clear-board');
  button.addEventListener('click', function() {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  })
}

function randomNumbers() {
  return Math.round(Math.random() * 255);
}

function randomPalette() {
  const button = document.querySelector('#randomize-color');
  button.addEventListener('click', paintPalette);
}

function paintPalette() {
  const coloredSquare = document.querySelectorAll('.color');
  coloredSquare[0].style.backgroundColor = 'black';
  coloredSquare[1].style.backgroundColor = `rgb(${randomNumbers()}, ${randomNumbers()}, ${randomNumbers()})`;
  coloredSquare[2].style.backgroundColor = `rgb(${randomNumbers()}, ${randomNumbers()}, ${randomNumbers()})`;
  coloredSquare[3].style.backgroundColor = `rgb(${randomNumbers()}, ${randomNumbers()}, ${randomNumbers()})`;
}

function newBoard() {
  const input = getInputValue();
  if (input < 5) {
    alert('Numero deve ser maior que 5!');
    return;
  }
  if (document.getElementById('board-size').value.length === 0) {
    alert('Board inválido!');
    return;
  }
  deleteBoard();
  createPixelBoard(input);
  paintPixel();
}

window.onload = function() {
  createPalette();
  paintPalette();
  createPixelBoard();
  classSelected();
  paintPixel();
  clearPixelBoard();
  randomPalette();
}
