window.onload = function () {
  let search = document.querySelector('#color-palette');
  let paletteBox = 4;

  function createBoxes() {
    for (let index = 0; index < paletteBox; index++) {
      createBox(paletteBox[index]);
    }
  }

  function createBox(className) {
    let box = document.createElement('div');
    box.style.border = '1px solid';
    box.style.height = '40px';
    box.style.width = '40px'
    box.style.margin = '0 5px 0 0';
    box.className = 'color';

    search.appendChild(box);
    box.addEventListener('click', paintPixel)
    return box;
  }

  createBoxes();

  function paintingPalette() {
    let palette = document.querySelectorAll('div.color');
      palette[0].className = 'color black';
      palette[1].className = 'color green';
      palette[2].className = 'color blue';
      palette[3].className = 'color red';
  }

  paintingPalette();
}

function paintPixel(event) {
  let targ = event.target;
  
  console.log(targ);
}