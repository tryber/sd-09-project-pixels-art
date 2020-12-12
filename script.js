function getColorClassName(colorElement) {
  for ( const className of colorElement.classList) {
    if (className.includes('color-')) {
      return className;
    }
  }
}

function getColorsClass(classList) {
  const colors = [];
  for(const color of classList) {
    if (color.includes('color-')) {
      colors.push(color);
    }
  }
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
  if (! isPixelElement) return;
  const colorSelected = document.querySelector('#color-palette .selected');
  const colorClassName = getColorClassName(colorSelected);
  const colorsToRemove = getColorsClass(clickedElement.classList);
  if (colorsToRemove.length) {
    clickedElement.classList.remove(colorsToRemove);
  }
  clickedElement.classList.add(colorClassName);
}

window.onload = () => {
  const colorPalette = document.getElementById('color-palette');

  colorPalette.addEventListener('click', handleColorSelected);

  const pixelBoard = document.getElementById('pixel-board');

  pixelBoard.addEventListener('click', handlePixelSelected);
}
