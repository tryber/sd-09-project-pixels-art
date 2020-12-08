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

    function setColorToPaint (evt) {
        if (evt.target.className) {
            let colorSelectedElementId = evt.target.id;
            changeClassSelectedElement(colorSelectedElementId);
            removePreviousSelectedElementClass(currentColorSelected);
            currentColorSelected = colorSelectedElementId; 
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
        let currentPixelBoard = document.querySelectorAll('.pixel-board-child');
        let pixelBoardLength = currentPixelBoard.length;
        let boardSizeValue = document.getElementById('board-size');
        boardSizeValue = parseInt(boardSizeValue, 10);
        if (boardSizeValue > 0) {
            designNewBoarder(boardSizeValue);
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