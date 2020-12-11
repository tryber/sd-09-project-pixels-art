function randomizeColors(length) {
  length = Math.floor(Math.random() * length);
  return length;
}

function generatePalette() {
  const palette = document.getElementById('color-palette');
  const colorPaletteArray = ['green', 'blue', 'red', 'yellow', 'purple', 'orange', 'teal', 'pink', 'gray'];
  const paletteSize = 4;

  // [Task 3] First color is always BLACK
  const firstColor = document.createElement('div');
  firstColor.className = 'color selected';
  firstColor.style.backgroundColor = 'black';
  palette.appendChild(firstColor);

  // Remaining colors
  for (let i = 1; i < paletteSize; i += 1) {
    const color = document.createElement('div');
    const randomIndex = randomizeColors(colorPaletteArray.length);
    color.className = 'color';
    color.style.backgroundColor = colorPaletteArray[randomIndex];
    colorPaletteArray.splice(randomIndex, 1); // Prevent color repetition
    palette.appendChild(color);
  }
}

function generateBoardColumn(pixelBoard, size) {
  for (let i = 0; i < size; i += 1) {
    const row = document.createElement('div');
    row.className = 'pixel';
    pixelBoard.appendChild(row);
  }
}

function generateBoardRow(size) {
  const container = document.getElementById('pixel-board');
  for (let i = 0; i < size; i += 1) {
    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);
  }

  const pixelBoard = document.querySelectorAll('.row');
  for (let i = 0; i < pixelBoard.length; i += 1) {
    generateBoardColumn(pixelBoard[i], size);
  }
}

function selectColor() {
  const colorPalette = document.getElementById('color-palette');
  const colors = document.getElementsByClassName('color');
  colorPalette.addEventListener('click', function (colorSelection) {
    if (colorSelection.target.className === 'color') {
      for (let i = 0; i < colors.length; i += 1) {
        colors[i].className = 'color';
        colorSelection.target.className = 'color selected';
      }
    } else if (colorSelection.target.className === 'selected color') {
      colorSelection.target.className = 'color';
    }
  });
}

function paint() {
  const board = document.getElementById('pixel-board');

  board.addEventListener('click', function (pixelSelection) {
    const currentColor = document.querySelector('.selected');
    const color = currentColor.style.backgroundColor;
    if (pixelSelection.target.className === 'pixel') {
      pixelSelection.target.style.backgroundColor = color;
    }
  });
}

function clearButton() {
  const container = document.querySelector('.button-container');
  const button = document.createElement('button');
  button.id = 'clear-board';
  button.innerText = 'Limpar';
  container.appendChild(button);

  button.addEventListener('click', function () {
    const pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = '';
    }
  });
}

function generateInput(container) {
  const input = document.createElement('input');
  input.type = 'number';
  input.id = 'board-size';
  input.min = '1';
  input.placeholder = 'Type board dimension here';
  container.appendChild(input);
  input.addEventListener('keyup', function () {
    if (input.value < input.min) {
      alert('Invalid value!');
      input.value = '';
    }
  });
}

function generateButton(container) {
  const button = document.createElement('button');
  button.id = 'generate-board';
  button.innerText = 'VQV';
  container.appendChild(button);

  button.addEventListener('click', function () {
    if (document.getElementById('board-size').value !== '') {
      // Remove existing board
      const board = document.getElementById('pixel-board');
      const existingRows = document.querySelectorAll('.row');
      for (let i = 0; i < existingRows.length; i += 1) {
        board.removeChild(existingRows[i]);
      }

      // Generate new Board
      const size = document.getElementById('board-size');
      if (size.value <= 5) { // Task 11
        size.value = 5;
      } else if (size.value >= 50) {
        size.value = 50;
      }
      generateBoardRow(size.value);
      size.value = '';
    } else {
      alert('Board inválido!');
    }
  });
}

function generateBoard() {
  const container = document.querySelector('.button-container');

  // Input
  generateInput(container);

  // Button
  generateButton(container);
}

window.onload = function () {
  generatePalette();
  generateBoardRow(5);
  selectColor();
  paint();
  clearButton();
  generateBoard();
};
