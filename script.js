window.onload = function () {
  const blackPixelPalette = document.querySelector('.black');
  blackPixelPalette.className += ' selected';
  console.log('Color 1 selected');
};

// Pintando o pixel
function changeColor(target, pixelColor) {
  if (target.style.backgroundColor !== pixelColor) {
    target.style.backgroundColor = pixelColor;
  } else {
    target.style.backgroundColor = 'white';
  }
}

const pixels = document.querySelectorAll('.pixel');
for (let index = 0; index < pixels.length; index += 1) {
  let pixelClicked = pixels[index];
  pixelClicked.addEventListener('click', function (event) {
    const selectedColor = document.querySelector('.selected');
    changeColor(event.target, window.getComputedStyle(selectedColor, null).getPropertyValue('background-color')); 
  });
}

// Selecionando a cor
const colorPalette = document.querySelectorAll('.color');
for (let index = 0; index < colorPalette.length; index += 1) {
  colorPalette[index].addEventListener('click', function () {
    const selectedColor = document.querySelector('.selected');
    selectedColor.className = selectedColor.className.replace(' selected', '');
    colorPalette[index].className += ' selected';
    console.log(`Color ${index + 1} selected.`);
  });
}
