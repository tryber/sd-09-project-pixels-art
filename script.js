window.onload = function() {
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
}