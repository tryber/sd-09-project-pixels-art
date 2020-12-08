function createPixelBoard() {
  const pixelBoardLines = document.querySelectorAll(".pixel-board-line");

  for (line of pixelBoardLines) {
    for (let index = 0; index < pixelBoardLines.length; index += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      line.appendChild(pixel);
      console.log(index);
    }
  }
}

createPixelBoard();
