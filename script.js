window.onload = randomizeColorPalette()

listenToColorPaletteSection();
listenToPixelBoardTable();
listenToClearBoardButton();
listenToGenerateBoardButton();

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

function generateRandomColor () {
    const randomNumberList = []

    for (let i = 0; i < 3; i++) {
        randomNumberList.push(Math.round(Math.random() * 255))
    }

    const randomColor = `rgb(${randomNumberList[0]}, ${randomNumberList[1]}, ${randomNumberList[2]})`

    return randomColor
}

function randomizeColorPalette () {
    const colorDivsNodeList = document.querySelectorAll('.color')

    for (let i = 1; i < colorDivsNodeList.length; i++) {
        colorDivsNodeList[i].id = `${generateRandomColor()}`
        colorDivsNodeList[i].style.backgroundColor = colorDivsNodeList[i].id
    }
}

function listenToGenerateBoardButton () {
    const generateBoardButton = document.querySelector('#generate-board')

    generateBoardButton.addEventListener('click', generateBoard)
}

function removeTableRows () {
    const pixelBoardTableBody = document.querySelector('tbody')
    const tableRowsNodeList = document.querySelectorAll('#pixel-board tr')

    for (let i = 0; i < tableRowsNodeList.length; i++) {
        const currentRow = tableRowsNodeList[i]

        pixelBoardTableBody.removeChild(currentRow)
    }
}

function addTableRows (boardSideSize) {
    const pixelBoardTableBody = document.querySelector('tbody')

    for (let i = 0; i < boardSideSize; i++) {
        const tableRow = document.createElement('tr')

        pixelBoardTableBody.appendChild(tableRow)
    }
}

function addTableDatas (boardSideSize) {
    const tableRowsNodeList = document.querySelectorAll('#pixel-board tr')

    for (let i = 0; i < tableRowsNodeList.length; i++) {
        for (let j = 0; j < boardSideSize; j++) {
            const tableData = document.createElement('td')

            tableData.className = 'pixel'
            tableRowsNodeList[i].appendChild(tableData)
        }
    }
}

function generateBoard () {
    const boardSizeInput = document.querySelector('#board-size')
    const boardSizeInputValue = parseInt(boardSizeInput.value)

    if (!boardSizeInput.value) {
        window.alert('Board inválido!')
    } else {
        removeTableRows()
        addTableRows(boardSizeInputValue)
        addTableDatas(boardSizeInputValue)
    }
}