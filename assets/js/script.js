const pixelBoard = document.querySelector('#pixel-board');
let selectedColor = 'rgb(0 , 0 , 0)';
const colorBox = document.getElementsByClassName('color');
const clearButton = document.querySelector('#clear-board');


// Função para criar a paleta de cores selecionáveis
function createColor() {
  for (let index = 0; index < colorBox.length; index += 1) {
    const randomColor = [];
    const rgbColors = 3;
    for (let rgbIndex = 0; rgbIndex < rgbColors; rgbIndex += 1) {
      randomColor.push(Math.floor(Math.random() * 254));
    }
    colorBox[index].style.backgroundColor = `rgb(${randomColor})`;
  }
  colorBox[0].style.backgroundColor = 'rgb(0 , 0 , 0)';
  colorBox[0].classList.add('selected');
}

function drawColumns(lineId, columns) {
  const line = document.querySelector(`#line${lineId}`);
  for (let lineColumn = 1; lineColumn <= columns; lineColumn += 1) {
    const newPixel = document.createElement('td');
    newPixel.setAttribute('class', 'pixel');
    newPixel.style.backgroundColor = 'white';
    line.appendChild(newPixel);
  }
}

// Função para desenhar o quadro de pixel conforme a quantidade de linhas desejadas
function drawPixelBoard(lines) {
  for (let line = 1; line <= lines; line += 1) {
    const lineId = `line${line}`;
    const newLine = document.createElement('tr');
    newLine.setAttribute('id', lineId);
    pixelBoard.appendChild(newLine);
    drawColumns(line, lines);
  }
}

for (let index = 0; index < colorBox.length; index += 1) {
  colorBox[index].onclick = function () {
    colorBox[index].classList.add('selected');
    selectedColor = colorBox[index].style.backgroundColor;
    for (let box = 0; box < colorBox.length; box += 1) {
      if (colorBox[index] !== colorBox[box] && colorBox[box].classList.contains('selected')) {
        colorBox[box].classList.remove('selected');
      }
    }
  };
}

// função para pintar o pixel clicado com a cor selecionada
function paintPixel() {
  for (let index = 0; index < pixelBoard.childElementCount; index += 1) {
    const boardLine = pixelBoard.children[index];
    for (let pixel = 0; pixel < boardLine.children.length; pixel += 1) {
      const paintPixel = pixelBoard.children[index].children[pixel];
      paintPixel.onclick = function () {
        paintPixel.style.backgroundColor = selectedColor;
      };
    }
  }
}

function clearCanvas() {
  for (let index = 0; index < pixelBoard.childElementCount; index += 1) {
    const boardLine = pixelBoard.children[index];
    for (let pixel = 0; pixel < boardLine.children.length; pixel += 1) {
      const paintWhitePixel = pixelBoard.children[index].children[pixel];
      paintWhitePixel.style.backgroundColor = 'white';
    }
  }
}

clearButton.addEventListener('click', clearCanvas);

function checkBoardSize(boardSize) {
  if (boardSize < 5) {
    boardSize = 5;
  } else if (boardSize > 50) {
    boardSize = 50;
  }
  pixelBoard.innerHTML = '';
  drawPixelBoard(boardSize);
  paintPixel();
}

const generateBoard = document.querySelector('#generate-board');
generateBoard.addEventListener('click', function () {
  const boardSize = document.querySelector('#board-size').value;
  if (boardSize === '') {
    alert('Board inválido!');
  } else {
    checkBoardSize(boardSize);
  }
})

window.onload = function () {
  createColor();
  drawPixelBoard(5);
  paintPixel();
};
