
function box() {
    const numberOfColumns = 5;
    const numberOfLine = 5;
    for (let index = 0; index < numberOfLine; index+=1){
        let pixelBoard = document.querySelector('#pixel-board');
        let createLine = document.createElement('div');
        for(indexTwo = 0; indexTwo < numberOfColumns; indexTwo += 1){
            let createColumn = document.createElement('div');
            createColumn.className = 'pixel';
            createLine.appendChild(createColumn);
        }
        pixelBoard.appendChild(createLine);
    }
}
box()

function firstSelected(){
    let firstSelected = document.querySelector('.black');
    firstSelected.classList.add('selected');
}
firstSelected();


function colorSelected(){
    let classColor = document.querySelectorAll('.color');
    for(let i=0; i<classColor.length; i +=1 ){
        classColor[i].addEventListener('click', function(){
            let classSelected = document.querySelectorAll('.selected')[0];
            classSelected.classList.remove('selected');
            classColor[i].classList.add('selected');            
        });
    }
}
colorSelected();

function colorPixel(){
    let classPixel = document.querySelectorAll('.pixel');
    for(let indexPixel = 0; indexPixel < classPixel.length; indexPixel += 1){
        classPixel[indexPixel].addEventListener('click', function(){
            let selectedBackground = window.getComputedStyle(document.querySelector('.selected')).backgroundColor;
            classPixel[indexPixel].style.backgroundColor = selectedBackground;            
        });
    }
}
colorPixel();

function buttonClear(){
    let createButtonClean = document.createElement('button');
    createButtonClean.id = 'clear-board';
    createButtonClean.innerText = 'Limpar';
    const body = document.querySelector('body');
    const pixelBoard = document.querySelector('#pixel-board');
    body.insertBefore(createButtonClean, pixelBoard);

    const buttonClearBoard = document.querySelector('#clear-board');
    buttonClearBoard.addEventListener('click', function(){
        const pixelBoardClear = document.querySelectorAll('.pixel');
        for (let indexClear = 0; indexClear < pixelBoardClear.length; indexClear +=1){
            pixelBoardClear[indexClear].style.backgroundColor = 'rgb(255, 255, 255)';        
        }
    })    
}
buttonClear();
