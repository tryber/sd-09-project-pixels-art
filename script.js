window.onload = function() {
  let squareBase = 4;  

  let pixels = document.querySelectorAll(".pixels");

    function selecionaCor (eventClick) {  
      console.log(eventClick.target);    
    }
      let clickBlack = document.getElementById("black");
      let clickRed = document.getElementById("red");
      let clickBlue = document.getElementById("blue");
      let clickPink = document.getElementById("pink");
      clickBlack.addEventListener("click", selecionaCor);
      clickRed.addEventListener('click', selecionaCor);
      clickBlue.addEventListener('click', selecionaCor);
      clickPink.addEventListener('click', selecionaCor);
  
  fillSquare(pixels);
  function fillSquare(pixels) {
    for(let index = 0; index < pixels.length; index += 1) {
      fillLine(pixels[index]);    
    }
  }

  function createBox(className) {
    let box = document.createElement("div");
    box.className = className;
    return box;
  }

  function fillLine(divPixels) {
    for (let lineColumn = 0; lineColumn <= squareBase; lineColumn += 1) {
      let box = createBox("box");
      divPixels.appendChild(box);
    }
  }
}





  