// Step 2 & 3
function setPalletColors() {
  const color1 = document.querySelector('.color');
  const color2 = color1.nextElementSibling;
  const color3 = color2.nextElementSibling;
  const color4 = document.querySelector('#color-palette').lastElementChild;

  color1.style.background = 'black';
  color2.style.background = randomColors();
  color3.style.background = randomColors();
  color4.style.background = randomColors();
}

setPalletColors();

// Step 12 - random colors
function randomColors() {
  const randomColor = `rgb(${setRandomNumber()} ,${setRandomNumber()},${setRandomNumber()})`;
  return randomColor;
}

function setRandomNumber() {
  let randomNumber = parseInt(Math.random() * 1000, 10);
  while (randomNumber > 255) {
    randomNumber = Math.random() * 1000;
    if (randomNumber <= 255) {
      break;
    }
  }
  return randomNumber;
}

// Step 4 & 5
// Steps done in index.html and style.css documents

// Step 6 & 7
function selectColor() {
  const myColors = document.querySelectorAll('.color');
  let colorSelected = myColors[0];
  for (const color of myColors) {
    color.addEventListener('click', (event) => {
      colorSelected.className = 'color';
      event.target.className = 'color selected';
      return (colorSelected = event.target);
    });
  }
}

selectColor();

// Step 8
function changePixelColor() {
  const myPixelArray = document.querySelectorAll('.pixel');
  for (const pixel of myPixelArray) {
    pixel.addEventListener('click', (event) => {
      const colorSelected = document.getElementsByClassName('color selected')[0].style.background;
      return (event.target.style.background = colorSelected);
    });
  }
}

changePixelColor();

// Step 9
function resetColors(pixelArray) {
  for (const pixel of pixelArray) {
    pixel.style.background = 'white';
  }
}

function resetButton() {
  const myButton = document.querySelector('#clear-board');
  const pixelArray = document.querySelectorAll('.pixel');
  myButton.addEventListener('click', () => {
    resetColors(pixelArray);
  });
}

resetButton();

// Step 10 & 11 - Make the pixels board size be set by user
function verifyInputValue() {
  let inputValue = Number(document.querySelector('input').value);
  if (inputValue === 0) {
    return alert('Board inválido!');
  }
  if (inputValue < 5) {
    alert('ATENÇÃO! MENOR VALOR É 5!');
    inputValue = 5;
    return inputValue;
  }
  if (inputValue > 50) {
    alert('ATENÇÃO! MAIOR VALOR É 50!');
    inputValue = 50;
    return inputValue;
  }
  return inputValue;
}

function setNewPixelBoard() {
  const generateButton = document.querySelector('#generate-board');
  const inputLine = document.querySelector('input');
  generateButton.addEventListener('click', () => {
    document.querySelector('#pixel-board').remove();
    const input = verifyInputValue();
    const newPixelBoard = setNewMatrix(input);
    document.body.insertBefore(newPixelBoard, document.body.childNodes[7]);
    changePixelColor();
    resetButton();
    inputLine.value = '';
  });
  inputLine.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      document.querySelector('#pixel-board').remove();
      const input = verifyInputValue();
      const newPixelBoard = setNewMatrix(input);
      document.body.insertBefore(newPixelBoard, document.body.childNodes[7]);
      changePixelColor();
      resetButton();
      document.querySelector('input').value = '';
    }
  });
}

setNewPixelBoard();

function setNewPixel() {
  const newPixel = document.createElement('div');
  newPixel.className = 'pixel';
  return newPixel;
}

function setNewMatrixRow(inputValue) {
  const newMatrixRow = document.createElement('div');
  newMatrixRow.className = 'table-row';
  for (let element = 0; element < inputValue; element += 1) {
    const newPixel = setNewPixel();
    newMatrixRow.appendChild(newPixel);
  }
  return newMatrixRow;
}

function setNewMatrix(inputValue) {
  const newMatrix = document.createElement('div');
  newMatrix.id = 'pixel-board';
  for (let element = 0; element < inputValue; element += 1) {
    const newMatrixRow = setNewMatrixRow(inputValue);
    newMatrix.appendChild(newMatrixRow);
  }
  return newMatrix;
}
