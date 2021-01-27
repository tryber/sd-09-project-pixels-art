function selectYellow(event) {
  const colorBlack = document.getElementById('black');
  const colorRed = document.getElementById('red');
  const colorGreen = document.getElementById('green');

  colorBlack.classList.remove('selected');
  colorRed.classList.remove('selected');
  colorGreen.classList.remove('selected');
  event.target.classList.add('selected');
}

function selectRed(event) {
    const colorBlack = document.getElementById('black');
    const colorYellow = document.getElementById('yellow');
    const colorGreen = document.getElementById('green');
  
    colorBlack.classList.remove('selected');
    colorYellow.classList.remove('selected');
    colorGreen.classList.remove('selected');
    event.target.classList.add('selected');
}

function selectGreen(event) {
    const colorBlack = document.getElementById('black');
    const colorRed = document.getElementById('red');
    const colorYellow = document.getElementById('yellow');
  
    colorBlack.classList.remove('selected');
    colorRed.classList.remove('selected');
    colorYellow.classList.remove('selected');
    event.target.classList.add('selected');
}

function selectBlack(event) {
    const colorYellow = document.getElementById('yellow');
    const colorRed = document.getElementById('red');
    const colorGreen = document.getElementById('green');
  
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
    const selectedColor = document.querySelector('.selected').id;
    const pixel = event.target;
    pixel.style.backgroundColor = selectedColor;
}

const pixels = document.getElementById('pixel-board');
pixels.addEventListener('click', paintPixels);




