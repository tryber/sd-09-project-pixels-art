  function createColorPalette() {
    const colorPalette = document.querySelector('#color-palette');
    const backgroundColors = ['black', 'red', 'green', 'blue'];
    const totalNumberOfColors = 4;
    for (let index = 0; index < totalNumberOfColors; index += 1) {
      const color = document.createElement('div');
      color.className = 'color';
      if (index === 0) {
        color.classList.add('selected');
      }
      color.style.backgroundColor = backgroundColors[index];
      colorPalette.appendChild(color);
    }
  }

  createColorPalette();

  function createPixelBoard() {
    const pixelBoardLines = document.querySelectorAll('.pixel-board-line');

    for (let line = 0; line < pixelBoardLines.length; line += 1) {
      for (let column = 0; column < pixelBoardLines.length; column += 1) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixelBoardLines[line].appendChild(pixel);
      }
    }
  }

  createPixelBoard();

  function selectColor() {
    const colorsPalette = document.querySelector('#color-palette');
    const colors = document.querySelectorAll('.color');

    colorsPalette.addEventListener('click', function (event) {
      colors.forEach(function (color) {
        if (event.target.id !== 'color-palette') {
          color.classList.remove('selected');
          event.target.classList.add('selected');
        }
      });
    });
  }

  selectColor();

  function paintSelectedPixel() {
    const pixelBoard = document.querySelector('#pixel-board');

    pixelBoard.addEventListener('click', function (event) {
      const selectedColor = document.querySelector('.selected');
      const color = selectedColor.style.backgroundColor;
      event.target.style.backgroundColor = color;
    });
  }

  paintSelectedPixel();
