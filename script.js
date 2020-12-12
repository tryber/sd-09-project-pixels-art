//ME ESFORCEI E VOU CONSEGUIR
addColors();
addPixels();

    function addColors(){

const getColor1 = document.querySelector('#color-palette');
const getColor2 = document.querySelector('#color-palette');
const getColor3 = document.querySelector('#color-palette');
const getColor4 = document.querySelector('#color-palette');

let colorOne = document.createElement('div')
let colorTwo = document.createElement('div')
let colorThree = document.createElement('div')
let colorFour = document.createElement('div')

colorOne.className = 'color';
colorOne.innerHTML = 'Preto'
colorOne.style.background = 'black'

colorTwo.className = 'color';
colorTwo.innerHTML = 'Azul Escuro'
colorTwo.style.background = 'darkblue'

colorThree.className = 'color';
colorThree.innerHTML = 'Verde Escuro'
colorThree.style.background = 'darkgreen'

colorFour.className = 'color';
colorFour.innerHTML = 'Ciano Escuro'
colorFour.style.background = 'darkcyan'

getColor1.appendChild(colorOne)
getColor2.appendChild(colorTwo)
getColor3.appendChild(colorThree)
getColor4.appendChild(colorFour)
};
    function addPixels(){

        let getPixelBoard = document.querySelector("#pixel-board");

        for (let index = 1; index <= 25; index += 1){

            let pixel = document.createElement('div');
            pixel.innerHTML = "Vivo?"
            pixel.className = 'pixel'    

            getPixelBoard.appendChild(pixel);
        }
};