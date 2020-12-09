function addPaletteColor() {
  const elementHolder = document.querySelector('#color-palette');
  const colors = {
    1: 'rgb(0, 0, 0)',
    2: 'rgb(114, 87, 87)',
    3: 'rgb(219, 86, 219)',
    4: 'rgb(30, 144, 255)',
  };
  for (let index = 1; index <= Object.keys(colors).length; index += 1) {
    const newElement = document.createElement('div');
    newElement.className = 'color box';
    newElement.style.backgroundColor = colors[index];
    elementHolder.appendChild(newElement);
  }
}
addPaletteColor();

function createPixelBoard(sizeBoard) {
  const elementHolder = document.querySelector('#pixel-board');
  for (let indexRow = 0; indexRow < sizeBoard; indexRow += 1) {
    const divRow = document.createElement('div');
    divRow.className = 'pixelBoardRow';
    for (let indexCol = 0; indexCol < sizeBoard; indexCol += 1) {
      const divCol = document.createElement('div');
      divCol.className = 'pixel box';
      divRow.appendChild(divCol);
    }
    elementHolder.appendChild(divRow);
  }
}
createPixelBoard(5);

function changeColor() {
  const colorPaleteAll = document.querySelector('#color-palette').children;
  colorPaleteAll[0].className += ' selected';
  for (let index1 = 0; index1 < colorPaleteAll.length; index1 += 1) {
    colorPaleteAll[index1].addEventListener('click', function (event) {
      for (let index2 = 0; index2 < colorPaleteAll.length; index2 += 1) {
        colorPaleteAll[index2].className = 'color box';
      }
      event.target.className = 'color box selected';
    });
  }
}
changeColor();

function paintPixel() {
  const colorPaleteAll = document.querySelector('#color-palette').children;
  const pixelsBoardAll = document.querySelectorAll('.pixel');
  for (let index1 = 0; index1 < pixelsBoardAll.length; index1 += 1) {
    pixelsBoardAll[index1].addEventListener('click', function (event) {
      for (let index2 = 0; index2 < colorPaleteAll.length; index2 += 1) {
        if (colorPaleteAll[index2].className === 'color box selected') {
          event.target.style.backgroundColor = colorPaleteAll[index2].style.backgroundColor;
        }
      }
    });
  }
}
paintPixel();

function clearButton() {
  const elementHolder = document.querySelector('#color-palette');
  const pixelsBoardAll = document.querySelectorAll('.pixel');
  const newelement = document.createElement('button');
  newelement.id = 'clear-board';
  newelement.className = 'buttonClear';
  newelement.innerText = 'Limpar';
  newelement.addEventListener('click', function () {
    for (let index = 0; index < pixelsBoardAll.length; index += 1) {
      pixelsBoardAll[index].style.backgroundColor = 'white';
    }
  });
  const elementHolder2 = document.querySelector('.principal');
  const buttonClearRemove = document.querySelector('button#clear-board');
  if (buttonClearRemove != null) {
    elementHolder2.removeChild(buttonClearRemove);
  }
  elementHolder.insertAdjacentElement('afterend', newelement);
}
clearButton();

function CreateButtonSizePainel () {
  const elementHolder = document.querySelector('#clear-board');
  const formulary = document.createElement('form');
  formulary.id = 'myForm';
  const inputlabel = document.createElement('label');
  inputlabel.for = 'sizeOfElement';
  inputlabel.innerText = 'Digite o tamanho do painel: '
  const inputData = document.createElement('input');
  inputData.min = 0;
  inputData.max = 50;
  inputData.id = 'board-size';
  inputData.type = 'text';
  inputData.name = 'sizeOfElement';
  inputData.className = 'headerLinks';
  const buttonSubmit = document.createElement('button');
  buttonSubmit.type = 'submit';
  buttonSubmit.id = 'generate-board';
  buttonSubmit.className = 'headerButton';
  buttonSubmit.innerText = 'VQV';
  formulary.appendChild(inputlabel);
  formulary.appendChild(inputData);
  formulary.appendChild(buttonSubmit);
  elementHolder.insertAdjacentElement('afterend', formulary);
}
CreateButtonSizePainel();

function clearPixelBoard() {
  const pixelsBoard = document.querySelector('#pixel-board');
  const pixelsBoardRows = document.querySelectorAll('.pixelBoardRow');
  for (let index = 0; index < pixelsBoardRows.length; index += 1) {
    pixelsBoard.removeChild(pixelsBoardRows[index]);
  }
}

function createNewBoard(valueInput) {
  clearPixelBoard();
  createPixelBoard(valueInput);
  paintPixel();
  clearButton();
}

function minMaxBoardCreator(valueInput) {
  if (valueInput < 5) {
    createNewBoard(5);
  }
  if (valueInput > 50) {
    createNewBoard(50);
  }
  if (valueInput >= 5 && valueInput <= 50) {
    createNewBoard(valueInput);
  }
}

function verifyPainelNumber(valueInput) {
  if (!Number(valueInput)) {
    return alert('Board inválido!');
  }
  if (valueInput <= 0){
    return alert('Board inválido!');
  }
  minMaxBoardCreator(valueInput);
}

function changePainelSize() {
  const formulary = document.querySelector('#myForm');
  formulary.addEventListener('submit', function (event) {
    event.preventDefault();
    const sizePainel = event.target.sizeOfElement.value;
    verifyPainelNumber(sizePainel);
  });
}
changePainelSize();
