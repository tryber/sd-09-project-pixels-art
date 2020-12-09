window.onload = function() {
  let squareBase = 5;
  let numberOfLines = squareBase
  let squaresLeft = numberOfLines;
  let squaresRight = numberOfLines;
  let pixels = document.querySelectorAll(".pixels");
  
  fillSquare(pixels);
  function fillSquare(pixels) {
    for(let index = 0; index < pixels.length; index += 1) {
      fillLine(pixels[index]);
      squaresRight += 1;
      squaresLeft += 1;
    }
  }

  function createBox(className) {
    let box = document.createElement("div");
    box.className = className;
    return box;
  }

  function fillLine(divPixels) {
    for (let lineColumn = 1; lineColumn <= squareBase; lineColumn += 1) {
      let box = createBox("box");
      divPixels.appendChild(box);
    }
  }
}

