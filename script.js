function addPaletteColor() {
  let elementHolder = document.querySelector('#color-palette');
  let colors = {
    black: 'rgb(0, 0, 0)',
    brown: 'rgb(114, 87, 87)',
    pink: 'rgb(219, 86, 219)',
    dodgerblue: 'rgb(30, 144, 255)',
  };
  for (let item in colors) {
    let newElement = document.createElement('div');
    newElement.className = 'color box';
    newElement.style.backgroundColor = colors[item];
    elementHolder.appendChild(newElement);
  };
}
addPaletteColor();

function createPixelBoard(sizeBoard) {
  let elementHolder = document.querySelector('#pixel-board');
  for (let indexRow = 0; indexRow < sizeBoard; indexRow += 1) {
    let divRow = document.createElement('div');
    divRow.className = 'pixelBoardRow';
    for (let indexCol = 0; indexCol < sizeBoard; indexCol += 1) {
      let divCol = document.createElement('div');
      divCol.className = 'pixel box';
      divRow.appendChild(divCol);
      }
  elementHolder.appendChild(divRow);
  };
}
createPixelBoard(5);

function changeColor () {
  let colorPaleteAll = document.querySelector('#color-palette').children;
  colorPaleteAll[0].className += " selected";
  for (item of colorPaleteAll) {
    item.addEventListener('click', function (event) {
      for (item2 of colorPaleteAll) {
        item2.className = 'color box';
        }
      event.target.className = 'color box selected';
    });
  }
}
changeColor();

function paintPixel () {
  let colorPaleteAll = document.querySelector('#color-palette').children;
  let pixelsBoardAll = document.querySelectorAll('.pixel');
  for (item of pixelsBoardAll){
    item.addEventListener('click', function (event) {
      for (item of colorPaleteAll) {
        if (item.className === 'color box selected') {
          aa = event.target.style.backgroundColor = item.style.backgroundColor;
          console.log(aa);
        };
      };
    });
  };
}
paintPixel();
