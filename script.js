
function changeSelected () {
  let paletteColors = document.getElementById('color-palette')
  paletteColors.addEventListener('click', function () {
    let palettes = document.querySelectorAll('.color');
      for (let index = 0; index < palettes.length; index += 1) {
        palettes[index].className = 'color'
      }
    event.target.className = "color selected"
  })
}
changeSelected()
