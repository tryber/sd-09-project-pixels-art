window.onload = function () {
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
        if (event.target.id != 'color-palette') {
          color.classList.remove('selected');
          event.target.classList.add('selected');
        }
      });
    });
  }

  selectColor();
};
