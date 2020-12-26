listenToColorPaletteSection();
listenToPixelBoardTable();
listenToClearBoardButton();

function listenToColorPaletteSection () {
    const colorPaletteSection = document.querySelector('#color-palette')

    colorPaletteSection.addEventListener('click', toggleSelectedClass)
    colorPaletteSection.addEventListener('click', paintThePixelBoardTable)
}

function toggleSelectedClass (event) {
    const colorDivsNodeList = document.querySelectorAll('.color')

    for (let i = 0; i < colorDivsNodeList.length; i++) {
        colorDivsNodeList[i].classList.remove('selected')
    }
    
    event.target.classList.add('selected')
}

function listenToPixelBoardTable () {
    const pixelBoardTable = document.querySelector('#pixel-board')

    pixelBoardTable.addEventListener('click', paintPixel)
}

function paintPixel (event) {
    const eventTargetStyle = event.target.style
    const selectedColor = document.querySelector('.selected')

    if (event.target.className === 'pixel') {
        eventTargetStyle.backgroundColor = selectedColor.id
    }
}

function paintThePixelBoardTable () {
    const pixelBoardTable = document.querySelector('#pixel-board')
    const selectedColor = document.querySelector('.selected')

    pixelBoardTable.style.backgroundColor = selectedColor.id
}

function listenToClearBoardButton () {
    const clearBoardButton = document.querySelector('#clear-board')

    clearBoardButton.addEventListener('click', clearPixelBoard)
}

function clearPixelBoard () {
    const pixelTdsNodeList = document.querySelectorAll('.pixel')
    
    for (let i = 0; i < pixelTdsNodeList.length; i++) {
        pixelTdsNodeList[i].style.backgroundColor = 'white'
    }
}