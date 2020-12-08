window.onload = function () {
  clearbutton();
};
function clearbutton() {
  let buttonClear = document.createElement("button");
  let pixelBoard = document.querySelector("#button-container");
  buttonClear.innerText = "Clear";
  buttonClear.addEventListener("click", function () {
    let pixelColor = document.querySelectorAll(".pixel");
    for (let index = 0; index <= pixelColor.length; index += 1) {
      pixelColor.style.backgroundColor = "white";
    }
  });
  pixelBoard.appendChild(buttonClear);
}
