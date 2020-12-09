window.onload = function() {
    let blackSquare = document.querySelector('.color');
    blackSquare.className = 'color selected';

    let palletColor = document.getElementsByClassName('color');
    palletColor[0].style.backgroundColor = 'black';

    let pixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixels.length; index += 1){
        pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }

    // creates random colors for the #color-palette
    for (let index = 1; index < palletColor.length; index += 1){
        palletColor[index].style.backgroundColor = `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`;
    }
};

function removeColorSelection(){
    let colorPalette = document.querySelector('#color-palette');
    colorPalette.addEventListener('click', function(event){
        let colorSelected = document.querySelector('.selected');
        colorSelected.className = 'color';
    });
};

removeColorSelection()

function selectColor(){
    let colorSelected = document.querySelector('.color', '.selected');
    colorSelected.className = 'color';
    let colorPalette = document.querySelector('#color-palette');
    colorPalette.addEventListener('click', function(event){
        let eventClass = event.target.className;
        if (eventClass !== ''){
            event.target.className = 'color selected';
        }        
    });
};

selectColor();

function coloringPixel(){
    let pixelBoard = document.querySelector('#pixel-board');
    let selectedColor = document.getElementsByClassName('color selected');
    let color = window.getComputedStyle(selectedColor[0], null).getPropertyValue("background-color");
    pixelBoard.addEventListener('click', function(event){
        event.target.style.backgroundColor == color;
    });
}

coloringPixel();