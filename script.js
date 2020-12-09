window.onload = function() {
    let pixelsMatrix = 5;
    let boardLines;
    let colorPalette = document.getElementById('color-palette');
    let selectedColor = 'black';
    let buttonClear = document.getElementById('clear-board');
    let pixelBoard = document.getElementById('pixel-board');
    let boardSizeInput = document.getElementById('board-size');
    let buttonGenerateBoard = document.getElementById('generate-board');

    checkSizeBoard();
    createBoard(pixelsMatrix);
    selectColor();

    function checkSizeBoard(pixelsComparation) {
        if (pixelsComparation > 50) return 50;
        if (pixelsComparation < 5) return 5; 
        return pixelsComparation;
    }

    function createBoard(linesQuantity) {
        createLines(linesQuantity);
        boardLines = document.querySelectorAll('.board-line');
        fillPixelBoard(boardLines);
    }

    function createLines(linesQuantity) {
        for (let index = 0; index < linesQuantity; index += 1) {
            let newLine = document.createElement('div');
            newLine.className = 'board-line';
            pixelBoard.appendChild(newLine);
        }
    }

    function fillPixelBoard(boardComuns) {
        for (let index = 0; index < boardComuns.length; index += 1) {
            fillPixelBoardLine(boardComuns[index]);
        }
    }

    function fillPixelBoardLine(lineToFill) {
        for (let index = 0; index < pixelsMatrix; index += 1) {
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
            lastSelected.classList.remove('selected');
            newSelection.classList.add('selected');
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

    function destructBoard() {
        pixelBoard = document.getElementById('pixel-board');
        boardLines = document.querySelectorAll('.board-line');
        for (let index = 0; index < boardLines.length; index += 1) {
            pixelBoard.removeChild(boardLines[index]);
        }
    }

    function gererateBoardNxN() {
        buttonGenerateBoard.addEventListener('click', function(){
            if (!boardSizeInput.value) alertEmptyInput();
            else {
                destructBoard();
                pixelsMatrix = checkSizeBoard(boardSizeInput.value);
                createBoard(pixelsMatrix);
            }
            boardSizeInput.value = pixelsMatrix;
        })
    }

    gererateBoardNxN();

    function alertEmptyInput() {
        alert('Favor colocar um numéro válido.')
    }
}
