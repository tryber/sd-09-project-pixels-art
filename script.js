
function box(){
    let contador = 5;
    for(let index = 0; index < contador; index+=1){
        let pixelBoard = document.querySelector('#pixel-board');
        let createDiv = document.createElement('div');        
        for(indexTwo = 0; indexTwo < contador; indexTwo +=1){
            let createLine = document.createElement('div');
            createLine.className = 'pixel';
            createDiv.appendChild(createLine);
        }
        pixelBoard.appendChild(createDiv);   
    }    
}
box()
