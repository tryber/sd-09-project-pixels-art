let colorPallete = document.getElementsByClassName('color');
let colorSelected = document.querySelector('.selected').classList[1]

function colors() {
let pixelEcran = document.getElementsByClassName('pixel');

for (let index = 0; index < pixelEcran.length; index += 1) {    
    pixelEcran[index].addEventListener('click', singlePixel)
    }

function singlePixel(clickPixel) {
     let selectedPixel = clickPixel.target;
     selectedPixel.classList.add(colorSelected)
    }
}

    


function changeSelector() {
    for (let index = 0; index < colorPallete.length; index++) {    
    colorPallete[index].addEventListener('click', disableColor)           
}
function disableColor() {
    document.querySelector('.selected').classList.remove('selected')
}

///////////
function brush() {
    for (let index = 0; index < colorPallete.length; index++) {    
        colorPallete[index].addEventListener('click', getColor)               
    }
            function getColor(clickButton) {
            let buttonPressed = clickButton.target;     
        
            if (buttonPressed === colorPallete[0]) {
                colorPallete[0].classList.add('selected')
            }
            else if (buttonPressed === colorPallete[1]) {
                colorPallete[1].classList.add('selected')
            }
            else if (buttonPressed === colorPallete[2]) {
                colorPallete[2].classList.add('selected')
            }
            else if(buttonPressed === colorPallete[3]) {
                colorPallete[3].classList.add('selected')
            }
        }
    }
}






// Botão para limpar todos os pixels

let btnClear = document.getElementById('clear-board');
btnClear.addEventListener('click', clearEcran);

function clearEcran() {
    for (let index = 0; index < pixelEcran.length; index += 1) {
        pixelEcran[index].style.backgroundColor = 'white';        
    }
}
///2° Ação de escolher a cor (muito mais bonita que a exigida pelo avaliador)

