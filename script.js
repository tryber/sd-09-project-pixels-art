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

  function addEvents () {
    //Adiciona escutador de clique na paleta de cores
    let colorPalette = document.querySelector('#color-palette')
    colorPalette.addEventListener('click',selectColor)

    //Adiciona escutador de clique no pixel board
    let pixelBoard = document.querySelector('#pixel-board')
    pixelBoard.addEventListener('click', paintPixel)

    //Adiciona escutador de clique no botão
    let button = document.querySelector('button')
    button.addEventListener('click', clearColor)
  }

  function selectColor (event) {
    //Remover o selectec da DIV Atual
    document.querySelector('.selected').classList.remove('selected')
    //Adicionar o selectec a DIV clicada
    event.target.classList.add('selected')
  }

  //https://zellwk.com/blog/css-values-in-js/#:~:text=First%2C%20you%20need%20to%20select,to%20get%20the%20element's%20styles.&text=If%20you%20log%20style%20%2C%20you,property%20and%20their%20respective%20values.&text=You%20can%20also%20see%20this%20object%20in%20Chrome's%20and%20Firefox's%20dev%20tools.
  function paintPixel (event) {
    let pixel = event.target
    let pixelStyle = getComputedStyle(pixel)
    pixel.style.backgroundColor = getSelectedColor()

  }

  function getSelectedColor() {
    let divSelected = document.querySelector('.selected')
    let divSelectedStyle = getComputedStyle(divSelected)
    return divSelectedStyle.backgroundColor
  }

  function clearColor (event) {
    let pixelBoard = document.querySelector('#pixel-board')
    //For em linhas
    for (let indexLine = 0; indexLine <= pixelBoard.children.length - 1; indexLine += 1) {
      for (let indexPixel = 0; indexPixel <= pixelBoard.children[indexLine].children.length - 1; indexPixel += 1) {
        let pixel = pixelBoard.children[indexLine].children[indexPixel];
        let pixelStyle = getSelectedColor(pixel)
        console.log(pixelStyle)
        pixel.style.backgroundColor = 'white'
      }
    }
  }

window.onload = biuldSquaresFrame() , addEvents();
