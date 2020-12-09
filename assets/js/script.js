window.onload = function () {
  createColor();
  drawPixelBoard(5);
  paintPixel();
}


let pixelBoard = document.querySelector('#pixel-board');
let selectedColor = 'rgb(0 , 0 , 0)'
let colorBox = document.getElementsByClassName('color');
let clearButton = document.querySelector('#clear-board');
clearButton.addEventListener('click', clearCanvas);

// Função para criar a paleta de cores selecionáveis
function createColor() {
  let colorBox = document.querySelectorAll('.color');
  for (let index = 0; index < colorBox.length; index += 1) {
    let randomColor = []
    let rgbColors = 3
    for (let rgbIndex = 0; rgbIndex < rgbColors; rgbIndex += 1) {
      randomColor.push(Math.floor(Math.random() * 254))
    }
    colorBox[index].style.backgroundColor = 'rgb(' + randomColor + ')';
  }
  colorBox[0].style.backgroundColor = 'rgb(0 , 0 , 0)';
  colorBox[0].classList.add('selected');
}

// Função para desenhar o quadro de pixel conforme a quantidade de linhas desejadas
function drawPixelBoard(lines) {
  let pixelBoard = document.querySelector('#pixel-board');
  for (let line = 1; line <= lines; line += 1) {
    let lineId = 'line' + line
    let newLine = document.createElement('tr')
    newLine.setAttribute('id', lineId)
    pixelBoard.appendChild(newLine)
    drawColumns(line, lines)
  }
}

function drawColumns(lineId, columns) {
  let line = document.querySelector('#line' + lineId);
  for (let lineColumn = 1; lineColumn <= columns; lineColumn += 1) {
    let newPixel = document.createElement('td')
    newPixel.setAttribute('class', 'pixel')
    newPixel.style.backgroundColor = 'white'
    line.appendChild(newPixel)
  }
}

for (let index = 0; index < colorBox.length; index += 1) {
  colorBox[index].onclick = function () {
    colorBox[index].classList.add('selected')
    selectedColor = colorBox[index].style.backgroundColor;
    for (let box = 0; box < colorBox.length; box += 1) {
      if (colorBox[index] !== colorBox[box] && colorBox[box].classList.contains('selected')) {
        colorBox[box].classList.remove('selected')
      }
    }
  }
}

// função para pintar o pixel clicado com a cor selecionada
function paintPixel() {
  for (let index = 0; index < pixelBoard.childElementCount; index += 1) {
    let boardLine = pixelBoard.children[index];
    for (let pixel = 0; pixel < boardLine.children.length; pixel += 1) {
      let paintPixel = pixelBoard.children[index].children[pixel]
      paintPixel.onclick = function() {
        paintPixel.style.backgroundColor = selectedColor;
      }
    }
  }
}

function clearCanvas() {
  for (let index = 0; index < pixelBoard.childElementCount; index += 1) {
    let boardLine = pixelBoard.children[index];
    for (let pixel = 0; pixel < boardLine.children.length; pixel += 1) {
      let paintPixel = pixelBoard.children[index].children[pixel]
      paintPixel.style.backgroundColor = 'white';
    }
  }
}