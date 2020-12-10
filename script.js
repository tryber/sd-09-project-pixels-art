window.onload = function () {
  function colorPalette() {
    const color = document.querySelectorAll('.color');
    color[0].style.backgroundColor = 'black';
    color[1].style.backgroundColor = 'steelblue';
    color[2].style.backgroundColor = 'red';
    color[3].style.backgroundColor = 'yellow';
  }
  colorPalette();

  const pixelBoard = document.querySelector('#pixel-board');

  function createdPixelLine(line) {
    for (let index = 0; index < 5; index += 1) {
      const createdElement = document.createElement('div');
      createdElement.className = 'pixel';
      line.appendChild(createdElement);
    }
  }

  function createdPixelColumn() {
    for (let index = 0; index < 5; index += 1) {
        let line = document.createElement('div');
        line.className = 'line';
        pixelBoard.appendChild(line);
        createdPixelLine(line);
    }
  }
  createdPixelColumn();

  const paletteColor = document.querySelector('#color-palette').children;
    
  function clickPaletteColor() {
    for (let index = 0; index < paletteColor.length; index += 1)
        paletteColor[index].addEventListener('click', function(event) {
        let change = document.querySelector('.selected');
        change.className = 'color';
        event.target.className = 'color selected';
        })
    }
  clickPaletteColor();

  function fillColor() {
    let pixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixel.length; index += 1)
        pixel[index].addEventListener('click', function(event) {
        let selectedClass = document.querySelector('.selected');
        let colorSelected = selectedClass.style.backgroundColor;

        event.target.style.backgroundColor = colorSelected;
        })
    }
  fillColor();
}
