let quadro = document.querySelector("#pixel-board");

function criaQuadro(){
    for (let a = 0; a<5; a++){
    let linha = document.createElement("div");
    quadro.appendChild(linha);
for (let b=0; b<5; b++){
let coluna = document.createElement("div")
linha.appendChild(coluna);
coluna.className = "pixel";
}
}
}

window.onload= criaQuadro(5);