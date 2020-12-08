let board = document.querySelector('#pixel-board');

function rowGenerator(){
    for (let i=0; i<5; i+=1){
        let pxl = document.createElement('div');
        pxl.className = 'row';
        board.appendChild(pxl);
    }
}
rowGenerator();

function pxlGenerator(){
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