function inicioPreto(){
    let inicio = document.querySelector("#pixel-board");
    inicio.addEventListener("click", function (event) {
      event.target.style.backgroundColor = "black";
    });
  }
  window.onload = inicioPreto();

  function selecionaCor() {
    let paleta = document.getElementById('color-palette');
  
    paleta.addEventListener('click', function (event) {
      removeCor();
      let cor = event.target;
  
      cor.classList.add('selected');
      paleta.classList.remove('selected');
    });
  }
  selecionaCor();

  function removeCor() {
    let color = document.querySelectorAll('.selected');
  
    for (let index = 0; index < color.length; index += 1) {
      color[index].classList.remove('selected');
    }
  }

  function pixelColorido() {
    let pixels = document.querySelectorAll('.pixel');
  
    for (let index = 0; index < pixels.length; index += 1) {
      let pixelItem = pixels[index];
      pixelItem.addEventListener('click', function (event) {
        event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
      })
    }
  }
  pixelColorido();

function limparQuadro() {
    let totalPixel = document.querySelectorAll(".pixel");
    console.log(totalPixel);
    for (let i = 0; i < totalPixel.length; i += 1) {
        totalPixel[i].style.backgroundColor = "white";
  }
}
let limpa = document.querySelector("#clear-board");
limpa.addEventListener("click", limparQuadro);

function botaPreto(color){
    let addPreto = document.querySelectorAll('.color')[0];
    addPreto.style.backgroundColor = color;
  }
  botaPreto("preto");
  function botaAzul(color){
    let addAzul = document.querySelectorAll('.color')[1];
    addAzul.style.backgroundColor = color;
  }
  botaAzul("azul");
  function botaVerde(color){
    let addVerde = document.querySelectorAll('.color')[2];
    addVerde.style.backgroundColor = color;
  }
  botaVerde("verde");
  function botaVermelho(color){
    let addVermelho = document.querySelectorAll('.color')[3];
    addVermelho.style.backgroundColor = color;
  }
  botaVermelho("vermelho");
