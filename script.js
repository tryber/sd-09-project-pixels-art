window.onload = function() {
    let pixelsColumns = 5;
    let boardLines = document.querySelectorAll('.board-line');
    let colorPalette = document.getElementById('color-palette');
    let selectedColor = 'black';
    let buttonClear = document.getElementById('clear-board')

    fillPixelBoard(boardLines);
    selectColor();

    function fillPixelBoard(boardLines) {
        for (let index = 0; index < boardLines.length; index += 1) {
            fillPixelBoardLine(boardLines[index]);
        }
    }

    function fillPixelBoardLine(lineToFill) {
        for (let index = 0; index < pixelsColumns; index += 1) {
            let pixel = createPixel('pixel');
            lineToFill.appendChild(pixel);
        }
    }

    function createPixel(className) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.backgroundColor = 'white';
        return pixel;
    }

    function selectColor() {
        colorPalette.addEventListener('click', function(event) {
            let lastSelected = document.querySelector('.selected');
            let newSelection = event.target;
            lastSelected.className = 'color';
            newSelection.className += ' selected';
            selectedColor = newSelection.id;
        });
    }

    function paintPixelWithColorSelected() {
        let pixelBoard = document.getElementById('pixel-board');

        pixelBoard.addEventListener('click', function(event) {
            if (event.target.className === 'pixel') {
                event.target.style.backgroundColor = selectedColor;
            }
        }); 
    }

    paintPixelWithColorSelected();

    function clearBoard() {
        let allPixels = document.querySelectorAll('.pixel')

        buttonClear.addEventListener('click', function() {
            for (let index = 0; index < allPixels.length; index += 1) {
                allPixels[index].style.backgroundColor = 'white';
            }
        });
    }

    clearBoard();
}
