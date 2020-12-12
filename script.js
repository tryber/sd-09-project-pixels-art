/**
 *
 * @param {MouseEvent} clickEvent
 */
function handleColorSelected(clickEvent) {
  const target = clickEvent.target
  const isColorElement = target.getAttribute('class').includes('color ')

  if(!isColorElement) return

  const lastColorElementSelected = document.querySelector('.color.selected')
  lastColorElementSelected.classList.remove('selected')

  target.classList.add('selected')
}

window.onload = () => {
  const colorPalette = document.getElementById('color-palette')

  colorPalette.addEventListener('click', handleColorSelected)
}
