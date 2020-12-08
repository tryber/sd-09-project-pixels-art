// Step 2
function setPalletColors() {
  const color1 = document.querySelector('.color')
  const color2 = color1.nextElementSibling
  const color3 = color2.nextElementSibling
  const color4 = document.querySelector('#color-palette').lastElementChild

  color1.style.background = 'black'
  color2.style.background = 'darkorange'
  color3.style.background = 'darkviolet'
  color4.style.background = 'deepskyblue' 
}

setPalletColors()
