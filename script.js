window.onload = function () {
  this.sessionStorage.setItem("uColor", "black")
  function random() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
    
      const cor = `rgb(${r}, ${g}, ${b})`;
      return cor;
  }

  let colorArray = ["black", random(), random(), random()]

  let palColor = document.getElementsByClassName("color")
  for (let i = 0; i < colorArray.length; i+=1) {
      palColor[i].style.backgroundColor = colorArray[i];
      palColor[i].addEventListener('click', function () {
          let selected = document.getElementsByClassName("selected")
          selected[0].classList.remove("selected")
          let bgcolor = palColor[i].style.backgroundColor
          sessionStorage.setItem("uColor", bgcolor)
          palColor[i].classList.add("selected")
      })
  }
  let pixels = document.getElementsByClassName("pixel")

  for (let x = 0; x < pixels.length; x+=1) {


      pixels[x].addEventListener('click', function () {
          let coloring = sessionStorage.getItem("uColor")
          pixels[x].style.backgroundColor = coloring;
      })

  }

  let clear = document.getElementById("clear-board")

  clear.addEventListener('click', function(){
      for (let y = 0; y < pixels.length; y+=1){
          pixels[y].style.backgroundColor = "white"
      }
  })

  let size = document.getElementById("board-size");
  let generate = document.getElementById("generate-board");
  let board = document.getElementById("pixel-board");
  
  generate.addEventListener('click', function(){
      let n = parseInt(size.value)
      
      if(n<5){
          n = 5;
      }
      else if(n>50){
          n = 50;
      }
      
      let newPixelNumber = n*n
      let newDimensions = (42 * n) + "px";
      board.style.height = newDimensions;
      board.style.width = newDimensions;

      document.querySelectorAll('.pixel').forEach(e => e.remove());
      
     for (let k = 0; k < newPixelNumber; k++) {
         let newPixel = document.createElement("div");
         newPixel.classList = "pixel"
         newPixel.addEventListener('click', function () {
              let coloring = sessionStorage.getItem("uColor")
              newPixel.style.backgroundColor = coloring;
         })
          document.getElementById("pixel-board").appendChild(newPixel)
      }
  })

      

  



}
