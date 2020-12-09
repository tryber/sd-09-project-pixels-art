function createEventColorBox() {
  let box = document.querySelector("#pixel-board");

  box.addEventListener('click', (event) => {
    let selectedColor = document.querySelector('.selected');
    let cor = window.getComputedStyle(selectedColor)
    event.target.style.backgroundColor = cor.getPropertyValue('background-color');


  })
}

function clear() {
  let button = document.querySelector("#clear-board");
  let pixel = document.querySelectorAll("div .pixel");

  button.addEventListener("click", colored);
  function colored() {
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = "white";
    }
  }
}

function classSelected() {
  let color = document.querySelectorAll('.color')
  let colorP = document.querySelector('#color-palette')

  colorP.addEventListener('click', (event) => {
    for (let index = 0; index < color.length; index++) {
      if (event.target.id != 'color-palette'){
        color[index].classList.remove('selected');
        event.target.classList.add('selected');
      }
    }
  });
}













window.onload = function () {
  classSelected()
  createEventColorBox();
  clear();
};
