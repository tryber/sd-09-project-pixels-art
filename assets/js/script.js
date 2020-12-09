window.onload = function () {
  createColor();
  drawPixelBoard(5);

  
  for (let index = 0; index < pixelBoard.childElementCount; index += 1) {
    let boardLine = pixelBoard.children[index];
    for (let pixel = 0; pixel < boardLine.children.length; pixel += 1) {
      let paintPixel = pixelBoard.children[index].children[pixel]
      paintPixel.onclick = function() {
        paintPixel.style.backgroundColor = selectedColor;
      }
    }
  }
}

let pixelBoard = document.querySelector('#pixel-board');
function createColor() {
  let colorBox = document.querySelectorAll('.color');
  for (let index = 0; index < colorBox.length; index += 1) {
    let randomColor = []
    let rgbColors = 3
    for (let rgbIndex = 0; rgbIndex < rgbColors; rgbIndex += 1) {
      randomColor.push(Math.floor(Math.random() * 254))
    }
    colorBox[index].style.backgroundColor = 'rgb(' + randomColor + ')';
  }
  colorBox[0].style.backgroundColor = 'rgb(0 , 0 , 0)';
  colorBox[0].classList.add('selected');
}

function drawPixelBoard(lines) {
  let pixelBoard = document.querySelector('#pixel-board');
  for (let line = 1; line <= lines; line += 1) {
    let lineId = 'line' + line
    let newLine = document.createElement('tr')
    newLine.setAttribute('id', lineId)
    pixelBoard.appendChild(newLine)
    drawColumns(line, 5)
  }
}

function drawColumns(lineId, columns) {
  let line = document.querySelector('#line' + lineId);
  for (let lineColumn = 1; lineColumn <= columns; lineColumn += 1) {
    let newPixel = document.createElement('td')
    newPixel.setAttribute('class', 'pixel')
    line.appendChild(newPixel)
  }
}

let selectedColor = 'rgb(0 , 0 , 0)'
let colorBox = document.getElementsByClassName('color');
for (let index = 0; index < colorBox.length; index += 1) {
  colorBox[index].onclick = function () {
    colorBox[index].classList.add('selected')
    selectedColor = colorBox[index].style.backgroundColor;
    for (let box = 0; box < colorBox.length; box += 1) {
      if (colorBox[index] !== colorBox[box] && colorBox[box].classList.contains('selected')) {
        colorBox[box].classList.remove('selected')
      }
    }
  }
}

