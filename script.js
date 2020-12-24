function createTitle() {
  let getHead = document.querySelector("head");
  let createHeader = document.createElement("header");
  let createH1 = document.createElement("h1");
  createH1.innerText = "Paleta de Cores";
  createH1.id = "title";
  createHeader.appendChild(createH1);

  getHead.appendChild(createHeader);
}

window.onload = function () {
  createTitle();
};
