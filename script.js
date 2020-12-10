function createEventColorBox() {
  const box = document.querySelector('#pixel-board');

  box.addEventListener('click', (event) => {
    const selectedColor = document.querySelector('.selected');
    let cor = window.getComputedStyle(selectedColor);
    event.target.style.backgroundColor = cor.getPropertyValue('background-color');
  });
}

function clear() {
  const button = document.querySelector('#clear-board');
  const pixel = document.querySelectorAll('.pixel');

  function clearBox() {
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
  }
  button.addEventListener('click', clearBox);
}

function classSelected() {
  const color = document.querySelectorAll('.color');
  const colorP = document.querySelector('#color-palette');

  colorP.addEventListener('click', (event) => {
    for (let index = 0; index < color.length; index += 1) {
      if (event.target.id !== 'color-palette') {
        color[index].classList.remove('selected');
        event.target.classList.add('selected');
      }
    }
  });
}

function pixelBox() {
  const table = document.querySelector('#pixel-board');

  for (let index = 0; index < 5; index += 1) {
    const row = document.createElement('div');
    table.appendChild(row);
    for (let j = 0; j < 5; j += 1) {
      const cell = document.createElement('div');
      table.appendChild(cell).classList = 'pixel td';
    }
  }
}

window.onload = function () {
  pixelBox();
  createEventColorBox();
  classSelected();
  clear();
};
