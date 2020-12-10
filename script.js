const colors = document.querySelectorAll('.color');
const pixelBoard = document.querySelector('#pixel-board');
const colorPalette = document.querySelector('#color-palette');
const btnClear = document.querySelector('#clear-board');
const inBoardSize = document.querySelector('#board-size');
const btnGenerateBoard = document.querySelector('#generate-board');

// cor inicial dos pixels de referência
colors[0].style.backgroundColor = 'black';
colors[1].style.backgroundColor = 'red';
colors[2].style.backgroundColor = 'blue';
colors[3].style.backgroundColor = 'green';

// Cria uma cor aleatória
function rgbRandom() {
  const r = Math.ceil(Math.random() * 256);
  const g = Math.ceil(Math.random() * 256);
  const b = Math.ceil(Math.random() * 256);

  const rgb = `rgb(${r}, ${g}, ${b})`;

  return rgb;
}

// Colore as caixas referência de cores
function colorizePalette() {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].style.backgroundColor = rgbRandom();
    colors[0].style.backgroundColor = 'black';
  }
}
colorizePalette();

// Cria pixel
function createPixel() {
  const lineOfPixels = document.createElement('div');
  lineOfPixels.className = 'pixel';
  pixelBoard.appendChild(lineOfPixels);
}

// Apaga a tabela atual
function deleteBoard() {
  const pixel = document.querySelectorAll('.pixel');
  for (let item = 0; item < pixel.length; item += 1) {
    if (pixel[item].parentNode) {
      pixel[item].parentNode.removeChild(pixel[item]);
    }
  }
};

// Salva a cor do pixel que estiver com a classe 'selected'
let savedColor = 'black';
pixelBoard.addEventListener('click', function (event) {
  event.target.style.backgroundColor = savedColor;
});

// Cria a tabela com os pixels e adiciona a classe 'selected' ao primeiro pixel
function createBoard() {
  let userInput = Number(inBoardSize.value);
  colors[0].classList.add('selected');
  deleteBoard();

  if (userInput === 0) {
    userInput = 5;
  }

  for (let pixelRow = 0; pixelRow < userInput; pixelRow += 1) {
    for (let pixelColumn = 0; pixelColumn < userInput; pixelColumn += 1) {
      createPixel();
    }
  }
  pixelBoard.style.width = `${userInput * colors[0].offsetWidth}px`;
  pixelBoard.style.height = `${userInput * colors[0].offsetWidth}px`;
  pixelBoard.style.margin = 'auto';
}
createBoard();

// Remove a classe 'selected'
function removeClassSelected() {
  for (let color = 0; color < colors.length; color += 1) {
    if (colors[color].className === 'color selected') {
      colors[color].classList.remove('selected');
    }
  }
}

// Adiciona a classe 'selected' ao pixel e guarda a cor em uma variável
colorPalette.addEventListener('click', function (event) {
  removeClassSelected();
  if (event.target.className === 'color') {
    event.target.classList.add('selected');
    savedColor = event.target.style.backgroundColor;
  }
});

// Preenche os pixels com a cor branca
btnClear.addEventListener('click', () => {
  const pixel = document.querySelectorAll('#pixel-board div');
  for (let item = 0; item < pixel.length; item += 1) {
    pixel[item].style.backgroundColor = '#fff';
  }
})

// Evento 'VQV', altera o tamanho da tabela
btnGenerateBoard.addEventListener('click', function () {
  if (inBoardSize.value === '') {
    alert('Board inválido!');
  } else {
    createBoard();
  }
})

inBoardSize.addEventListener('keypress', function (tecla) {
  if (tecla.keyCode === 13) {
    createBoard();
  }
})
