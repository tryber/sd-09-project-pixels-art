window.onload = function () {
  let squareSide = 5;
  const pixelBoard = document.getElementById("pixel-board");

  function createPixel(color) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.classList.add(color);
    return pixel;
  }

  function pixelLine() {
    const line = document.createElement("div");
    line.className = "pixel-line";
    for (let index = 0; index < squareSide; index += 1) {
      const pixel = createPixel("white");
      line.appendChild(pixel);
    }
    return line;
  }

  function buildBoard(board) {
    for (let index = 0; index < squareSide; index += 1) {
      const line = pixelLine();
      board.appendChild(line);
    }
  }

  buildBoard(pixelBoard);
};
