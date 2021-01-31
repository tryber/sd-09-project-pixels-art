
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

function createTable() {
  const tablePixelLocation = document.querySelector('#pixel-board')

  for (let index = 0; index < 25; index += 1) {
    const createPixelLine = document.createElement('tr')
    createPixelLine.className = 'line'
  
    tablePixelLocation.appendChild(createPixelLine)

    for (let index = 0; index < 25; index += 1) {
      const createPixelColumn = document.createElement('td')
      createPixelColumn.className = 'pixel'

      createPixelLine.appendChild(createPixelColumn)
    }
  }
}

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

function clear() {
  const litenerButtonClear = document.querySelector('#clear-board')

  litenerButtonClear.addEventListener('click', function() {
    let tableSize = document.querySelectorAll('.pixel')
    
    for(let index = 0; index < tableSize.length; index += 1) {
      tableSize[index].style.backgroundColor = 'white'
    }
  
  })
}

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

window.onload(
  assignColor(),
  clear(),
  createPalette(),
  createTable(),
  selectColor()
)
