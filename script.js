window.onload = function () {
  createEventColorBox();
  clear();
};

function createEventColorBox() {
  let box = document.querySelectorAll(".pixel");
  let color = document.querySelectorAll("#color-palette .color");

  for (let index = 0; index < color.length; index += 1) {
    color[index].addEventListener("click", function (event) {
      cor = event.target.id;
      for (let i = 0; i < box.length; i += 1) {
        box[i].addEventListener("click", function (event) {
          event.target.style.backgroundColor = cor;
        });
      }
    });
  }
}

function clear() {
  let button = document.querySelector("#clear-board");
  let pixel = document.querySelectorAll("div .pixel");

  button.addEventListener("click", colored);
  function colored() {
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = "white";
    }
  }
}
