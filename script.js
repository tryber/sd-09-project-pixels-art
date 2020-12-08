let baseDoQuadro = 5;

function clearBoard(){
  let allPixels = document.querySelectorAll('.pixel');
  for (let item of allPixels) {
    item.style.backgroundColor = 'white';
  }
}

let clearButton = document.querySelector('#clear-board')
clearButton.addEventListener('click', function(target){
  clearBoard(target);
});


for (let idx = 0; idx < baseDoQuadro; idx += 1) {
  const newLine = document.createElement('div');
  newLine.className = 'linha';
  document.querySelector('#pixel-board').appendChild(newLine);
}

let minhasLinhas = document.querySelectorAll('.linha');
for (let idx = 0; idx < minhasLinhas.length ; idx += 1 ) {
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

