function createPixelBoard() {
  const height = 5;
  const width = 5;
  const pixelBoardSize = height * width;
  const pixelBoard = document.querySelector('#pixel-board');

  for (let linha = 0; linha < pixelBoardSize; linha += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
}
createPixelBoard();
