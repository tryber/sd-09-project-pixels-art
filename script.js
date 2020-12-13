// creating squares for palette
function createPalette () {
  let palette = [1,2,3,4];
    for (let index of palette) {
    let squareColor = document.createElement('div');
    squareColor.className = 'color';
    document.getElementById('color-palette').appendChild(squareColor);
  }
}
//creating pixel boart from base to lines and colums
function createBoardLine () {
  let base = 5;
  for (let line = 0; line < base; line += 1) {
    let div = document.createElement('div');
    for (let colum = 0; colum < base; colum += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      div.appendChild(pixel);
    }
    document.getElementById('pixel-board').appendChild(div);
  }
}
// setting colors to palette
function paletteColors() {
  let color1 = document.querySelectorAll('.color')[1];
  let color2 = document.querySelectorAll('.color')[2];
  let color3 = document.querySelectorAll('.color')[3];
  color1.style.backgroundColor = getRandomRgb();
  color2.style.backgroundColor = getRandomRgb();
  color3.style.backgroundColor = getRandomRgb();
  if(color1 = color2 || color3 || rgb(255 , 255 , 255)) {
    color1 = getRandomRgb();
  }
  if(color2 = color3 || rgb(255 , 255 , 255)){
  color2 = getRandomRgb();
  }
}
// creating random rgb to set on palette
function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 8;
  var g = num >> 8 & 250;
  var b = num & 250;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
// class add and remover to setup class and get choosed color
function choosePaletteColor(event) {
  document.querySelector('.selected').classList.remove('selected');  
  event.target.classList.add('selected');
}
// created "class mover" to choose colors
function setChoosedColor() {
  let classMover = document.querySelector('.selected');
  let colorSelected = getComputedStyle(classMover);
  return colorSelected.backgroundColor;
}
//open pixel board to acept color by class mover
function setPixelBoardColor(event) {
  let pixelColor = event.target;
  pixelColor.style.backgroundColor = setChoosedColor();
}

function listenersOnClick() {  
  let colorPalette = document.querySelector('#color-palette');
  colorPalette.addEventListener('click', choosePaletteColor);
  let pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', setPixelBoardColor);
}

window.onload = function(){  
  createPalette()
  document.querySelector('#color-palette').firstElementChild.classList.add('selected') //aplica class selected ao primeiro elemento
  document.querySelector('#color-palette').firstElementChild.classList.add('black') // aplica background ao primeiro elemento
  createBoardLine()
  getRandomRgb()
  paletteColors()
  setChoosedColor()
  listenersOnClick() // todos addListener dentro de uma unica função
}

// criar botão para retornar a classe inicial de todos pixels assim alterando a cor novamente para branco
