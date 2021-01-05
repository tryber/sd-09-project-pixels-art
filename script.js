
function board() {
    const numberOfColumns = 5;
    const numberOfLine = 5;
    for (let index = 0; index < numberOfLine; index+=1){
        let pixelBoard = document.querySelector('#pixel-board');
        let createLine = document.createElement('div');
        for(i = 0; i < numberOfColumns; i += 1){
            let createColumn = document.createElement('div');
            createColumn.className = 'pixel';
            createLine.appendChild(createColumn);
        }
        pixelBoard.appendChild(createLine);
    }
}
board()
function initialColor(){
    let initialColor = document.querySelector('#black');
    initialColor.classList.add('selected');
}
initialColor();
function choseCollor (){
    let pallet  = document.querySelectorAll('.color');
    for(let i=0; i<pallet .length; i +=1 ){
        pallet[i].addEventListener('click', function(){
            let colorOn  = document.querySelectorAll('.selected')[0];
            colorOn .classList.remove('selected');
            pallet[i].classList.add('selected');            
        });
    }
}
choseCollor ();

function changeColor(){
    let pixelSR = document.querySelectorAll('.pixel');
    for(let index = 0; index < pixelSR.length; index += 1){
        pixelSR[index].addEventListener('click', function(){
            let selectedBg = window.getComputedStyle(document.querySelector('.selected')).backgroundColor;
            pixelSR[index].style.backgroundColor = selectedBg;            
        });
    }
}
changeColor(); 
