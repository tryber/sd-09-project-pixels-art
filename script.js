
let body = document.body;
let frameSquare = document.createElement('div');
frameSquare.className = 'pixel-board'

body.appendChild(frameSquare);

for (let i=0 ; i < 5 ; i+=1) {
    let lines = document.createElement('div');
    frameSquare.appendChild(lines)

    for (let i=0 ; i < 5 ; i+=1) {
        let squareInLine = document.createElement('div');
        squareInLine.className='pixels';
        lines.appendChild(squareInLine);
    }
}