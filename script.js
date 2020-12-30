const colorTable = ['Gray', 'SlateBlue', 'Navy', 'DeepSkyBlue', 'SteelBlue', 'DarkTurquoise', 'DarkGreen', 'Olive', 'SaddleBrown', 'Indigo', 'HotPink', 'Red', 'Orange', 'Yellow'];
let colorPallet = ['Black'];
let colorAux;

/* Funcoes */

function findColor (selectedColors, sortColor) {
  let result = false;
  for (let index = 0; index < selectedColors.length; index += 1) {
    if (selectedColors[index] === sortColor) {
      result = true;
    }
  }
  return result;
}

/* Inicio do programa */

const colorsPaint = document.querySelector('#color-palette');
for (let colorIndex = 1; colorIndex < 4; colorIndex += 1) {
  do {
    colorAux = colorTable[Math.floor(Math.random() * colorTable.length)];
  } while (findColor(colorPallet, colorAux));
  colorPallet.push(colorAux);
  const colors = document.createElement('div');
  colors.id = colorAux;
  colors.className = 'color';
  colors.style.backgroundColor = colorAux;
  colors.style.border = '1px solid black';
  colorsPaint.appendChild(colors);
  

}


const selectColor = document.querySelector('#color-palette');
selectColor.addEventListener('click', function (colorBase) {
  let prevSelectColor = document.querySelector('.selected');
  prevSelectColor.className = 'color';
  colorBase.target.className += ' selected';
});

const selectPixel = document.querySelector('#pixel-board');
selectPixel.addEventListener('click', function (pixelSelected) {
  const  currentColor = document.querySelector('.selected');
  pixelSelected.target.style.backgroundColor = currentColor.id;
});

const btnClear = document.querySelector('#clear-board');
btnClear.addEventListener('click', function (pressButton) {
  const clearPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < clearPixels.length; index += 1) {
    clearPixels[index].style.backgroundColor = 'white';
  }
});