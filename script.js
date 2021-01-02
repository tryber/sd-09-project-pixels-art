window.onload = function () {
  function selectedSquareColor() {
    let square = document.getElementsByClassName("color")[0];
    square.style.border = "1px solid pink";
    square.classList.add("selected");
    console.log("square", square)
  }
  selectedSquareColor();
};
