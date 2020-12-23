window.onload = function () {
  const chngClr = document.querySelectorAll('.color');
  const paletteRed = document.querySelector('.red');
  function changeColorToRed() {
    for (let index = 0; index < chngClr.length; index += 1) {
      if (index !== 1) {
        chngClr[index].classList.remove('selected');
      } else {
        paletteRed.classList.add('selected');
      }
    }
  }
  const paletteBlue = document.querySelector('.blue');
  function changeColorToBlue() {
    for (let index = 0; index < chngClr.length; index += 1) {
      if (index !== 2) {
        chngClr[index].classList.remove('selected');
      } else {
        paletteBlue.classList.add('selected');
      }
    }
  }
  const paletteGreen = document.querySelector('.green');
  function changeColorToGreen() {
    for (let index = 0; index < chngClr.length; index += 1) {
      if (index !== 3) {
        chngClr[index].classList.remove('selected');
      } else {
        paletteGreen.classList.add('selected');
      }
    }
  }
  const paletteBlack = document.querySelector('.black');
  function changeColorToBlack() {
    for (let index = 0; index < chngClr.length; index += 1) {
      if (index !== 0) {
        chngClr[index].classList.remove('selected');
      } else {
        paletteBlack.classList.add('selected');
      }
    }
  }
  paletteRed.addEventListener('click', changeColorToRed);
  paletteBlue.addEventListener('click', changeColorToBlue);
  paletteGreen.addEventListener('click', changeColorToGreen);
  paletteBlack.addEventListener('click', changeColorToBlack);


  function paintPixel() {
    const pixelBoard = document.getElementById('pixel-board');
    pixelBoard.addEventListener('click', function (event) {
      const selectedColor = document.querySelector('.selected');
      let colr;
      if (selectedColor.classList[1] === 'red') {
        colr = 'red';
      } else if (selectedColor.classList[1] === 'blue') {
        colr = 'blue';
      } else if (selectedColor.classList[1] === 'green') {
        colr = 'green';
      } else {
        colr = 'black';
      }
      event.target.style.backgroundColor = colr;
    });
  }
  paintPixel();

  function minSizeBoard() {
    const minSize = document.getElementById('board-size');
    minSize.addEventListener('keyup', function () {
      if (minSize.value < 5) {
        alert('Board inválido!');
        minSize.value = '5';
      }
    });
  }
  minSizeBoard();

  function vqvButton(buttonName2) {
    const botao2 = document.querySelector('#clear');
    const newButton2 = document.createElement('button');
    const newButtonID2 = 'generate-board';
    const newButtonClass2 = 'generate-board';
    newButton2.innerHTML = buttonName2;
    newButton2.id = newButtonID2;
    newButton2.className = newButtonClass2;
    botao2.appendChild(newButton2);
  }
  vqvButton('VQV');
  const vqv = document.getElementById('board-size');
  const bttn1 = document.getElementById('generate-board');
  const divAvo = document.getElementById('pixel-board');
  function createBoard() {
    const vqvNumber = vqv.value;
    divAvo.innerHTML = '';
    for (let index = 0; index < vqvNumber; index += 1) {
      const newDivPai = document.createElement('div');
      const newDivPaiId = 'no-margin';
      const newDivPaiClass = 'no-margin';
      newDivPai.id = newDivPaiId;
      newDivPai.className = newDivPaiClass;
      divAvo.appendChild(newDivPai);
      for (let index2 = 0; index2 < vqvNumber; index2 += 1) {
        const newDivFilho = document.createElement('div');
        const newDivFilhoId = 'pixel';
        const newDivFilhoClass = 'pixel';
        newDivFilho.id = newDivFilhoId;
        newDivFilho.className = newDivFilhoClass;
        newDivPai.appendChild(newDivFilho);
      }
    }
  }
  bttn1.addEventListener('click', createBoard);
  createBoard();
  function clearPixelsButton(buttonName) {
    const botao = document.querySelector('#clear');
    const newButton = document.createElement('button');
    const newButtonID = 'clear-board';
    const newButtonClass = 'clear-board';
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    newButton.className = newButtonClass;
    botao.appendChild(newButton);
  }
  clearPixelsButton('Limpar');
  const bttn = document.querySelector('#clear-board');
  const color = 'white';
  function clearPixels() {
    const clr = document.querySelectorAll('.pixel');
    for (let index = 0; index < clr.length; index += 1) {
      clr[index].style.backgroundColor = color;
    }
  }
  bttn.addEventListener('click', clearPixels);
};
