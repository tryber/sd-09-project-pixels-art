let board = document.querySelector('#pixel-board');
let colorsTable = document.querySelector('#color-palette');
let pixels = document.querySelector('#pixel-board');
var selected = document.querySelector('.selected');
var color = selected.style.backgroundColor;
var btnClear = document.querySelector('#clear-board');
//selected.classList = 'color selected';

//Codigo abaixo gera o quadro de pixels
function rowGenerator() {
    for (let i=0; i<5; i+=1){
        let pxl = document.createElement('div');
        pxl.className = 'row';
        board.appendChild(pxl);
    }
}
rowGenerator();

function pxlGenerator() {
    let rowBoard = document.querySelectorAll('.row');
    for (let i=0; i<5; i+=1){
        for (let j=0; j<5 ; j+=1){
            let pxl = document.createElement('div');
            pxl.className = 'pixel';
            rowBoard[i].appendChild(pxl);
        }
    }
}
pxlGenerator();

//Codigo a seguir executa o evento do click para escolher a cor e colorir
let colorSaved = colorsTable.addEventListener('click', catchColor);
function catchColor (){
    console.log(event.srcElement.id);
    console.log(color);
    color = event.srcElement.id;
    event.srcElement.className.pull = 'color selected';
    colorsTable.nextElementSibling.nameClass = 'color'

}
var color = 'black';
pixels.addEventListener('click', function (event){
    console.log(color);
    //let paintPxl = event.target;
    //paintPxl.style.backgroundColor = colorSaved;
    if (color !== 'black'){
        event.target.style.backgroundColor = color;
    } else {
        event.target.style.backgroundColor = 'black';
    }
})

//Codigo para o botao que limpa o quadro
btnClear.addEventListener('click',button)
function button() {
    var clrPixel = document.querySelectorAll('.pixel');
    for (let i=0; i<clrPixel.length; i++){
        clrPixel[i].style.backgroundColor = 'white';
    }
}