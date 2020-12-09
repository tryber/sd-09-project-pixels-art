function selectColor() {
  const selectedColors = document.getElementsByClassName('color selected');
  const colors = document.getElementsByClassName('color');

  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', function (event) {
      for (let index2 = 0; index2 < selectedColors.length; index2 += 1) {
        selectedColors[index2].classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
  }
}

function colorPixel() {
  const pixels = document.getElementsByClassName('pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', function (event) {
      const selectedColor = window.getComputedStyle(document.querySelector('.color.selected'));
      const bgColor = selectedColor.backgroundColor;
      event.target.style.backgroundColor = bgColor;
    });
  }
}

function createBtn() {
  const btnSection = document.querySelector('#button-section');
  const clearBtn = document.createElement('button');
  clearBtn.id = 'clear-board';
  clearBtn.innerText = 'Limpar';
  clearBtn.style.background = 'black';
  clearBtn.style.color = 'white';
  clearBtn.style.padding = '7px';
  clearBtn.style.borderRadius = '10px';
  btnSection.appendChild(clearBtn);
}

function clearBoard() {
  const clearBtn = document.querySelector('#clear-board');
  clearBtn.addEventListener('click', function () {
    const pixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
}

function createInput() {
  const btnSection = document.querySelector('#button-section');
  const input = document.createElement('input');
  input.min = '1';
  input.max = '50';
  input.id = 'board-size';
  input.type = 'number';
  btnSection.appendChild(input);
}

function createGenBoardBtn() {
  const btnSection = document.querySelector('#button-section');
  const genBoardBtn = document.createElement('button');
  genBoardBtn.id = 'generate-board';
  genBoardBtn.innerText = 'VQV';
  genBoardBtn.style.backgroundColor = 'black';
  genBoardBtn.style.color = 'white';
  genBoardBtn.style.borderRadius = '10px';
  btnSection.appendChild(genBoardBtn);
}

function checkInput(value) {
  if (value < 5) {
    value = 5;
  }
  if (value > 50) {
    value = 50;
  }
  return value;
}

function generateBoard() {
  let inputValue = document.querySelector('#board-size').value;
  const pixelBoardDiv = document.querySelector('#pixel-board');
  inputValue = checkInput(inputValue);

  for (let index = 0; index < inputValue; index += 1) {
    const boardLine = document.createElement('div');
    boardLine.className = 'pixel-line';
    boardLine.style.display = 'table-row';
    pixelBoardDiv.appendChild(boardLine);

    for (let index2 = 0; index2 < inputValue; index2 += 1) {
      const boardColumn = document.createElement('div');
      boardColumn.className = 'pixel';
      boardColumn.style.display = 'table-cell';
      boardLine.appendChild(boardColumn);
    }
  }
}

function generateBoardBtn() {
  const button = document.getElementById('generate-board');
  button.addEventListener('click', function () {
    const inputValue = document.querySelector('#board-size').value;
    if (!inputValue) {
      alert('Board inválido!');
    } else {
      const pixelBoardDiv = document.querySelector('#pixel-board');
      pixelBoardDiv.querySelectorAll('*').forEach((n) => n.remove());
      generateBoard();
      colorPixel();
    }
  });
}

function generateColor() {
  const blackSquare = document.querySelector('.black');
  blackSquare.style.backgroundColor = 'black';
  const whiteSquare = document.querySelector('.white');
  whiteSquare.style.backgroundColor = 'white';
  const colorSquares = document.querySelectorAll('.color');
  for (let index = 1; index < colorSquares.length - 1; index += 1) {
    colorSquares[index].style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  }
}

window.onload = function () {
  createBtn();
  createInput();
  createGenBoardBtn();
  generateColor();
  generateBoard();
  generateBoardBtn();
  selectColor();
  colorPixel();
  clearBoard();
};
