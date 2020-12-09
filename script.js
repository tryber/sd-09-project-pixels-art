window.onload = function () {
  const btn = document.querySelector('#clear-board');
  btn.addEventListener('click', function () {
    const pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });

  const colorPalette = document.querySelector('#color-palette');
  colorPalette.addEventListener('click', function (event) {
    const colors = document.querySelectorAll('.color');
    for (let index = 0; index < colors.length; index += 1) {
      if (event.target === colors[index]) {
        const selected = document.querySelector('.selected');
        selected.classList.remove('selected');
        event.target.classList.add('selected');
      }
    }
  });

  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', function (event) {
    if (event.target.className === 'pixel') {
      const color = document.querySelector('.selected');
      event.target.style.backgroundColor = color.classList[1];
    }
  });

  const btnVqv = document.querySelector('#generate-board');
  btnVqv.addEventListener('click', function () {
    const inputBoardSize = document.querySelector('#board-size');
    if (inputBoardSize.value === '') {
      alert('Board inválido!');
    } else {
      if (inputBoardSize.value < 5) {
        inputBoardSize.value = 5;
      } else if (inputBoardSize.value > 50) {
        inputBoardSize.value = 50;
      }
      const linesBoard = document.querySelectorAll('.line-board');
      for (let index = 0; index < linesBoard.length; index += 1) {
        pixelBoard.removeChild(linesBoard[index]);
      }
      for (let index = 1; index <= inputBoardSize.value; index += 1) {
        const lineBoard = document.createElement('div');
        lineBoard.className = 'line-board';
        pixelBoard.appendChild(lineBoard);
      }
      const newLines = document.querySelectorAll('.line-board');
      for (let line = 0; line < newLines.length; line += 1) {
        for (let count = 1; count <= inputBoardSize.value; count += 1) {
          const pixel = document.createElement('div');
          pixel.className = 'pixel';
          newLines[line].appendChild(pixel);
        }
      }
    }
  });
};
