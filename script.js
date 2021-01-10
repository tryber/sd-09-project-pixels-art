// Botão para limpar todos os pixels

let btnClear = document.getElementById('clear-board');
btnClear.addEventListener('click', clearEcran);

function clearEcran(paintedPixel) {
    paintedPixel = document.getElementsByClassName('pixel');
    for (let index = 0; index < paintedPixel.length; index += 1) {
        paintedPixel[index].style.backgroundColor = 'white';        
    }
}

// Ação de pintar
 
let pixelEcran = document.getElementsByClassName('pixel');
for (let index = 0; index < pixelEcran.length; index += 1) {    
    pixelEcran[index].addEventListener('click', singlePixel)
    }

function singlePixel (clickPixel) {
    let selectedPixel = clickPixel.target;
    return selectedPixel.style.backgroundColor = 'black'
    }

// Ação selecionar cor

let colorSelected;
colorSelected.style.backgroundColor = 'black'






let pixelSelected = document.getElementsByClassName('selected')