function selectColor(event) {
  const deselect = document.querySelector(".color.selected");
  deselect.className = "color";
  event.target.className = "color selected";
}

function paintSquare(event) {
  const paletteColor = document.querySelector(".color.selected");
  event.target.style.backgroundColor = paletteColor.style.backgroundColor;
}

function clearPixelBoard() {
  const pixelSquare = document.querySelectorAll(".pixel");
  for (let index = 0; index < pixelSquare.length; index += 1) {
    pixelSquare[index].style.backgroundColor = "white";
  }
}

function randomRGB() {
    const Red = Math.floor(Math.random() * 255);
    const Green = Math.floor(Math.random() * 255);
    const Blue = Math.floor(Math.random() * 255);
    return (`rgb(${Red}, ${Green}, ${Blue})`);
  }
  