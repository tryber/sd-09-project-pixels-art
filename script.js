
function box(){
    let numberOfColumns = 5;
    let numberOfLine = 5;
    for(let index = 0; index < numberOfLine; index+=1){
        let pixelBoard = document.querySelector('#pixel-board');
        let createLine = document.createElement('div');        
        for(indexTwo = 0; indexTwo < numberOfColumns; indexTwo +=1){
            let createColumn = document.createElement('div');
            createColumn.className = 'pixel';
            createLine.appendChild(createColumn);
        }
        pixelBoard.appendChild(createLine);
    }    
}
box()

function firstSelected(){
    let firstSelected = document.querySelector('#black');
    firstSelected.classList.add('selected');
}
firstSelected();


function colorSelected(){
    let classColor = document.querySelectorAll('.color');
    for(let i=0; i<classColor.length; i+=1){
        classColor[i].addEventListener('click', function(){
            let classSelected = document.querySelectorAll('.selected')[0];
            classSelected.classList.remove('selected');
            classColor[i].classList.add('selected');
        });
    }
}
colorSelected();
