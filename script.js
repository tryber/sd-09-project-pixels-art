let board = document.querySelector('#pixel-board');
let colorsTable = document.querySelector('#color-palette');
let pixels = document.querySelector('#pixel-board');
var color = '';

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

let colorSaved = colorsTable.addEventListener('click', catchColor);
function catchColor (){
    console.log(event.srcElement.id);
    color = event.srcElement.id;
}
pixels.addEventListener('click', function (event){
    console.log(event);
    let paintPxl = event.target;
    paintPxl.style.backgroundColor = colorSaved;
    event.target.style.backgroundColor = color;
})