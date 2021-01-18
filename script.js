window.onload = function () {
  const board = document.getElementById('pixel-board');
  for (let i = 0; i < 5; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      board.appendChild(pixel);
    }
  }
};

function selectedColor() {
  const colorPalette = document.getElementById('color-palette');
}

selectedColor();
