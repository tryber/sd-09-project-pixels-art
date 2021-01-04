window.onload = () => {
    document.getElementsByClassName("color")[0].classList.add("selected");
  
    startDefault();
  };
  
  function randomColors() {
      const selectPalette = document.getElementsByClassName('color');    
      for(let color of selectPalette) {
          let redColorGenerate = Math.round(Math.random() * 255);
          let greenColorGenerate = Math.round(Math.random() * 255);
          let blueColorGenerate = Math.round(Math.random() * 255);
          color.style.backgroundColor = `rgb(${redColorGenerate}, ${greenColorGenerate}, ${blueColorGenerate})`;
      }
      selectPalette[0].style.backgroundColor = 'black';
  
  
  }
  
  function startGame() {
    let pixels = document.getElementsByClassName("pixel");
  
    for (let x of pixels) {
      x.addEventListener("click", (pixelSelected) => {
        let color = document.querySelector(".selected");
        color = window.getComputedStyle(color, null);
        // Ref window.getComputedStyle() -> https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
        pixelSelected.target.style.backgroundColor = color.backgroundColor;
      });
    }
  
    randomColors();
  }
  
  function createPixels(value) {
    clearPixels();
  
    for (let x = 0; x < value; x += 1) {
      const pixelRow = document.createElement("tr");
      document.querySelector("#pixel-board").appendChild(pixelRow);
      pixelRow.className = `row rowNumber${x}`;
      for (let y = 0; y < value; y += 1) {
        const pixelColumn = document.createElement("td");
        document.querySelector(`.rowNumber${x}`).appendChild(pixelColumn);
        pixelColumn.className = "pixel";
      }
    }
  }
  
  function clearPixels() {
    let boardPixels = document.querySelectorAll(".row");
    for (let index = 0; index < boardPixels.length; index += 1) {
      boardPixels[index].parentNode.removeChild(boardPixels[index]);
      // Ref Node -> https://developer.mozilla.org/pt-BR/docs/Web/API/Node
    }
  }
  
  let selectedColor = document.getElementsByClassName("color");
  for (let item of selectedColor) {
    item.addEventListener("click", () => {
      let selectColor = document.querySelector(".selected");
      if (item.classList.contains("selected") == false) {
        // Ref element.classList -> https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
        selectColor.classList.remove("selected");
        item.classList.add("selected");
      }
    });
  }
  
  function startDefault() {
    for (let x = 0; x < 5; x += 1) {
      const pixelRow = document.createElement("tr");
      document.querySelector("#pixel-board").appendChild(pixelRow);
      pixelRow.className = `row rowNumber${x}`;
      for (let y = 0; y < 5; y += 1) {
        const pixelColumn = document.createElement("td");
        document.querySelector(`.rowNumber${x}`).appendChild(pixelColumn);
        pixelColumn.className = "pixel";
      }
    }
  
    startGame();
  }
  
  let clearButton = document.querySelector("#clear-board");
  
  clearButton.addEventListener("click", () => {
    let pixels = document.getElementsByClassName("pixel");
    for (let x of pixels) {
      x.style.backgroundColor = "white";
    }
  });
  
  let generateBoard = document.querySelector("#generate-board");
  let valueField = document.querySelector("#board-size");
  
  generateBoard.addEventListener("click", () => {
    if (Number(valueField.value) >= 5 && Number(valueField.value) <= 50) {
      createPixels(Number(valueField.value));
    } else if (valueField.value == "") {
      alert("Board inválido!");
    }
    startGame();
  });