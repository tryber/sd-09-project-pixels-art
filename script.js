window.onload = function () {
  clearbutton();
};

function clearbutton() {
  let buttonClear = document.createElement("button");
  let pixelBoard = document.querySelector("#button-container");
  buttonClear.innerText = "Clear";
  pixelBoard.appendChild(buttonClear);
}
