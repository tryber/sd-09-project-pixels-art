let baseDoQuadro = 5;
sessionStorage.selectedColor = 'black';


function clearBoard() {
  let allPixels = document.querySelectorAll('.pixel');
  for (let idx = 0; idx < allPixels.length; idx += 1) {
    allPixels[idx].style.backgroundColor = 'white';
  }
}

let clearButton = document.querySelector('#clear-board');
clearButton.addEventListener('click', function (target) {
  clearBoard(target);
});


for (let idx = 0; idx < baseDoQuadro; idx += 1) {
  const newLine = document.createElement('div');
  newLine.className = 'linha';
  document.querySelector('#pixel-board').appendChild(newLine);
}

let minhasLinhas = document.querySelectorAll('.linha');
for (let idx = 0; idx < minhasLinhas.length; idx += 1) {
  minhasLinhas[idx].style.height = '40px';
  minhasLinhas[idx].style.width = `${baseDoQuadro * 40}px`;
}

for (let idx = 0; idx < minhasLinhas.length; idx += 1) {
  for (let idx2 = 0; idx2 < baseDoQuadro; idx2 += 1) {
    const newPixel = document.createElement('div');
    newPixel.style.backgroundColor = 'white';
    newPixel.className = 'pixel';
    minhasLinhas[idx].appendChild(newPixel);
  }
}

const colorButtons = document.querySelectorAll('.color');

function removeColorButtonMarks () {
  for (let idx = 0; idx < colorButtons.length; idx += 1) {
    if (colorButtons[idx].classList.contains('selected')) {
      colorButtons[idx].classList.toggle('selected');
    }
  }
}

function selectColor(self) {
  removeColorButtonMarks();
  let selectedColor = self.target.style.backgroundColor;
  sessionStorage.selectedColor = selectedColor;
  self.target.classList.toggle('selected');
}

for (let idx = 0; idx < colorButtons.length; idx += 1) {
  colorButtons[idx].addEventListener('click', function(target) {
    selectColor(target);
  });
}

function colorPixel(self){
  self.target.style.backgroundColor = sessionStorage.selectedColor;
}

const myPixels = document.querySelectorAll('.pixel');

for (let idx = 0; idx < myPixels.length; idx += 1) {
  myPixels[idx].addEventListener('click', function(target) {
    colorPixel(target);
  });
}