
function changeSelected() {
  const paletteColors = document.getElementById('color-palette');
  paletteColors.addEventListener('click', function () {
    const palettes = document.querySelectorAll('.color');
    for (let index = 0; index < palettes.length; index += 1) {
      palettes[index].className = 'color';
    }
    event.target.className = 'color selected';
  });
}
changeSelected();

function paintPixel() {
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.addEventListener('click', function(event) {
    let pixel = document.getElementsByClassName('pixel');
    let selectedColor = document.querySelector('.selected')
    let colorPaint = selectedColor.id
    event.target.style.background = colorPaint;
    
  });
}
paintPixel()

function clearBoard() {
  let button = document.querySelector('#clear-board');
  button.addEventListener('click', function() {
    const pixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.background = 'white'
    }
  });
}
clearBoard()