function selectColor() {
  const selectedColors = document.getElementsByClassName('color selected');
  const colors = document.getElementsByClassName('color');

  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener ('click', function(event) {
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
  btnSection.appendChild(clearBtn);
}

function clearBoard() {
  const clearBtn = document.querySelector('#clear-board');
  clearBtn.addEventListener('click', function() {
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
  btnSection.appendChild(genBoardBtn);
}

function generateBoard() {
  const inputValue = document.querySelector('#board-size').value;
  const pixelBoardDiv = document.querySelector('#pixel-board');
  for (let index = 0; index < inputValue; index +=1) {
    const boardLine = document.createElement('div');
    boardLine.className = 'pixel-line';
    boardLine.style.display = 'table-row';
    pixelBoardDiv.appendChild(boardLine);
  }
  for (let index = 0; index < inputValue; index +=1) {
    const pixelLine = document.querySelectorAll('.pixel-line');
    for (let index = 0; index < pixelLine.length; index += 1) {
      const boardColumn = document.createElement('div');
      boardColumn.className = 'pixel';
      boardColumn.style.display = 'table-cell';
      pixelLine[index].appendChild(boardColumn);
    }
  }
}

function genBoardBtn() {
  const button = document.getElementById('generate-board');
  button.addEventListener('click', function() {
    const inputValue = document.querySelector('#board-size').value;
    if (!inputValue) {
      alert('Board inválido!')
    } else {
      const pixelBoardDiv = document.querySelector('#pixel-board');
      pixelBoardDiv.querySelectorAll('*').forEach(n => n.remove());
      generateBoard();
      colorPixel();
    }
  })
}

window.onload = function () {
  selectColor();
  colorPixel();
  createBtn();
  clearBoard();
  createInput();
  createGenBoardBtn();
  generateBoard();
  genBoardBtn();
};
