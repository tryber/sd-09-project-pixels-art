window.onload = function () {
  const blackPixelPalette = document.querySelector('.black');
  blackPixelPalette.className += ' selected';
  console.log('Black color selected');
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
    changeColor(event.target, window.getComputedStyle(selectedColor,null).getPropertyValue('background-color')); 
  });
}

// const colorPalette = document.querySelectorAll('.color');
// for (let index = 0; index < colorPalette; index += 1) {
//   colorPalette[index].addEventListener('click', function () {
//     const selectedColors = document.querySelectorAll('.selected');

//   });
// }
