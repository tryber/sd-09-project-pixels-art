function getColorClassName(colorElement) {
  let color = ''
  colorElement.classList.forEach(className => {
    if (className.includes('color-')) {
      color = className;
    }
  })
  return color;
}

function getColorsClass(classList) {
  const colors = [];
  classList.forEach(color => {
    if (color.includes('color-')) {
      colors.push(color);
    }
  })
  return colors;
}

/**
 *
 * @param {MouseEvent} clickEvent
 */
function handleColorSelected(clickEvent) {
  const target = clickEvent.target;
  const isColorElement = target.getAttribute('class').includes('color ');

  if (!isColorElement) return;

  const lastColorElementSelected = document.querySelector('.color.selected');
  lastColorElementSelected.classList.remove('selected');

  target.classList.add('selected');
}

/**
 * @param {MouseEvent} clickEvent
 */
function handlePixelSelected(clickEvent) {
  const clickedElement = clickEvent.target;
  const isPixelElement = clickedElement.classList.contains('pixel');
  if (!isPixelElement) return;
  const colorSelected = document.querySelector('#color-palette .selected');
  const colorClassName = getColorClassName(colorSelected);
  const colorsToRemove = getColorsClass(clickedElement.classList);
  if (colorsToRemove.length) {
    clickedElement.classList.remove(colorsToRemove);
  }
  clickedElement.classList.add(colorClassName);
}

function handleClearBoard() {
  const pixels = document.querySelectorAll('#pixel-board .pixel');
  pixels.forEach(pixel => {
    const colorsToRemove = getColorsClass(pixel.classList);
    if (colorsToRemove.length) {
      pixel.classList.remove(colorsToRemove);
    }
  })
}

window.onload = () => {
  const colorPalette = document.getElementById('color-palette');
  colorPalette.addEventListener('click', handleColorSelected);

  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.addEventListener('click', handlePixelSelected);

  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', handleClearBoard);
};
