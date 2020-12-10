window.onload = function () {
  const myPixelBoard = document.querySelector('#pixel-board');
  let numberOfLinesAndColumns = 5
  
//inicio das funções de renderização do pixel-board  
  insertLine(numberOfLinesAndColumns);
  // Função inspirada na função de construção de DIV do prof Lucas(Gordinho) na pagina de algoritmo do triangulo.
  function createDiv(nameOfTheClass) {
    let myDiv = document.createElement('div');
    myDiv.className = nameOfTheClass;
    return myDiv;
  }
  function insertLine(lineOfTheTable) {
    for (let line = 0; line < lineOfTheTable; line += 1) {
      myPixelBoard.appendChild(createDiv('line'));
      insertPixel(numberOfLinesAndColumns, line);
    }
  }
  function insertPixel(columnOfTheTable, lineOfTheLoop) {
    for (let index = 0; index < columnOfTheTable; index += 1) {
      let lineOfPixelBoard = document.querySelectorAll('.line')[lineOfTheLoop];
      lineOfPixelBoard.appendChild(createDiv('pixel'));
    }
  }
//fim das funções de renderização do pixel-board
}