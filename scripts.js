window.onload = function () {
  let button = document.querySelector('#clear-board')
  let colors = document.querySelectorAll('.color')
  let buttonborder = document.querySelector('#generate-board')
  let border = 9;

  let inputborder = document.querySelector('#board-size')


  function randomnumber(min, max) {
    min = Math.ceil(0);
    max = Math.floor(255);
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  for (let index = 1; index < colors.length; index += 1) {
    colors[index].style.backgroundColor = `rgb(${randomnumber(0, 255)}, ${randomnumber(0, 255)}, ${randomnumber(0, 255)})`
  }

  colors[0].style.backgroundColor = 'rgb(0, 0, 0)'


  buttonborder.addEventListener('click', changeBorder)

  let table = document.querySelector('#tbody-board')

  function changeBorder() {
    if(inputborder.value < 5){
      inputborder.value = 5
    }
    else if(inputborder.value > 50){
      inputborder.value = 50
    }
    while (table.firstChild){
      table.removeChild(table.firstChild)
    }
    for(let index = 0; index < inputborder.value; index += 1){
      let newcollumn = createnewline()
      for(let position = 0; position < inputborder.value; position += 1){
        let newline = createnewcollumn('pixel')
        newcollumn.appendChild(newline)
      }
      table.appendChild(newcollumn)
    }
  }

  function createnewline() {
    let collumn = document.createElement('tr')
    return collumn
  }

  function createnewcollumn(className){
    let line = document.createElement('th')
    line.className = className
    return line
  }

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
