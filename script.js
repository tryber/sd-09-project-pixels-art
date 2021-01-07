function box() {
  const columns = 5;
  const line = 5;
  for (let index = 0; index < line; index += 1) {
    const pixelBoard = document.querySelector('#pixel-board');
    const createLine = document.createElement('div');
    for (let indexTwo = 0; indexTwo < columns; indexTwo += 1) {
      const createColumn = document.createElement('div');
      createColumn.className = 'pixel';
      createLine.appendChild(createColumn);
    }
    pixelBoard.appendChild(createLine);
  }
}
box();

function black() {
  const collorBlack = document.querySelector('.black');
  collorBlack.classList.add('selected');
}
black();

function colorSelected() {
  const classColor = document.querySelectorAll('color');
  for (let i = 0; i < classColor.length; i += 1) {
    classColor[i].addEventListener('click', function () {
      const classSelected = document.querySelectorAll('.selected')[0];
      classSelected.classList.remove('selected');
      classColor[i].classList.add('selected');
    });
  }
}
colorSelected();

function colorPixel() {
  const classPixel = document.querySelectorAll('.pixel');
  for (let indexPixel = 0; indexPixel < classPixel.length; indexPixel += 1) {
    classPixel[indexPixel].addEventListener('click', function () {
      const selectedBackground = window.getComputedStyle(document.querySelector('.selected')).backgroundColor;
      classPixel[indexPixel].style.backgroundColor = selectedBackground;
    });
  }
}
colorPixel();

function buttonClear() {
  const createButtonClean = document.createElement('button');
  createButtonClean.id = 'clear-board';
  createButtonClean.innerText = 'Limpar';
  const body = document.querySelector('body');
  const pixelBoard = document.querySelector('#pixel-board');
  body.insertBefore(createButtonClean, pixelBoard);

  const buttonClearBoard = document.querySelector('#clear-board');
  buttonClearBoard.addEventListener('click', function () {
    const pixelBoardClear = document.querySelectorAll('.pixel');
    for (let indexClear = 0; indexClear < pixelBoardClear.length; indexClear += 1) {
      pixelBoardClear[indexClear].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  });
}
buttonClear();
