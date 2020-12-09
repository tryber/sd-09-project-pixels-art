window.onload = function () {
    let currentColorSelected = 'black';
    let colorPalette = document.getElementById('color-palette');
    colorPalette.addEventListener('click', setColorToPaint);
    let pixelBoard = document.getElementById('pixel-board');
    pixelBoard.addEventListener('click', changePixelColor);
    let clearButton = document.getElementById('clear-board');
    clearButton.addEventListener('click', clearPixelBoard);
    let boardCreatorButton = document.getElementById('generate-board');
    boardCreatorButton.addEventListener('click', createCustomPixelBoarder);
    let boardSizeInput = document.getElementById('board-size');
    boardSizeInput.addEventListener('change', numbersInputValidator);

    function numbersInputValidator () {
        let typedNumber = boardSizeInput.value;
        if (typedNumber === '') {
            alert('Board inválido!');
        }
        typedNumber = parseInt(typedNumber, 10);
        if (typedNumber < 5) {
            boardSizeInput.value = 5;
        }
        if (typedNumber > 50) {
            boardSizeInput.value = 50;
        }
    }

    function setColorToPaint (evt) {
        if (evt.target.className) {
            let colorSelectedElementId = evt.target.id;
            if (colorSelectedElementId !== currentColorSelected){
                changeClassSelectedElement(colorSelectedElementId);
                removePreviousSelectedElementClass(currentColorSelected);
                currentColorSelected = colorSelectedElementId;
            } 
        }   
    }

    function changePixelColor (evt) {
        if (evt.target.className === 'pixel') {
            let clickedElement = evt.target;
            clickedElement.style.backgroundColor = currentColorSelected;
        }
    }
    
    function clearPixelBoard () {
        let pixelBoard = document.getElementsByClassName('pixel');
        for (let index = 0; index < pixelBoard.length; index += 1) {
            pixelBoard[index].style.backgroundColor = 'white';            
        }
    }

    function createCustomPixelBoarder () {
        numbersInputValidator();
        let currentPixelBoard = document.querySelectorAll('.pixel-board-child');
        let currentPixelBoardLength = currentPixelBoard.length;
        let boardSizeValue = document.getElementById('board-size').value;
        boardSizeValue = parseInt(boardSizeValue, 10);
        designNewBoard(boardSizeValue, currentPixelBoardLength);
    }

    function designNewBoard(boardSize, currentBoardSize) {
        if (boardSize < 5) {
            removeLinesFromPixelBoard(currentBoardSize);
            currentBoardSize = 5;
            addLinesToPixelBoard(boardSize);
            return 0;
        }
        if (boardSize > 50) {
            removeLinesFromPixelBoard(currentBoardSize);
            currentBoardSize = 50;
            addLinesToPixelBoard(boardSize);
            return 1;
        }
        removeLinesFromPixelBoard(currentBoardSize);
        addLinesToPixelBoard(boardSize);
        currentBoardSize = boardSize;
        return 2;
    }

    function addLinesToPixelBoard(boardSize) {
        let pixelBoard = document.getElementById('pixel-board');
        for (let index = 0; index < boardSize; index += 1) {
            let newLine = document.createElement('div');
            newLine.className = 'pixel-board-child';
            addPixelsToLinesOfTheBoard(boardSize, newLine);
            pixelBoard.appendChild(newLine)
        }
    }

    function addPixelsToLinesOfTheBoard(pixelsToAdd, line) {
        for (let index = 0; index < pixelsToAdd; index += 1) {
            let newPixel = document.createElement('div');
            newPixel.className = 'pixel';
            newPixel.style.backgroundColor = 'white';
            line.appendChild(newPixel);
        }
    }

    function removeLinesFromPixelBoard(linesToRemove) {
        let pixelBoard = document.getElementById('pixel-board');
        for (let index = linesToRemove -1 ; index >= 0; index -= 1) {
            pixelBoard.removeChild(pixelBoard.children[0]);        
        }
    }

    function changeClassSelectedElement (elementId) {
        let element = document.getElementById(elementId);
        element.classList.add('selected');
    }

    function removePreviousSelectedElementClass (elementId) {
        let element = document.getElementById(elementId);
        element.classList.toggle('selected');
    }
}