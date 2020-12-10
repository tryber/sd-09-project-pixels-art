function coloringTheColorPalette() {
  const colorsPalette = document.querySelectorAll('.color');
  colorsPalette[0].style.backgroundColor = 'black';
  colorsPalette[1].style.backgroundColor = 'yellow';
  colorsPalette[2].style.backgroundColor = 'hotpink';
  colorsPalette[3].style.backgroundColor = 'green';
}

function selectingAndRemovingColor(event) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected')
}

function designingTheColorPalette() {
  const designsPalette = document.querySelectorAll('.color');
  for (let index = 0; index < designsPalette.length; index += 1) {
    designsPalette[index].style.display = 'inline-block';
    designsPalette[index].style.borderColor = 'black';
    designsPalette[index].style.borderStyle = 'solid';
    designsPalette[index].style.borderWidth = '1px';
    designsPalette[index].style.height = '60px';
    designsPalette[index].style.width = '60px';
    designsPalette[index].style.borderRadius = '10px';
    designsPalette[index].style.margin = 'auto';
    designsPalette[index].addEventListener('click', selectingAndRemovingColor);
  }
}

function coloringBoard() {
}

function drawBoard() {
  const boardPixel = document.querySelector('#pixel-board');
  for (let index = 0; index < 5; index += 1) {
    const linePixel = document.createElement('div');
    linePixel.className = 'line-pixel';
    boardPixel.appendChild(linePixel);
    for (let pxindex = 0; pxindex < 5; pxindex += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      linePixel.appendChild(pixel);
    }
  }
}

window.onload = () => {
  coloringTheColorPalette();
  designingTheColorPalette();
  drawBoard();
}
