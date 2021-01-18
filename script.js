function pixelBoard() {
  const board = document.getElementById('pixel-board');
  for (let i = 1; i <= 25; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    board.appendChild(pixel);
  }
}

pixelBoard();

function selectedColor () {

}

selectedColor();
