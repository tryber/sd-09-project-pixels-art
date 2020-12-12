window.onload = function() {
    let blackSquare = document.querySelector('.color');
    blackSquare.className = 'color selected';

    let palletColor = document.getElementsByClassName('color');
    palletColor[0].style.backgroundColor = 'black';

    //injects white background-color to .pixel div's
    let pixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixels.length; index += 1){
        pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }

    // injects random colors in .color div's
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


function coloringPixel() {
    let pixelBoard = document.querySelector('#pixel-board');
    pixelBoard.addEventListener('click', function(event){
        let color = document.querySelector('.selected');
        color = window.getComputedStyle(color, null);

        event.target.style.backgroundColor = color.backgroundColor;
    });
};

coloringPixel();

function clearBoard(){
    let button = document.querySelector('#clear-board');
    button.addEventListener('click', function(){
        let pixelsList = document.querySelectorAll('.pixel');
        for (let index = 0; index < pixelsList.length; index += 1){
            pixelsList[index].style.backgroundColor = 'white';
        }
    });
};

clearBoard();

function boardSize(){
    let sizeBtn = document.querySelector('#generate-board');
    sizeBtn.addEventListener('click', function(){
        let pixelBoard = document.querySelector('#pixel-board');
        let pixelArray = document.querySelectorAll('.pixel');        
        let size = document.querySelector('#board-size').value;
        if (size === ''){
            alert('Board inválido!');
        }else if (size > 50){
            size = 50;
            for(let index = 0; index < 50; index += 1){
                let pixel = document.createElement('div');
                pixel.className = 'pixel';
                pixel.style.backgroundColor = 'white';
                pixelBoard.appendChild(pixel);
            }
            pixelBoard.style.width = `${size * 42}px`;
            pixelBoard.style.height = `${size * 42}px`;
        } else if (size > 5){
            for (let index = 0; index < pixelArray.length; index += 1){
                pixelArray[index].parentNode.removeChild(pixelArray[index]);
            }
            let n = size * size;
            for (let index = 0; index < n; index += 1){
                let pixel = document.createElement('div');
                pixel.className = 'pixel';
                pixel.style.backgroundColor = 'white';
                pixelBoard.appendChild(pixel);
            }
            pixelBoard.style.width = `${size * 42}px`;
            pixelBoard.style.height = `${size * 42}px`;
        }
    });
};

boardSize();