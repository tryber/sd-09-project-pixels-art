window.onload = function() {
  let pixel = document.querySelectorAll('.pixel');
  let linhas = 5;

  
  function fillLine(divPixel) {
    for (let index = 0; index < linhas; index += 1) {
      let box = createBox('box');
      divPixel.appendChild(box);
      box.addEventListener('click', paintPixel)
    }
  }
  fillPixel(pixel);

  function createBox() {
    let box = document.createElement("div");
    box.className = 'box';
    return box;
  }

  function fillPixel(pixel) {
    for(let index = 0; index < pixel.length; index += 1) {
      fillLine(pixel[index]);
    }
  }
}

function paintPixel(event) {
  let targ = event.target;
  
  console.log(targ);
}