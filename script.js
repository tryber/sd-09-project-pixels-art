window.onload = function() {
  let pixel = document.querySelectorAll('.pixel');
  let linhas = 5;

  fillPixel(pixel);

  function fillLine(divPixel) {
    for (let index = 0; index < linhas; index += 1) {
      let box = createBox('box');
      divPixel.appendChild(box);
      box.addEventListener('click', paintPixel)
    }
  }

  function createBox(className) {
    let box = document.createElement("div");
    box.className = 'box';
    return box;
  }

  function fillPixel(pixel) {
    for(let index = 0; index < pixel.length; index += 1) {
      fillLine(pixel[index]);
    }
  }

  function painting() {
    let pixelColor = document.querySelector('div.color.red');
    pixelColor.addEventListener('click', getColor);
  }

  function getColor() {
    let pixelColor = document.querySelector('div.color.red');
  }
}

function paintPixel(event) {
  let targ = event.target;
  
  console.log(targ);
}