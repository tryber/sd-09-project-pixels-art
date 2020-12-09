window.onload = function () {
  createPixelsBoard();
  selectColor();
}

function createPixelsBoard() {
  const pixelBoard = document.querySelector('#pixel-board');
  const pixelColumn = 5;

  for (let indexLine = 0; indexLine < pixelColumn; indexLine += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.classList.add('pixel-line');

    for (let indexColumn = 0; indexColumn < pixelColumn; indexColumn += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixelLine.appendChild(pixel);
      // pixel.addEventListener('click', paintPixel(pixel))
    }
    pixelBoard.appendChild(pixelLine);
  }
}

function selectColor() {
  let selectColor = document.querySelectorAll('.color')
  for (index = 0; index < selectColor.length; index += 1) {
    selectColor[index].addEventListener('click', function() {
      for (othersIndex = 0; othersIndex < index; othersIndex += 1) {
        selectColor[othersIndex].classList.remove('selected')
      }
      this.classList.add('selected')
    })
  }
}
