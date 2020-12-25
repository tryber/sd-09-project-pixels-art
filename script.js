/**
 * function createTitle() {
  let getHead = document.querySelector("head");
  let createHeader = document.createElement("header");
  let createH1 = document.createElement("h1");
  createH1.innerText = "Paleta de Cores";
  createH1.id = "title";
  createHeader.appendChild(createH1);
  getHead.appendChild(createHeader);
}

function createPaletas() {
  let getBody = document.querySelector("body");
  let createSection = document.createElement("section");
  let createDiv = document.createElement("div");
  createDiv.id = "color-palette";
  createDiv.className = "color-palette";
  getBody.appendChild(createSection);
  createSection.appendChild(createDiv);
}

function createDivChild() {
  let getDiv = document.querySelector("#color-palette");
  let createFirstDiv = document.createElement("div");
  createFirstDiv.className = "color selected black";
  getDiv.appendChild(createFirstDiv);

  let createSecondDiv = document.createElement("div");
  createSecondDiv.className = "color red";
  getDiv.appendChild(createSecondDiv);

  let createThirdDiv = document.createElement("div");
  createThirdDiv.className = "color green";
  getDiv.appendChild(createThirdDiv);

  let createFourthDiv = document.createElement("div");
  createFourthDiv.className = "color blue";
  getDiv.appendChild(createFourthDiv);
}

function pixelLine() {
  let getBody = document.querySelector("body");
  let createSection = document.createElement("section");
  let createDiv = document.createElement("div");
  createSection.className = "section-pixel-board";
  createDiv.className = "pixel-line";
  createDiv.id = "pixel-board";
  getBody.appendChild(createSection);
  createSection.appendChild(createDiv);
}

function createButton() {
  let getBody = document.querySelector("body");

  let getSection = document.querySelector(".section-pixel-board");
  let buttonCreate = document.createElement("button");
  buttonCreate.id = "clear-board";
  buttonCreate.className = "clear-board";
  buttonCreate.innerText = "Clear";
  getBody.appendChild(buttonCreate);
}

function createDivPixel() {
  let getDiv = document.querySelector(".pixel-line");
  let createDiv = document.createElement("div");
  createDiv.className = "pixel";
  getDiv.appendChild(createDiv);
}


function createBoxPixel() {
  let createTable = document.querySelector("#pixel-board");

  for (let index = 0; index < 5; index += 1) {
    let createcreateRow = document.createElement("div");

    createTable.appendChild(createRow);

    for (let indice = 0; indice < 5; indice += 1) {
      let createCell = document.createElement("div");
      createTable.appendChild(createCell).classList = "pixel td";
    }
  }
}

function createEventColor() {
  let getSection = document.querySelector("#section-pixel-board");

  getSection.addEventListener("click", function (event) {
    let selected = document.querySelector("selected");

    let color = window
      .getComputedStyle(selected, null)
      .getPropertyPriority("background-color");

    event.target.style.backgroundColor = color;
  });
}

function createClearBox() {
  let button = document.querySelector("#clear-board");
  let pixel = document.querySelector(".pixel");

  for (let index = 0; index < pixel.clientHeight; index += 1) {
    pixel[index].style.backgroundColor = "white";
  }
  button.addEventListener("click", createClearBox);
}

function classSelected() {
  const color = document.querySelectorAll(".color");
  const colorP = document.querySelector("#color-palette");

  colorP.addEventListener("click", (event) => {
    for (let index = 0; index < color.length; index += 1) {
      if (event.target.id !== "color-palette") {
        color[index].classList.remove("selected");
        event.target.classList.add("selected");
      }
    }
  });
}

window.onload = function () {
  createTitle();
  createPaletas();
  createDivChild();
  pixelLine();
  //createDivPixel();
  createButton();
  createEventColor();
  createBoxPixel();
};

 */

function createTitle() {
  let header = document.querySelector("header");
  let createH1 = document.createElement("h1");
  createH1.innerHTML = "Paleta de Cores";
  createH1.id = "title";
  header.appendChild(createH1);
}

function createPaletas() {
  let getBody = document.querySelector("body");
  let createSection = document.createElement("section");
  let createDiv = document.createElement("div");
  createDiv.id = "color-palette";
  createDiv.className = "color-palette";
  getBody.appendChild(createSection);
  createSection.appendChild(createDiv);
}

function createDivChild() {
  let getDiv = document.querySelector("#color-palette");
  let createFirstDiv = document.createElement("div");
  createFirstDiv.className = "color selected black";
  getDiv.appendChild(createFirstDiv);

  let createSecondDiv = document.createElement("div");
  createSecondDiv.className = "color red";
  getDiv.appendChild(createSecondDiv);

  let createThirdDiv = document.createElement("div");
  createThirdDiv.className = "color green";
  getDiv.appendChild(createThirdDiv);

  let createFourthDiv = document.createElement("div");
  createFourthDiv.className = "color blue";
  getDiv.appendChild(createFourthDiv);
}
function createButton() {
  let getBody = document.querySelector("body");

  //let getSection = document.querySelector(".section-pixel-board");
  let buttonCreate = document.createElement("button");
  buttonCreate.id = "clear-board";
  buttonCreate.className = "clear-board";
  buttonCreate.innerText = "Clear";
  getBody.appendChild(buttonCreate);
}

function createEventColor() {
  let box = document.querySelector("#pixel-board");

  box.addEventListener("click", function (event) {
    let selectedColor = document.querySelector(".selected");
    let cor = window
      .getComputedStyle(selectedColor, null)
      .getPropertyValue("background-color");
    event.target.style.backgroundColor = cor;
  });
}

function clearColor() {
  let button = document.querySelector("#clear-board");
  let pixel = document.querySelectorAll(".pixel");

  function clearBox() {
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = "white";
    }
  }
  button.addEventListener("click", clearBox);
}

function selectedClass() {
  let color = document.querySelectorAll(".color");
  let colorPalette = document.querySelector("#color-palette");

  colorPalette.addEventListener("click", function (event) {
    for (let index = 0; index < color.length; index += 1) {
      if (event.target.id !== "color-palette") {
        color[index].classList.remove("selected");
        event.target.classList.add("selected");
      }
    }
  });
}

function createPixelBox() {
  let createTable = document.querySelector("#pixel-board");

  for (let index = 0; index < 5; index += 1) {
    let createRow = document.createElement("div");
    createTable.appendChild(createRow);
    for (let indice = 0; indice < 5; indice += 1) {
      let createCell = document.createElement("div");
      createTable.appendChild(createCell).classList = "pixel td";
    }
  }
}

window.onload = function () {
  createTitle();
  createPaletas();
  createDivChild();
  createButton();
  createPixelBox();
  createEventColor();
  selectedClass();
  clearColor();
};
