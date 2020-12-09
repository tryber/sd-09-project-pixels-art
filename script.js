function createPixelBoard() {
  const height = 5;
  const width = 5;
  const pixelBoardSize = height * width;
  const pixelBoard = document.querySelector('#pixel-board');

  for (let linha = 0; linha < pixelBoardSize; linha += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'white';
    pixelBoard.appendChild(pixel);
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
      pixel.style.backgroundColor = selectedColor.style.backgroundColor;
    }
  });
}
fillPixel();

function clearBoard() {
  const btnClearBoard = document.querySelector('#clear-board');
  btnClearBoard.addEventListener('click', () => {
    const pixelBoard = document.querySelector('#pixel-board');

    for (let index = 0; index < pixelBoard.childElementCount; index += 1) {
      pixelBoard.children[index].style.backgroundColor = 'white';
    }
  });
}
clearBoard();
