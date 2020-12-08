window.onload = function() {
    let pixelsColumns = 5;
    let boardLines = document.querySelectorAll('.board-line');
    let selectBlackColor = document.getElementById('black');
    let colorPalette = document.getElementById('color-palette');

    fillPixelBoard(boardLines);

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
            console.log(newSelection);
            lastSelected.className = 'color';
            newSelection.className += ' selected';
        });
    }

    selectColor();

}