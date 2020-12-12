function addColors (){

      const getColor1 = document.querySelector('#color-palette');
      const getColor2 = document.querySelector('#color-palette');
      const getColor3 = document.querySelector('#color-palette');
      const getColor4 = document.querySelector('#color-palette');

      const colorOne = document.createElement('div');
      const colorTwo = document.createElement('div');
      const colorThree = document.createElement('div');
      const colorFour = document.createElement('div');

      colorOne.className = 'color';
      colorOne.innerHTML = 'Preto';
      colorOne.style.background = 'black';

      colorTwo.className = 'color';
      colorTwo.innerHTML = 'Azul Escuro';
      colorTwo.style.background = 'darkblue';

      colorThree.className = 'color';
      colorThree.innerHTML = 'Verde Escuro';
      colorThree.style.background = 'darkgreen';

      colorFour.className = 'color';
      colorFour.innerHTML = 'Ciano Escuro';
      colorFour.style.background = 'darkcyan';

      getColor1.appendChild(colorOne);
      getColor2.appendChild(colorTwo);
      getColor3.appendChild(colorThree);
      getColor4.appendChild(colorFour);
}

function addPixels (){

      const getPixelBoard = document.querySelector("#pixel-board");

    for (let index = 1; index <= 25; index += 1){

        let pixel = document.createElement('div');
        pixel.innerHTML = "Vivo?";
        pixel.className = 'pixel';
        getPixelBoard.appendChild(pixel);
    }
}

function pixelWhiteColor (){
    const getPixel = document.querySelectorAll("#pixel-board>.pixel");
    for (let index = 0; index < getPixel.length; index += 1){
        let addWhiteColor = getPixel[index];
        addWhiteColor.style.background = 'rgb(255, 255, 255)';
    }
}

window.onload = function (){
    alert('Carrego')
    pixelWhiteColor();
}

addColors();
addPixels();