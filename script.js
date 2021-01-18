const board = document.getElementById('pixel-board');

function pixelBoard() {
  for (let i = 0; i < 25; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    board.appendChild(pixel);
  }
}

pixelBoard();
