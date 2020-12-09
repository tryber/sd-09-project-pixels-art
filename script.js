window.addEventListener('load',function() {
  arrayColors = (randomColor(3,255));
})
let arrayColorsValue = [];
function randomColor(numberOfColors,numberMaxRGB) {
  let arrayColors = ['rgb(0, 0, 0)'];
  for (let index = 1; index <= numberOfColors; index += 1){
    let createColor = {
      r: parseInt(Math.random() * numberMaxRGB),
      g: parseInt(Math.random() * numberMaxRGB),
      b: parseInt(Math.random() * numberMaxRGB),
    }
    arrayColors[index] = (`rgb(${createColor.r}, ${createColor.g}, ${createColor.b})`);
  }
  return arrayColors;
}

let arrayColors = randomColor(3,255);

function addPaletteColor() {
  const elementHolder = document.querySelector('#color-palette');
  for (let index = 0; index < arrayColors.length; index += 1) {
    const newElement = document.createElement('div');
    newElement.className = 'color box';
    newElement.style.backgroundColor = arrayColors[index];
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

function CreateButtonSizePainel() {
  const elementHolder = document.querySelector('#clear-board');
  const formulary = document.createElement('form');
  formulary.id = 'myForm';
  formulary.className = 'formContent';
  const inputlabel = document.createElement('label');
  inputlabel.for = 'sizeOfElement';
  inputlabel.innerText = 'Digite o tamanho do painel: ';
  const inputData = document.createElement('input');
  inputData.min = 1;
  inputData.id = 'board-size';
  inputData.type = 'number';
  inputData.name = 'sizeOfElement';
  inputData.className = 'inputElement';
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
  let sizeBoard = 0;
  if (valueInput <= 50) {
    if(valueInput < 5) {
      sizeBoard = 5;
      alert('Tamanho mínimo 5');
    }
    if (valueInput > 5) {
    sizeBoard = valueInput;
    }
  }
  else {
    sizeBoard = 50;
    alert('Tamanho máximo 50');
  }
  createNewBoard(sizeBoard);
}

function verifyPainelNumber(valueInput) {
  if (valueInput === '') {
    alert('Board inválido!');
  }
  else {
    minMaxBoardCreator(valueInput);
  }
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
