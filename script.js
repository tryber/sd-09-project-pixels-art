window.onload = function() {
    createpixelElement(24)
}

function createpixelElement(pixelNumber) {
    for (index = 0; index < pixelNumber; index += 1) {
        let pai = document.getElementsByClassName('pixel-board')[0];
        let createPixel = document.createElement('div');
        createPixel.className = 'pixel';
        pai.appendChild(createPixel);
    }
}