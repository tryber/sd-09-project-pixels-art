
window.onload = function () {
	let pixelRow = document.getElementById('pixel-board');
	let canvasHeight = 5;
  let canvasWidth = 5;   
  let chosenColor = 'black';
  let clearPixel = 'white';

	function createRows() {
    for(let i = 0; i < canvasHeight; i += 1) {
      let row = document.createElement('div');
      row.className = 'line';
      for(let j = 0; j < canvasWidth; j += 1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.addEventListener('click', paintPixel);
        row.appendChild(pixel);
      }
      pixelRow.appendChild(row);
    }
  }
  createRows();
  startPalette();
  
  function paintPixel(event) {
    event.target.style.backgroundColor = chosenColor; //refefine a cor de fundo do pixel clicado
  }

  function startPalette() {
    let colorOptions = document.querySelectorAll('.color');
    for(let i = 0; i < colorOptions.length; i += 1){
      colorOptions[i].addEventListener('click', selectedColor)
    }    
  }

  function selectedColor(event) {
    let actualColor = event.target;
    if(actualColor.className = 'color') {
      let lastSelectedColor = document.querySelector('.selected');
      lastSelectedColor.classList.remove('selected');
      actualColor.classList.add('selected');
      chosenColor = actualColor.id; //altera o valor da cor selecionada
    }
  }

  document.querySelector('#clear-board').onclick = function() {
    let clearPixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < clearPixels.length; i += 1) {
      clearPixels[i].style.backgroundColor = clearPixel;
    }
  }
}
