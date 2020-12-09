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
  for (let index1 = 0; index1 < pixelsBoardAll.length; index1 += 1){
    pixelsBoardAll[index1].addEventListener('click', function (event) {
      for (let index2 = 0; index2 < colorPaleteAll.length; index2 += 1) {
        if (colorPaleteAll[index2].className === 'color box selected') {
          event.target.style.backgroundColor = colorPaleteAll[index2].style.backgroundColor;
        }
      }
    })
  }
}
paintPixel();

function clearButton() {
  const elementHolder = document.querySelector('#color-palette');
  let pixelsBoardAll = document.querySelectorAll('.pixel');
  const newelement = document.createElement('button');
  newelement.id = 'clear-board';
  newelement.className = 'buttonClear'
  newelement.innerText = 'Limpar';
  newelement.addEventListener('click', function () {
  for (let index = 0; index < pixelsBoardAll.length; index += 1) {
    pixelsBoardAll[index].style.backgroundColor = 'white';
  }
  });
  elementHolder.insertAdjacentElement('afterend', newelement);
}
clearButton();
