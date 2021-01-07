window.onload = function() {
    createPixelElement(25);
    clearBoard();
    let colorSelection = document.querySelector('#color-palette');
    colorSelection.addEventListener('click', function(event) {
        let colorSelected = '';
        colorSelected = event.target.className;
        colorSelected = colorSelected.replace(/color/gi, '');
        colorSelected = colorSelected.replace(/selected/gi, '');
        let formater = colorSelected + '';
        currentColor = formater;
        let actualSelectedColor = document.querySelector('.selected');
        if (actualSelectedColor) {
            actualSelectedColor.classList.remove('selected');
        }
        event.target.classList.add('selected');
        console.log(formater);
    })
}
let currentColor = 'black';

function createPixelElement(pixelNumber) {
    let pai = document.getElementById('pixel-board');
    for (index = 0; index < pixelNumber; index += 1) {
        let createPixel = document.createElement('div');
        createPixel.className = 'pixel';
        pai.appendChild(createPixel);
        createPixel.addEventListener('click', function(event) {
            event.target.style.backgroundColor = currentColor;
        })
    }
}

function clearBoard() {
    let caprtureButtom = document.querySelector('.button');
    caprtureButtom.addEventListener('click', function(event) {
        let paiPercorrer = document.getElementsByClassName('pixel')
        for (index = 0; index < paiPercorrer.length; index += 1) {
            let capturePixel = paiPercorrer[index];
            capturePixel.style.backgroundColor = 'white';
        }

        console.log(event.target);
    })
}