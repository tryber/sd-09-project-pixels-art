const pixelBoard = document.getElementById('pixel-board');

function makeLinePixels() {
  for (let index = 0; index < 25; index += 1) {
    const pixels = document.createElement('div');
    pixels.className = 'pixel';
    pixelBoard.appendChild(pixels);
  }
}

makeLinePixels();