window.onload = function () {
  let button = document.querySelector('#clear-board')
  let colors = document.querySelectorAll('.color')


  function randomnumber(min, max){
  min = Math.ceil(0);
  max = Math.floor(255);
  return Math.floor(Math.random() * (max - min + 1)) + min
  }

  for(let index = 0; index < colors.length; index += 1){
    colors[index].style.backgroundColor = `rgb(${randomnumber(0, 255)}, ${randomnumber(0, 255)}, ${randomnumber(0, 255)})`
  }

  console.log(colors)

  addEventListener('click', changeSelectedColor)
  button.addEventListener('click', cleartable)

  function changeSelectedColor(event) {
    let oldselectedColor = document.querySelector('.selected')
    let paintColor = oldselectedColor.style.backgroundColor

    let newselectedColor = event.target

    if (newselectedColor.classList.contains('color')) {
      oldselectedColor.classList.remove('selected')
      newselectedColor.className += ' selected'
    }
    else if (newselectedColor.classList.contains('pixel')) {
      newselectedColor.style.backgroundColor = `${paintColor}`
    }
  }

  function cleartable() {
    let pixels = document.querySelectorAll('.pixel')

    for (let index = 0; index < pixels.length; index++) {
      pixels[index].style.backgroundColor = "white";
    }
  }
}
