
function createPalette() {
  const tablePaletteLocation = document.querySelector('#color-palette')


  for (let index = 0; index < 4; index += 1) {
 
    let green = ['rgb(0, 0, 0)', 'rgb(255, 0, 0)', 'rgb(0, 0, 255)', 'rgb(222, 184, 135)']

    const createSquareColorPalette = document.createElement('td')
    createSquareColorPalette.className = 'colorPalette'
    createSquareColorPalette.style.backgroundColor = green[index]

    tablePaletteLocation.appendChild(createSquareColorPalette)
  }

}

createPalette()

function createTable() {
  const tablePixelLocation = document.querySelector('#pixel-board')

  for (let index = 0; index < 23; index += 1) {
    const createPixelLine = document.createElement('tr')
    createPixelLine.className = 'line'
  
    tablePixelLocation.appendChild(createPixelLine)

    for (let index = 0; index < 23; index += 1) {
      const createPixelColumn = document.createElement('td')
      createPixelColumn.className = 'pixel'

      createPixelLine.appendChild(createPixelColumn)
    }
  }
}

createTable()

function selectColor() {
  const paletteListener = document.querySelector('#color-palette')

  paletteListener.addEventListener('click', function(event) {
    
    const colorSelectedOld = document.querySelector('.selected')
    
    if (event.target.classList.contains('colorPalette') === true) {

      if (document.querySelector('.selected') !== null) {
        colorSelectedOld.classList.remove('selected')
      }

      const colorSelected = event.target
      colorSelected.classList.add('selected')
    }
  })
}

selectColor()




function assignColor() {
  const selectedPixelListener = document.querySelector('#pixel-board')
  
  selectedPixelListener.addEventListener('click', function(event) {
    const selectedColorOnPalette = document.querySelector('.selected')
    const selectedPixel = event.target

    if(selectedPixel.classList[1] === 'painted') {
      selectedPixel.className = 'pixel'
      selectedPixel.style.backgroundColor = ''
    } else {
      if(selectedColorOnPalette !== null && selectedPixel.classList[0] === 'pixel') {
        selectedPixel.style.backgroundColor = selectedColorOnPalette.style.backgroundColor
        selectedPixel.classList.add('painted')
      }
    }
  })
}

assignColor()



/*

for (let index = 0; index < 4; index += 1) {
    const createSquareColorPalette = document.createElement('td')

    createSquareColorPalette.classList('colorPalette')

    let insertChild = tableLocation.appendChild(createSquareColorPalette)
  }


// Selecionar Cor
function colorSelected() {
  const colorOfpalette = document.querySelector('#color-palette');

  colorOfpalette.addEventListener('click', function (event) {
    // Remover ".selected" anterior
    const initialColor = document.querySelector('.selected');
    initialColor.classList.remove('selected');

    // Colocar o ".selected" na cor clicada
    const newSelected = event.target;
    newSelected.classList.add('selected');
  });
}
colorSelected();

// Pintar Pixel
function paintPixel() {
  const selectedPixel = document.querySelector('#pixel-board');

  selectedPixel.addEventListener('click', function (event) {
    const selectedColor = document.querySelector('.selected').classList[1];

    const pixel = event.target;
    pixel.className = `pixel ${selectedColor}`;
  });
}
paintPixel();

// Limpar Painel
function clear() {
  const buttonClear = document.querySelector('#clear-board');

  buttonClear.addEventListener('click', function () {
    const clearPixel = document.querySelectorAll('.pixel');

    for (let index = 0; index < clearPixel.length; index += 1) {
      clearPixel[index].className = '.pixel .white';
    }
  });
}
clear();
*/
