function createDivs(inputValue, subDiv) {
  for (let index = 0; index < inputValue; index += 1) {
    const newPixel = document.createElement('div');
    newPixel.className = 'pixel white';
    subDiv.appendChild(newPixel);
  }
  return subDiv;
}

function checkSize(inputValue) {
  const minValueOfQtty = 5;
  const maxValueOfQtty = 50;
  let subDiv = document.createElement('div');
  subDiv.className = 'line-pixels';
  if (inputValue >= 5 && inputValue <= 50) {
    subDiv = createDivs(inputValue, subDiv);
  } else if (inputValue < minValueOfQtty) {
    subDiv = createDivs(minValueOfQtty, subDiv);
  } else {
    subDiv = createDivs(maxValueOfQtty, subDiv);
  }
  return subDiv;
}

function setNumberOfPixels() {
  const inputValue = parseInt(document.querySelector('#board-size').value, 10);
  return checkSize(inputValue);
}

function clearBoard(numberOfChilds) {
  const sectionOfBoard = document.querySelector('#pixel-board');
  for (let index = 0; index < numberOfChilds; index += 1) {
    sectionOfBoard.removeChild(sectionOfBoard.firstElementChild);
  }
}

function createLinesContents(qtty) {
  const sectionOfBoard = document.querySelector('#pixel-board');
  clearBoard(sectionOfBoard.children.length);
  for (let index = 0; index < qtty; index += 1) {
    sectionOfBoard.appendChild(setNumberOfPixels());
  }
}

function validator(inputValue, minValueOfQtty, maxValueOfQtty) {
  if (isNaN(inputValue)) {
    alert('Board inválido!');
  }
  if (inputValue >= 5 && inputValue <= 50) {
    createLinesContents(inputValue);
  } else if (inputValue < 5) {
    createLinesContents(minValueOfQtty);
  } else {
    createLinesContents(maxValueOfQtty);
  }
}

function setNumberOfLines() {
  const minValueOfQtty = 5;
  const maxValueOfQtty = 50;
  const inputValue = parseInt(document.querySelector('#board-size').value, 10);
  validator(inputValue, minValueOfQtty, maxValueOfQtty);
}


function clearBoardOfPixels() {
  const mainColor = 'white';
  const classPosition = 1;
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    const pixelPosition = pixels[index].classList[classPosition];
    pixels[index].className = pixels[index].className.replace(pixelPosition, mainColor);
  }
}

function removeAllSelections(divElements) {
  const replacePosition = 2;
  const lengthOfClassList = 3;
  for (let index = 0; index < divElements.length; index += 1) {
    if (divElements[index].classList.length === lengthOfClassList) {
      divElements[index].classList.remove(divElements[index].classList[replacePosition]);
    }
  }
  return divElements;
}

function changeSelectedColor(event) {
  const classSelected = ' selected';
  let divElements = document.querySelectorAll('#color-palette div');
  if (!(event.target.className === '' || event.target.className === null)) {
    divElements = removeAllSelections(divElements);
    const newTarget = event.target.className + classSelected;
    event.target.className = newTarget;
  }
  return divElements;
}

function changePixelColor(event) {
  if (!(event.target.className === '' || event.target.className === null)) {
    const colorPosition = 1;
    const selected = document.querySelector('.selected');
    const getColorPos = event.target.classList[colorPosition];
    const getColorToSet = selected.classList[colorPosition];
    event.target.className = event.target.className.replace(getColorPos, getColorToSet);
  }
}

function setBoardEvent() {
  const divElements = document.querySelector('#pixel-board');
  divElements.addEventListener('click', changePixelColor);
}

function setPaletteEvent() {
  const divElements = document.querySelector('#color-palette');
  divElements.addEventListener('click', changeSelectedColor);
}

function setEvents() {
  setPaletteEvent();
  setBoardEvent();
  const clearButton = document.querySelector('#clear-board');
  clearButton.addEventListener('click', clearBoardOfPixels);
  const generateBoardButton = document.querySelector('#generate-board');
  generateBoardButton.addEventListener('click', setNumberOfLines);
}

window.onload = function () {
  setEvents();
  setNumberOfLines();
};
