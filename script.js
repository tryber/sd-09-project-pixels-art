const table = document.createElement('table');

function createPixelBoard() {
  const height = 5;
  const width = 5;
  const pixelBoard = document.querySelector('#pixel-board');

  pixelBoard.append(table);

  for (let index = 0; index < height; index += 1) {
    const row = document.createElement('tr');
    table.appendChild(row);

    for (let pixelIndex = 0; pixelIndex < width; pixelIndex += 1) {
      const pixel = document.createElement('td');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      row.appendChild(pixel);
    }
  }
}
createPixelBoard();

function selectColor() {
  const colorPalette = document.querySelector('#color-palette');
  colorPalette.addEventListener('click', (event) => {
    for (let child = 0; child < colorPalette.childElementCount; child += 1) {
      if (colorPalette.children[child].className.includes('selected')) {
        colorPalette.children[child].classList.remove('selected');
      }
    }
    event.target.classList.add('selected');
  });
}
selectColor();

function fillPixel() {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', (event) => {
    const selectedColor = document.querySelector('.selected');
    const pixel = event.target;

    if (pixel.className === 'pixel') {
      pixel.style.backgroundColor = window.getComputedStyle(selectedColor, null).getPropertyValue('background-color');
    }
  });
}
fillPixel();

function clearBoard() {
  const btnClearBoard = document.querySelector('#clear-board');
  btnClearBoard.addEventListener('click', () => {
    const pixelBoard = document.querySelectorAll('#pixel-board table tr td');

    for (let index = 0; index < pixelBoard.length; index += 1) {
      pixelBoard[index].style.backgroundColor = 'white';
    }
  });
}
clearBoard();

function generateNewBoard() {
  function clearPixelBoard() {
    const board = document.querySelector('#pixel-board table');
    const childBoard = document.querySelectorAll('#pixel-board table tr');

    for (let childIndex = 0; childIndex < childBoard.length; childIndex += 1) {
      board.removeChild(childBoard[childIndex]);
    }
  }

  const generateBoard = document.querySelector('#generate-board');
  generateBoard.addEventListener('click', () => {
    clearPixelBoard();
    const boardSize = document.querySelector('#board-size').value;
    if (boardSize === '') { alert('Board inválido!'); }

    for (let index = 0; index < boardSize; index += 1) {
      const row = document.createElement('tr');
      table.appendChild(row);

      for (let pixelIndex = 0; pixelIndex < boardSize; pixelIndex += 1) {
        const pixel = document.createElement('td');
        pixel.className = 'pixel';
        pixel.style.backgroundColor = 'white';
        row.appendChild(pixel);
      }
    }
  });
}
generateNewBoard();
