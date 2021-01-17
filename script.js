// Seleciona a cor black ao carregar a pagina.
window.onload = function () {
  // Seleciona a cor preta ao iniciar e adiciona ao elemento.
  const selectedBlack = document.querySelector('.color.black');
  selectedBlack.classList.add('selected');

  // Adicionando a cor selecionada ao elemento pixel
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', function (event) {
    const selectedElement = document.querySelector('.selected');
    event.target.style.backgroundColor = getComputedStyle(selectedElement).backgroundColor;
  });

  // Seleciona uma cor da paleta e adiciona ao elemento pixel.
  const colorPalette = document.querySelector('#color-palette');
  colorPalette.addEventListener('click', function (event) {
    const erasingClass = document.querySelector('.selected');
    erasingClass.classList.remove('selected');
    event.target.classList.add('selected');
    // Adicionando a cor selecionada ao elemento pixel
    // ???const pixelBoard = document.querySelector('#pixel-board');
    // ???pixelBoard.addEventListener('click', function (event) {
      const selectedElement = document.querySelector('.selected');
      event.target.style.backgroundColor = getComputedStyle(selectedElement).backgroundColor;
    // ???});
  });

  // Botão limpar
  const clearBoard = document.querySelector('#clear-board');
  clearBoard.addEventListener('click', function (event) {
    const erasingClass = document.querySelector('.selected');
    erasingClass.classList.remove('selected');
    const erasingPixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < erasingPixels.length; index += 1) {
      erasingPixels[index].style.backgroundColor = 'white';
    }
  });

  // Botão VQV(input)
  const generateBoard = document.querySelector('#generate-board');
  generateBoard.addEventListener('click', function () {
    const boardSize = document.querySelector('#board-size');
    if (boardSize.value === '') {
      alert('Board inválido!');
    } else if (boardSize.value < 5) {
      boardSize.value = 5;
    } else if (boardSize.value > 50) {
      boardSize.value = 50;
    }
    // Construindo um quadrado de pixels
    if (boardSize.value > 1) {
      // ???const pixelBoard = document.querySelector('#pixel-board');
      while (pixelBoard.firstChild) {
        pixelBoard.removeChild(pixelBoard.firstChild);
      }
    }
    // ???const removingPixelSquare = pixelBoard.childNodes;
    // ???document.pixelBoard.removeChild(removingPixelSquare);
    for (let index = 0; index < boardSize.value; index += 1) {
      const creatingDiv = document.createElement('div');
      pixelBoard.appendChild(creatingDiv);
      const lastLineDiv = pixelBoard.lastChild;
      lastLineDiv.className = 'line-board';
      for (let index2 = 0; index2 < boardSize.value; index2 += 1) {
        const creatingPixel = document.createElement('div');
        creatingDiv.appendChild(creatingPixel);
        const lastPixelDiv = creatingDiv.lastChild;
        lastPixelDiv.className = 'pixel';
      }
    }
  });

  // Gerando cor aleatoriamente ao carregar
  function generatingColors() {
    const hexadecimal = '0123456789ABCDEF';
    let color = '#';
    for (let index = 0; index < 6; index += 1) {
      color += hexadecimal[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const secondColor = document.querySelector('.yellow');
  secondColor.style.backgroundColor = generatingColors();
  const thirdColor = document.querySelector('.red');
  thirdColor.style.backgroundColor = generatingColors();
  const fourthColor = document.querySelector('.blue');
  fourthColor.style.backgroundColor = generatingColors();
};
