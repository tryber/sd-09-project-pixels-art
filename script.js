
// let body = document.body;
// let frameSquare = document.createElement('div');
// frameSquare.className = 'pixel-board'

// body.appendChild(frameSquare);

// for (let i=0 ; i < 5 ; i+=1) {
//     let lines = document.createElement('div');
//     frameSquare.appendChild(lines)

//     for (let i=0 ; i < 5 ; i+=1) {
//         let squareInLine = document.createElement('div');
//         squareInLine.className='pixels';
//         lines.appendChild(squareInLine);
//     }
// }

function selectedColor () {
    let cColor = document.getElementsByClassName('color');
    let cSelectedColor = document.getElementsByClassName('selected color');

    for ( let count = 0 ; count < cColor.length ; count +=1 ) {
        cColor[count].addEventListener ('click' , function(event) { 
            for ( let cnt = 0 ; cnt < cSelectedColor.length ; cnt +=1 ) {
                cSelectedColor[cnt].classList.remove ('selected');
            }

            event.target.classList.add ('selected')

        })
    }
}

selectedColor()