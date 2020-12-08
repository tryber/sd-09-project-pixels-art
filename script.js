createColorPaletteElements();
createPixelBoardElements(5,5);

function createColorPaletteElements(){
    let colors = ['rgb(0,0,0)','rgb(46, 204, 113)', 'rgb(41, 128, 185)', 'rgb(231, 76, 60)'];
    let colorPallete = document.querySelector('#color-palette');
    for(let color of colors){
        let colorElement = document.createElement('div');
        colorElement.className = 'color';
        colorElement.style.backgroundColor = color;
        colorPallete.appendChild(colorElement);
    }
}

function createPixelBoardElements(x, y){
    let pixelBoard = document.querySelector('#pixel-board');
    for (let i = 0; i < y; i++){
        let line = fillLineElements(x);
        pixelBoard.appendChild(line);
    }

}

function fillLineElements(x){
    let line = document.createElement('div');
    line.className = 'pixel-board-line';
    for(let i = 0; i < x; i++){
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.backgroundColor = 'rgb(255, 255, 255)';
        line.appendChild(pixel);
    }
    return line;
}