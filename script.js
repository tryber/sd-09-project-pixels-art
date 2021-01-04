function selectedSquareColorInitial() {
  const square = document.getElementsByClassName("color")[0];
  square.classList.add("selected");
}

function selectedSquareColor() {
  const square = document.getElementsByClassName("color");
  
  for (let index = 0; index < square.length; index += 1) {
    square[index].addEventListener("click", function (event) {
      const selected = document.getElementsByClassName('selected');
      let color = square[index].attributes[0].value.split(" ", 2)[1];
      selected[0].classList.remove("selected");
      square[index].classList.add("selected");
      console.log("square", square)
    });
  }
}

window.onload = function () {
  selectedSquareColorInitial();
  selectedSquareColor();
};
