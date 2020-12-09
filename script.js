window.onload = function () {
  let squareSide = 5;
  let pixelBoard = document.getElementById("pixel-board");

  buildBoard(pixelBoard);

  function createPixel(color) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.classList.add(color);
    return pixel;
  }

  function pixelLine() {
    let line = document.createElement("div");
    line.className = "pixel-line";
    for (let index = 0; index < squareSide; index += 1) {
      let pixel = createPixel("white");
      line.appendChild(pixel);
    }
    return line;
  }

  function buildBoard(pixelBoard) {
    for (let index = 0; index < squareSide; index += 1) {
      let line = pixelLine();
      pixelBoard.appendChild(line);
    }
  }
};
