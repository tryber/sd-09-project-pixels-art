function addColors() {
  const getColor1 = document.querySelector('#color-palette');
  const getColor2 = document.querySelector('#color-palette');
  const getColor3 = document.querySelector('#color-palette');
  const getColor4 = document.querySelector('#color-palette');

  const colorOne = document.createElement('div');
  const colorTwo = document.createElement('div');
  const colorThree = document.createElement('div');
  const colorFour = document.createElement('div');

  colorOne.className = 'color';
  colorOne.style.background = 'black';
  colorTwo.className = 'color';
  colorThree.className = 'color';
  colorFour.className = 'color';

  getColor1.appendChild(colorOne);
  getColor2.appendChild(colorTwo);
  getColor3.appendChild(colorThree);
  getColor4.appendChild(colorFour);
};
addColors();

function addPixels() {
    const getPixelBoard = document.querySelector('#pixel-board');
  
    for (let index = 1; index <= 25; index += 1) {
      const pixel = document.createElement('div');
      pixel.innerHTML = 'Vivo?';
      pixel.className = 'pixel';
      getPixelBoard.appendChild(pixel);
    }
  }
addPixels();

function rgbGenerate() {
  const red = Math.round((Math.random() * 255));
  const green = Math.round((Math.random() * 255));
  const blue = Math.round((Math.random() * 255));
    return `rgb(${red}, ${green}, ${blue})`;
};
rgbGenerate();
  
function paintPaletteColor() {
  const palette = document.querySelectorAll('.color');
  for (let index = 1; index <= palette.length - 1; index += 1) {
    palette[index].style.backgroundColor = rgbGenerate();
 }
}
paintPaletteColor();

function pixelWhiteColor() {
  const getPixel = document.querySelectorAll('#pixel-board>.pixel');
  for (let index = 0; index < getPixel.length; index += 1) {
    const addWhiteColor = getPixel[index];
    addWhiteColor.style.background = 'rgb(255, 255, 255)';
  }
}
pixelWhiteColor();

/*function selectedColor(){
  let geSelectedColors = document.getElementsByClassName('color selected');
  let myColors = document.querySelector('.color');

  myColors.addEventListener('click', function(event){
  if (geSelectedColors === 0) {
      event.target.className = 'color selected';
  } else {
      event.target.className = 'color';
    }
  })

}
selectedColor();*/

/*function clearColor() {
    // console.log(`Limpando cores`)
    const linesOfPixels = document.querySelectorAll('.square-div-line');
    const pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index <= pixels.length - 1; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
    for (let index = 0; index <= linesOfPixels.length - 1; index += 1) {
      linesOfPixels[index].style.backgroundColor = 'white';
    }
  }
    const button = document.querySelector('#clear-board');
    button.addEventListener('click', clearColor);

clearColor();*/