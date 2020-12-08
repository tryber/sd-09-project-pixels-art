window.onload = function() {
  createColor();
  drawPixelBoard(5);
}
function createColor() {
  let colorBox = document.querySelectorAll('.color');
  for (let index = 1; index < colorBox.length; index += 1) {
    let randomColor = [];
    let rgbColors = 3;
    for (let index = 0; index < rgbColors; index += 1) {
      randomColor.push(Math.floor(Math.random()*254));
    }
    colorBox[index].style.backgroundColor = 'rgb('+randomColor+')';
  }
  colorBox[0].classList.add('selected');
}

function drawPixelBoard(lines) {
  let pixelBoard = document.querySelector('#pixel-board');
  for (let line = 1; line <= lines; line += 1) {
    let lineId = 'line'+line;
    let newLine = document.createElement('tr');
    newLine.setAttribute('id', lineId);
    pixelBoard.appendChild(newLine);
    drawColumns(line, 5);
  }
}

function drawColumns(lineId, columns) {
  let line = document.querySelector('#line'+lineId);
  for (let lineColumn = 1; lineColumn <= columns; lineColumn += 1) {
    //let pixelId = 'pixel'+ lineId +'.'+lineColumn;
    let newPixel = document.createElement('td');
    //newPixel.setAttribute('id', pixelId);
    newPixel.setAttribute('class', 'pixel');
    line.appendChild(newPixel);
  }
}