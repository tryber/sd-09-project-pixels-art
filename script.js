window.onload = firstSelectedFun;

//Quando a página carregar, executa os códigos  abaixo:
function firstSelectedFun() {
  document.querySelector(".black").classList.add("selected");
  clickSelect();
  paintPixel();
  buttonReset();
  deletarCriar();
}

// Recupera caminho das cores e adiciona classe 'selected'
function clickSelect() {
  const localRed = document.querySelector(".red");
  const localBlue = document.querySelector(".blue");
  const localGreen = document.querySelector(".green");
  const localBlack = document.querySelector(".black");

  localRed.addEventListener("click", function () {
    localRed.classList.add("selected");

    if (
      localBlack.classList.contains("selected") ||
      localBlue.classList.contains("selected") ||
      localGreen.classList.contains("selected")
    ) {
      localBlack.classList.remove("selected");
      localBlue.classList.remove("selected");
      localGreen.classList.remove("selected");
    }
  });

  localBlue.addEventListener("click", function () {
    localBlue.classList.add("selected");

    if (
      localBlack.classList.contains("selected") ||
      localRed.classList.contains("selected") ||
      localGreen.classList.contains("selected")
    ) {
      localBlack.classList.remove("selected");
      localRed.classList.remove("selected");
      localGreen.classList.remove("selected");
    }
  });

  localGreen.addEventListener("click", function () {
    localGreen.classList.add("selected");

    if (
      localBlack.classList.contains("selected") ||
      localBlue.classList.contains("selected") ||
      localRed.classList.contains("selected")
    ) {
      localBlack.classList.remove("selected");
      localBlue.classList.remove("selected");
      localRed.classList.remove("selected");
    }
  });

  localBlack.addEventListener("click", function () {
    localBlack.classList.add("selected");

    if (
      localRed.classList.contains("selected") ||
      localBlue.classList.contains("selected") ||
      localGreen.classList.contains("selected")
    ) {
      localRed.classList.remove("selected");
      localBlue.classList.remove("selected");
      localGreen.classList.remove("selected");
    }
  });
}

/* Adiciona o eventListener "click" em todos os pixels brancos e verifica-se ao clicar em um deles
qual cor estava selecionada na palheta de cores, mudando assim, a cor do pixel branco para a cor selecionada
na palheta*/
function paintPixel() {
  const localWhite = document.querySelectorAll(".pixel");
  const localRed = document.querySelector(".red");
  const localBlue = document.querySelector(".blue");
  const localGreen = document.querySelector(".green");
  const localBlack = document.querySelector(".black");
  for (let index = 0; index < localWhite.length; index += 1) {
    localWhite[index].addEventListener("click", function () {
      let colorSelected = document.querySelector(".selected");
      if (colorSelected === localBlack) {
        localWhite[index].style.backgroundColor = "black";
      } else if (colorSelected === localRed) {
        localWhite[index].style.backgroundColor = "red";
      } else if (colorSelected === localBlue) {
        localWhite[index].style.backgroundColor = "blue";
      } else if (colorSelected === localGreen) {
        localWhite[index].style.backgroundColor = "green";
      }
    });
  }
}

// Funcionalidades do botão: Determina caminho dos pixels brancos, adiciona evento click que restaura cor
function buttonReset() {
  const localWhite = document.querySelectorAll(".pixel");
  let buttonPosition = document.querySelector("#clear-board");
  buttonPosition.addEventListener("click", function () {
    for (let contador = 0; contador < localWhite.length; contador += 1) {
      localWhite[contador].style.backgroundColor = "white";
    }
  });
}

function deletarCriar() {
  let inputPosition = document.querySelector("#board-size");
  let quantidadePixels = inputPosition.value;
  let vqvPosition = document.querySelector("#generate-board");
  let pixelRowLocal = document.querySelectorAll(".pixel-row");
  let pixelBoardLocal = document.querySelector("#pixel-board");

  vqvPosition.addEventListener("click", function () {
    let quantidadePixels = inputPosition.value;
    if (quantidadePixels == 0) {
      window.alert("Board inválido!");
    } else if (quantidadePixels < 5){
      quantidadePixels === 5
    } else if (quantidadePixels > 50){
      quantidadePixels === 50
    }

    for (let count = 0; count < pixelRowLocal.length; count += 1) {
      pixelRowLocal[count].remove();
    }

    for (let count2 = 0; count2 < quantidadePixels; count2 += 1) {
      let newPixel = document.createElement("div");
      newPixel.className = "pixel-row";
      pixelBoardLocal.appendChild(newPixel);
      for (count3 = 0; count3 < quantidadePixels; count3 += 1) {
        let newPixelLocal = document.querySelectorAll(".pixel-row")[count2];
        let newPixelLado = document.createElement("div");
        newPixelLado.className = "pixel";
        newPixelLocal.appendChild(newPixelLado);

        paintPixel();
        buttonReset();
      }
    }
  });
}
