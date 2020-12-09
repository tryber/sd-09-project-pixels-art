window.onload = function() {
  let pixelBoard = document.querySelector('#pixel-board');
  for (index = 0; index < 25; index += 1 ) {
    let pixel = document.createElement("div");
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }  
  randomColor()
}

function randomNumber() {
  let rn = Math.ceil(Math.random() * 255);
  return rn;
}
function randomColor() {
  let cp = document.querySelector('#color-palette');
  for (let index = 0; index < 3; index += 1) {
    let newDiv = document.createElement('div')
    newDiv.className = 'color'
    let rgb = `${randomNumber()}, ${randomNumber()}, ${randomNumber()}`;
    newDiv.id = `rgb(${rgb})`;
    newDiv.style.background = newDiv.id;
    cp.appendChild(newDiv)

  }
}

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

function sizeBoard() {
  let pixelBoard = document.querySelector('#pixel-board');
  while (pixelBoard.firstChild) {
  pixelBoard.removeChild(pixelBoard.firstChild);
  }
  defineNumber()
}

function defineNumber() {
  let number = document.getElementById('board-size').value;
  if (number === '' || number < 0) {
    alert('Board inválido!');
    number = 5;
  } else if (number < 5) {
    alert('Valor menor que 5, considerar 5 como padrão');
    number = 5;
  } else if (number > 50) {
    alert('Valor menor que 5, considerar 50 como padrão');
    number = 50;
  }
  newBoard(number)
}

function newBoard(number) {
  const numberTotal = number * number
  const pixelBoard = document.querySelector('#pixel-board');
  let area = number * 42
  pixelBoard.style.width = `${area}px`
  for (index = 0; index < numberTotal; index += 1 ) {
    let pixel = document.createElement("div");
    pixel.className = 'pixel';
    pixel.style.background = 'white';
    pixelBoard.appendChild(pixel);
  }  
}

function generatorBoard() {
  let generate = document.querySelector('#generate-board')
  generate.addEventListener('click', sizeBoard)
}
generatorBoard()

