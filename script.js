// Ação de pintar
function singlePixel(clickPixel) {
    let chargedBrush = document.querySelector('.selected').classList[1];
    let selectedPixel = clickPixel.target;
    selectedPixel.style.backgroundColor = chargedBrush;                           
}

function paint() {
    let pixelEcran = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixelEcran.length; index += 1) {    
        pixelEcran[index].addEventListener('click', singlePixel)
    }
}

// Gerar Quadro de Pixels
let btnGenBoard = document.getElementById('generate-board');
btnGenBoard.addEventListener('click', genBoard)

function genBoard() {
    let inputValue = document.getElementById('board-size').value;
    let table = document.getElementById('pixel-board');
        
    for (let line = 0; line < inputValue; line += 1) {
        let tr = document.createElement('tr')
        for (let column = 0; column < inputValue; column += 1) {
            let td = document.createElement('td');
            td.className = 'pixel'; 
            tr.appendChild(td)          
        }
        table.appendChild(tr)      
    } 
    paint()          
}

// Mudança na cor do pincel -- 1° desabilita seletor anterior 2° gera novo seletor
let colorPallete = document.getElementsByClassName('color');
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
 
// Botão para limpar todos os pixels

let btnClear = document.getElementById('clear-board');
btnClear.addEventListener('click', clearEcran);

function clearEcran() {
    let pixelEcran = document.getElementsByClassName('pixel')
    for (let index = 0; index < pixelEcran.length; index += 1) {
        pixelEcran[index].style.backgroundColor = 'white';        
    }
}