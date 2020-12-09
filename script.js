window.onload = function() {
  let squareBase = 4;
  let line = document.querySelectorAll(".line");

    function selecionaCor () { 
      
    }
    let clickBlack = document.getElementById("black");
    let clickRed = document.getElementById("red");
    let clickBlue = document.getElementById("blue");
    let clickPink = document.getElementById("pink");
    clickBlack.addEventListener("click", selecionaCor);
    clickRed.addEventListener('click', selecionaCor);
    clickBlue.addEventListener('click', selecionaCor);
    clickPink.addEventListener('click', selecionaCor);
  
  fillSquare(line);
  function fillSquare(line) {
    for(let index = 0; index < line.length; index += 1) {
      fillLine(line[index]);
    }
  }

  function createBox(className) {
    let pixels = document.createElement("div");
    pixels.className = className;
    return pixels;
  }

  function fillLine(divLine) {
    for (let lineColumn = 0; lineColumn <= squareBase; lineColumn += 1) {
      let pixels = createBox("pixels");
      divLine.appendChild(pixels);
    }
  }
}





  