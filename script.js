const colorBlack = document.getElementById('black');
const colorYellow = document.getElementById('yellow');
const colorRed = document.getElementById('red');
const colorGreen = document.getElementById('green');

function rgbRandom() {
    const r = Math.ceil(Math.random() * 256);
    const g = Math.ceil(Math.random() * 256);
    const b = Math.ceil(Math.random() * 256);
  
    const rgb = `rgb(${r}, ${g}, ${b})`;
  
    return rgb;
}

colorBlack.style.backgroundColor = 'rgb(0, 0, 0)';
colorYellow.style.backgroundColor = rgbRandom();
colorRed.style.backgroundColor = rgbRandom();
colorGreen.style.backgroundColor = rgbRandom();


function selectYellow(event) {

  colorBlack.classList.remove('selected');
  colorRed.classList.remove('selected');
  colorGreen.classList.remove('selected');
  event.target.classList.add('selected');
}

function selectRed(event) {
    colorBlack.classList.remove('selected');
    colorYellow.classList.remove('selected');
    colorGreen.classList.remove('selected');
    event.target.classList.add('selected');
}

function selectGreen(event) {
    colorBlack.classList.remove('selected');
    colorRed.classList.remove('selected');
    colorYellow.classList.remove('selected');
    event.target.classList.add('selected');
}

function selectBlack(event) {
    colorYellow.classList.remove('selected');
    colorRed.classList.remove('selected');
    colorGreen.classList.remove('selected');
    event.target.classList.add('selected');
}


const buttonYellow = document.getElementById('yellow');
buttonYellow.addEventListener('click', selectYellow);

const buttonRed = document.getElementById('red');
buttonRed.addEventListener('click', selectRed);

const buttonGreen = document.getElementById('green');
buttonGreen.addEventListener('click', selectYellow);

const buttonBlack = document.getElementById('black');
buttonBlack.addEventListener('click', selectBlack);

function paintPixels(event) {
    const selectedColor = document.querySelector('.selected').style.backgroundColor;
    const pixel = event.target;
    pixel.style.backgroundColor = selectedColor;
}

const pixels = document.getElementById('pixel-board');
pixels.addEventListener('click', paintPixels);

function clearPixels() {
    const pixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].style.backgroundColor = 'white';
    }
}

const buttonClean = document.getElementById('clear-board');
buttonClean.addEventListener('click', clearPixels);


