const boxColor = document.getElementsByClassName('color');
boxColor[0].style.backgroundColor = 'black';
boxColor[1].style.backgroundColor = 'cyan';
boxColor[2].style.backgroundColor = 'magenta';
boxColor[3].style.backgroundColor = 'yellow';

const pixelBoard = document.querySelector('#pixel-board')

for (let indexColumn = 0; indexColumn < 5; indexColumn += 1) {
    for (let indexLine = 0; indexLine < 5; indexLine += 1) {
        let pixelCell = document.createElement('div');
        pixelCell.className = 'pixel';
        pixelBoard.appendChild(pixelCell);  
    }
    let pixelBreak = document.createElement('br');
    pixelBoard.appendChild(pixelBreak);
}
