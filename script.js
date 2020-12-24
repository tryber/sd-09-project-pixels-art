function opcoesCores() {
  let linha = ['black', 'red', 'blue', 'yellow'];
  let colorPallette = document.querySelector('.tableColor');
  for (let key = 0; key < linha.length; key += 1) {

    let linhaItens = linha[key];
    const colunaPallete = document.createElement('th');
    colunaPallete.className = 'color';
    colunaPallete.id = linhaItens;
    colorPallette.appendChild(colunaPallete);
  }
}
opcoesCores();

function criarTR(param1, param2) {

  let paletta = document.querySelector('.pixel-board');
  for (let i = 0; i < param1; i += 1) {
    let linhaPaleta = document.createElement('tr');
    linhaPaleta.id = 'pixel-board';
    paletta.appendChild(linhaPaleta);
    for (let j = 0; j < param2; j += 1) {
      let pixelIndivid = document.createElement('td');
      pixelIndivid.className = 'pixel';
      linhaPaleta.appendChild(pixelIndivid);

    }
  }
}

criarTR(5,5);

let limpar = document.getElementById("clear-board");
limpar.addEventListener('click', clearBoard)

function clearBoard() {
  let pixelIndivid = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelIndivid.length; i += 1) {
    if (pixelIndivid[i].style.backgroundColor !== 'white') {
      pixelIndivid[i].style.backgroundColor = 'rgb(255,255,255)';
    }
  }
}

let tamanho=document.getElementById("generate-board");
tamanho.addEventListener('click',mudarTamanho);

function mudarTamanho(){
  let coluna = document.getElementById("alteraPalettaColuna");
  let linha = document.getElementById("board-size");
  let c =Num(coluna.value);
  let l =  Num(linha.value);
  alert(c);
  alert(l);   
  criarTR(`${c}`,`${l}`);
}

function selectColor() {
  let select = document.querySelector('.color');
  if (select.id == 'black'){
    select.className = ' color selected';
  }
}
let mudaCor = document.getElementById('alteraCor');
mudaCor = addEventListener('click',function(){
  let vermelho = document.getElementById('red');
  let azul = document.getElementById('blue');
  let amarelo = document.getElementById('yellow');
  vermelho.style.backgroundColor = 'rgb(' + Math.floor(Math.random(255) * (255+1)) + ',' + Math.floor(Math.random(255) * (255+1)) + ',' + Math.floor(Math.random(255) * (255+1)) + ')' ;
  azul.style.backgroundColor = 'rgb(' + Math.floor(Math.random(255) * (255+1)) + ',' + Math.floor(Math.random(255) * (255+1)) + ',' + Math.floor(Math.random(255) * (255+1)) + ')' ;
  amarelo.style.backgroundColor = 'rgb(' + Math.floor(Math.random(255) * (255+1)) + ',' + Math.floor(Math.random(255) * (255+1)) + ',' + Math.floor(Math.random(255) * (255+1)) + ')' ;

})

window.onload = selectColor();