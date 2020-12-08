window.onload = function () {
    let currentColorSelected = 'black';
    changeClassSelectedElement(currentColorSelected);
    let colorPalette = document.getElementById('color-palette');
    colorPalette.addEventListener('click', setColorToPaint);
    let pixelBoard = document.getElementById('pixel-board');
    pixelBoard.addEventListener('click', changePixelColor);
    let clearButton = document.getElementById('clear-board');
    clearButton.addEventListener('click', clearPixelBoard);
    let boardCreatorButton = document.getElementById('generate-board');
    boardCreatorButton.addEventListener('click', createCustomPixelBoarder);

    function setColorToPaint (evt) {
        let colorSelectedElementId = evt.target.id;
        changeClassSelectedElement(colorSelectedElementId);
        removePreviousSelectedElementClass(colorSelectedElementId);
        currentColorSelected = colorSelectedElementId;       
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
        let currentPixelBoard = document.getElementById('pixel-board');
        let pixelBoardLength = currentPixelBoard.length;
        console.log(pixelBoardLength);
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