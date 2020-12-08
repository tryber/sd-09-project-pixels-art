function inicioPreto(){
    let inicio = document.querySelector("#pixel-board");
    inicio.addEventListener("click", function (event) {
      event.target.style.backgroundColor = "black";
    });
  }
  inicioPreto();
let quadro = document.querySelector('#pixel-board');
function criaQuadro(number){
    for (let a = 0; a<number; a++){
    let linha = document.createElement("div");
    quadro.appendChild(linha);
for (let b=0; b<number; b++){
let coluna = document.createElement("div")
linha.appendChild(coluna);
coluna.className = "pixel";
}
}
}

function limparQuadro() {
    let totalPixel = document.querySelectorAll(".pixel");
    console.log(totalPixel);
    for (let i = 0; i < totalPixel.length; i += 1) {
        totalPixel[i].style.backgroundColor = "white";
  }
}
let limpa = document.querySelector("#limpaTudo");
limpa.addEventListener("click", limparQuadro);