const colors = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');

for (let index = 0; index < colors.length; index += 1) {
  const colorSelector = colors[index];
  colorSelector.addEventListener('click', function (event) {
    const selected = document.querySelector('.selected');
    selected.className = 'color';
    event.target.className = 'color selected';
  });
}

for (let index = 0; index < pixels.length; index += 1) {
  const pixelSelector = pixels[index];
  pixelSelector.addEventListener('click', function (event) {
    const selected = document.querySelector('.selected');
    const selectedColor = window.getComputedStyle(selected);
    event.target.style.backgroundColor = selectedColor.getPropertyValue('background-color');
  });
}
