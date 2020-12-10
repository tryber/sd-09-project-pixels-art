window.onload = function () {
  const myPixelBoard = document.querySelector('#pixel-board');
  const numberOfLinesAndColumns = 5;
// inicio das funções de renderização do pixel-board
// Função inspirada na função de construção de DIV do prof Lucas na pagina de alg do triangulo.
function createDiv(nameOfTheClass) {
  const myDiv = document.createElement('div');
  myDiv.className = nameOfTheClass;
  return myDiv;
}
function insertPixel(columnOfTheTable, lineOfTheLoop) {
  for (let index = 0; index < columnOfTheTable; index += 1) {
    const lineOfPixelBoard = document.querySelectorAll('.line')[lineOfTheLoop];
    lineOfPixelBoard.appendChild(createDiv('pixel'));
  }
}
function insertLine(lineOfTheTable) {
  for (let line = 0; line < lineOfTheTable; line += 1) {
    myPixelBoard.appendChild(createDiv('line'));
    insertPixel(numberOfLinesAndColumns, line);
  }
}
insertLine(numberOfLinesAndColumns);
// fim das funções de renderização do pixel-board
};
