
window.onload = function () {
    let pixelRow = document.getElementById("pixel-board");
    let canvasHeight = 5;
    let canvasWidth = 5;

    function createRows(){
        for(let i = 0; i < canvasHeight; i += 1) {
            let row = document.createElement('div');
            for(let j = 0; j < canvasWidth; j += 1) {
                let pixel = document.createElement('div');
                pixel.className = 'pixel';
                row.appendChild(pixel);
            }
            pixelRow.appendChild(row);
        }
    }
    createRows();
}