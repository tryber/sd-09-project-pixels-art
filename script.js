function createDivColors(color) {
  if (color !== 'white') {
    let divColor = document.createElement('div');
    divColor.className = 'color';
    divColor.style.backgroundColor = color;

    let palette = document.querySelector('#color-palette');
    palette.appendChild(divColor);
  }
}
createDivColors('black');
createDivColors('orange');
createDivColors('green');
createDivColors('blue');

function createMatrixPixels() {
  const boardElement = document.querySelector('#pixel-board');

  for (let y = 1; y <= 5; y += 1) { // https://stackoverflow.com/questions/57836901/creating-chessboard-with-javascript
    let row = [];
    for (let x = 1; x <= 5; x += 1) {
      let cell = {};
      cell.element = document.createElement("div");
      cell.element.className = 'pixel';
      boardElement.appendChild(cell.element);
      row.push(cell);
    }
  }
}
createMatrixPixels();

function selectingColorBlack() {
  document.querySelectorAll('.color')[0].className = 'color selected';
}
selectingColorBlack();

function selectingAllColors() {
  let palette = document.querySelector('#color-palette');

  palette.addEventListener('click', function (e) {
    let selected = document.querySelector('.selected');
    selected.className = 'color';

    if (e.target.className == 'color') {
      e.target.className = 'color selected';
    }
  });
}
selectingAllColors();


