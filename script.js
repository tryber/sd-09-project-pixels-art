let colorPallete = document.getElementsByClassName('color');
let pixelEcran = document.getElementsByClassName('pixel');
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
    buttonPressed.classList.add('selected')   
 }   

// Ação de pintar
for (let index = 0; index < pixelEcran.length; index += 1) {    
    pixelEcran[index].addEventListener('click', singlePixel)
}
    function singlePixel(clickPixel) {
        let chargedBrush = document.querySelector('.selected').classList[1];
        let selectedPixel = clickPixel.target;
        selectedPixel.style.backgroundColor = chargedBrush                           
    }

// Botão para limpar todos os pixels

let btnClear = document.getElementById('clear-board');
btnClear.addEventListener('click', clearEcran);

function clearEcran() {
    for (let index = 0; index < pixelEcran.length; index += 1) {
        pixelEcran[index].style.backgroundColor = 'white';        
    }
}


