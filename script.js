function biuldSquaresFrame() {
  console.log('Executou função biuldSquaresFrame')
  let lines = 5;
  let squaresPerLine = 5;
  //Constroi linhas
  biuldLines (lines,squaresPerLine)
}

//Constroi linha
function biuldLines (lines,squaresPerLine) {
  for (let index = 1; index <= lines; index += 1) {
    let squareDiv = document.querySelector('#pixel-board')
    let line = document.createElement('div');
    line.className = 'square-div-line';
    squareDiv.appendChild(line)
    biuldSquares(line, squaresPerLine)
    console.log('Executou o laço for')
  }
  
}

//Constroi quadrados em cada linha
function biuldSquares (divLine, numberSquaresPerLine){
  for (let squaresBiult = 1; squaresBiult <= numberSquaresPerLine; squaresBiult += 1) {
    let square = document.createElement('div')
    square.className = 'pixel'
    divLine.appendChild(square)
  }
}

window.onload = biuldSquaresFrame();
