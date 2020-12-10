//  Constroi quadrados em cada linha
function biuldSquares(divLine, squaresPerLine) {
  for (let squaresBiult = 1; squaresBiult <= squaresPerLine; squaresBiult += 1) {
    const square = document.createElement('div');
    square.className = 'pixel';
    divLine.appendChild(square);
  }
}

//  Constroi linha
function biuldLines(lines, squaresPerLine) {
  for (let index = 1; index <= lines; index += 1) {
    const squareDiv = document.querySelector('#pixel-board');
    const divLine = document.createElement('div');
    divLine.className = 'square-div-line';
    squareDiv.appendChild(divLine);
    biuldSquares(divLine, squaresPerLine);
  }
}

function selectColor(event) {
  //  Remover o selectec da DIV Atual
  document.querySelector('.selected').classList.remove('selected');
  //  Adicionar o selectec a DIV clicada
  event.target.classList.add('selected');
}

function getSelectedColor() {
  const divSelected = document.querySelector('.selected');
  const divSelectedStyle = getComputedStyle(divSelected);
  return divSelectedStyle.backgroundColor;
}

//  https://zellwk.com/blog/css-values-in-js/#:~:text=First%2C%20you%20need%20to%20select,to%20get%20the%20element's%20styles.&text=If%20you%20log%20style%20%2C%20you,property%20and%20their%20respective%20values.&text=You%20can%20also%20see%20this%20object%20in%20Chrome's%20and%20Firefox's%20dev%20tools.
function paintPixel(event) {
  const pixel = event.target;
  pixel.style.backgroundColor = getSelectedColor();
}

function clearColor() {
  // console.log(`Limpando cores`)
  const linesOfPixels = document.querySelectorAll('.square-div-line');
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index <= pixels.length - 1; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
  for (let index = 0; index <= linesOfPixels.length - 1; index += 1) {
    linesOfPixels[index].style.backgroundColor = 'white';
  }
}

function biuldSquaresFrame(nLines, nSquaresPerLine) {
  const lines = nLines;
  const squaresPerLine = nSquaresPerLine;
  biuldLines(lines, squaresPerLine);
}

function updatePixelBoard() {
  console.log(`Atualizando quadro`)
  let baseNumberSquareFrame = document.querySelector('#board-size').value
  console.log(baseNumberSquareFrame)
  if(baseNumberSquareFrame > 0) {
    document.querySelector('#pixel-board').innerHTML = ''
    biuldSquaresFrame(baseNumberSquareFrame, baseNumberSquareFrame)
  }
}

function addEvents() {
  //  Adiciona escutador de clique na paleta de cores
  const colorPalette = document.querySelector('#color-palette');
  colorPalette.addEventListener('click', selectColor);
  //  Adiciona escutador de clique no pixel board
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', paintPixel);
  //  Adiciona escutador de clique no botão
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', clearColor);
  //  Adiciona escutador de clique no botão de atualizar tabela
  const buttonGenerateBoard = document.querySelector('#generate-board');
  buttonGenerateBoard.addEventListener('click', updatePixelBoard);
  //  Adiciona escutador de teclado no input
}

window.onload = function () {
  biuldSquaresFrame(5, 5);
  addEvents();
};
