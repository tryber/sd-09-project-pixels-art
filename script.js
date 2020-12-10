let squareSide = 5;
const pixelBoard = document.getElementById("pixel-board");
const colorPalette = document.getElementById("color-palette");
const clear = document.getElementById("clear-board");
const newBoard = document.getElementById("generate-board");
const newBoardSize = document.getElementById("board-size");

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

function colorSelect(event) {
  const colors = document.getElementsByClassName("color");
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].classList.remove("selected");
  }
  event.target.classList.add("selected");
}

colorPalette.addEventListener("click", colorSelect);

function paint(event) {
  const newColor = document.querySelector(".selected").classList[1];
  const oldColor = event.target.classList[1];
  event.target.classList.remove(oldColor);
  event.target.classList.add(newColor);
}

pixelBoard.addEventListener("click", paint);

function clearBoard() {
  const pixels = document.getElementsByClassName("pixel");
  const newColor = "white";
  let oldColor;
  for (let index = 0; index < pixels.length; index += 1) {
    oldColor = pixels[index].classList[1];
    pixels[index].classList.remove(oldColor);
    pixels[index].classList.add(newColor);
  }
}

clear.addEventListener("click", clearBoard);

function destroyBoard(board) {
  for (let index = 0; index < squareSide; index += 1) {
    board.removeChild(board.firstChild);
  }
}

function buildNewBoard() {
  if (newBoardSize.value === '') {
    alert("Board inválido!");
    return;
  }
  destroyBoard(pixelBoard);
  squareSide = parseInt(newBoardSize.value, 10);
  buildBoard(pixelBoard);
}

newBoard.addEventListener("click", buildNewBoard);
