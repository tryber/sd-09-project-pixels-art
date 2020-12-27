	function generateBoard(x) {
    for(let i = 0; i < x; i += 1) {
      let row = document.createElement('div');
      row.className = 'line';
      for(let j = 0; j < x; j += 1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.addEventListener('click', paintPixel);
        row.appendChild(pixel);
      }
      pixelRow.appendChild(row);
    }
  }
  
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
    let lastSelectedColor = document.querySelector('.selected');
    lastSelectedColor.classList.remove('selected');
    chosenColor = actualColor.id; //altera o valor da cor selecionada
    actualColor.classList.add('selected');
  }

  function clearBoard () {
    let clearPixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < clearPixels.length; i += 1) {
      clearPixels[i].style.backgroundColor = clearPixel;
    }
  }

  function deleteCanvas() {
    let canvas = document.querySelector('#pixel-board');
    let canvasRows = document.querySelectorAll('.line');
    for (let i = 0; i < canvasRows.length; i += 1) {
      canvas.removeChild(canvasRows[i]);
    }
  }

  function genCustomBoard(size) {
    let userInput = document.querySelector('#board-size').value;
    size = userInput;
    if(!userInput) {
      alert('Board inválido!');
    }
    if(userInput < 5) {
      userInput = 5;
    }
    if(userInput > 50) {
      userInput = 50;
    }
    if(userInput) {
      console.log(userInput)
      deleteCanvas();
      generateBoard(userInput);
    }
  }

let pixelRow = document.getElementById('pixel-board');
let chosenColor = 'black';
let clearPixel = 'white';
let genBoardButton = document.querySelector('#generate-board');
genBoardButton.addEventListener('click', genCustomBoard);
let clearButton = document.querySelector('#clear-board');
    clearButton.addEventListener('click', clearBoard);

window.onload = function() {
  startPalette();
  generateBoard(5);
}