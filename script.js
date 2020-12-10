window.onload = function () {
  let divFather = document.getElementById("pixel-board");
  for (let index = 0; index < 5; index += 1) {
    for (let j = 0; j < 5; j += 1) {
      let pixel = document.createElement("div");
      pixel.className = "pixel";
      divFather.appendChild(pixel);
    }
  }
  function colorBlack (event) {
    let initialColor = document.getElementsByClassName('pixel')[0].style.backgroundColor;
    console.log(initialColor);
    initialColor = 'white'
    console.log(initialColor)
    event.target.initialColor = 'black';
    console.log(initialColor);
  } 
  function appColorBlack () {
    let pixelBoard = document.getElementById('pixel-board');
    pixelBoard.addEventListener('click', colorBlack);
  }
  appColorBlack()
}


function selected(event) {
  let selectedItem = document.getElementsByClassName("selected")[0];
  selectedItem.className = "color";
  event.target.className = "color selected";
}
function clickColorPalette() {
  const colorPalette = document.getElementById("color-palette");
  colorPalette.addEventListener("click", selected);
}
clickColorPalette();
