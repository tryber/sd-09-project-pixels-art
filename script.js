window.onload = function () {
  const colorPalette = document.querySelector('#color-palette');
  const blackInsert = createPalette();
  blackInsert.className = 'color black selected';
  colorPalette.appendChild(blackInsert);
  for (let index = 1; index <= 3; index += 1) {
    colorPalette.appendChild(createPalette());
  }
  const btn = document.querySelector('#clear-board');
  btn.addEventListener('click', function () {
    const pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });

  colorPalette.addEventListener('click', function (event) {
    const colorsPalette = document.querySelectorAll('.color');
    for (let index = 0; index < colorsPalette.length; index += 1) {
      if (event.target === colorsPalette[index]) {
        const selected = document.querySelector('.selected');
        selected.classList.remove('selected');
        event.target.classList.add('selected');
      }
    }
  });

  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', function (event) {
    if (event.target.className === 'pixel') {
      const colorSelected = document.querySelector('.selected');
      event.target.style.backgroundColor = colorSelected.classList[1];
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

function createPalette() {
    let colors = ['red','yellow','magenta','blue','green','pink','gray','purple','orange','brown'];
    let number = Math.ceil(Math.random() * 9);
    const color = document.createElement('div');
    color.className = `color ${colors[number]}`;
    return color;
}
