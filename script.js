let colorPallete = document.getElementsByClassName('color');
let pixelEcran = document.getElementsByClassName('pixel');
let chargedBrush = document.querySelector('.selected').classList[1];
console.log(chargedBrush)
// Mudança na cor do pincel -- 1° desabilita seletor anterior 2° gera novo seletor

for (let index = 0; index < colorPallete.length; index += 1) {    
    colorPallete[index].addEventListener('click', disableColor)    
    colorPallete[index].addEventListener('click', getColor)              
}
    
function disableColor() {
    document.querySelector('.selected').classList.remove('selected')
}

function getColor(clickButton) {
    let buttonPressed = clickButton.target;     

    if (buttonPressed === colorPallete[0]) {
        colorPallete[0].classList.add('selected')
    }
    else if (buttonPressed === colorPallete[1]) {
        colorPallete[1].classList.add('selected')
    }
    else if (buttonPressed === colorPallete[2]) {
        colorPallete[2].classList.add('selected')
    }
    else {
        colorPallete[3].classList.add('selected')
    }
}   

// Ação de pintar
for (let index = 0; index < pixelEcran.length; index += 1) {    
    pixelEcran[index].addEventListener('click', singlePixel)
}
    function singlePixel(clickPixel) {
        let selectedPixel = clickPixel.target;
        selectedPixel.classList.add(chargedBrush);                      
    }

// Botão para limpar todos os pixels

let btnClear = document.getElementById('clear-board');
btnClear.addEventListener('click', clearEcran);

function clearEcran() {
    for (let index = 0; index < pixelEcran.length; index += 1) {
        pixelEcran[index].style.backgroundColor = 'white';        
    }
}
///2° Ação de escolher a cor (muito mais bonita que a exigida pelo avaliador)

