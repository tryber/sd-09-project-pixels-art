// Botão para limpar todos os pixels

let btnClear = document.getElementById('clear-board');
btnClear.addEventListener('click', clearEcran);

function clearEcran(paintedPixel) {
    paintedPixel = document.getElementsByClassName('pixel');
    for (let index = 0; index < paintedPixel.length; index += 1) {
        paintedPixel[index].style.backgroundColor = 'white';        
    }
}

// 1° ação de pintar 
let pixelEcran = document.getElementsByClassName('pixel');

for (let index = 0; index < pixelEcran.length; index += 1) {    
    pixelEcran[index].addEventListener('click', singlePixel)
    }

function singlePixel (clickPixel) {
    let selectedPixel = clickPixel.target;
    return selectedPixel.style.backgroundColor = colorSelected
    }

/// 2° Ação de escolher a cor
let colorPallete = document.getElementsByClassName('color');
let colorSelected = 'black'
for (let index = 0; index < colorPallete.length; index++) {    
    colorPallete[index].addEventListener('click', getColor)              
}

function getColor (clickButton) {
    let buttonPressed = clickButton.target;
    
    if (buttonPressed === colorPallete[0]) {
        colorSelected = 'black'
    }
    else if (buttonPressed === colorPallete[1]) {
        colorSelected = 'red'
    }
    else if (buttonPressed === colorPallete[2]) {
        colorSelected = 'green'
    }
    else if(buttonPressed === colorPallete[3]) {
        colorSelected = 'blue'
    }
}






