
function opcoesCores(param) {
  
  let colorPallette = document.querySelector('.tableColor');
  for (let key = 0; key < param; key += 1) {

    const colunaPallete = document.createElement('button');
    colunaPallete.className = 'color';
    if ([key] == 0){
     colunaPallete.style.backgroundColor = 'black';
     colunaPallete.style.border = 'black, 1px, solid';
     colunaPallete.style.width = '40px';
     colunaPallete.style.height = '40px';
     colunaPallete.style.padding = '1px';

     colunaPallete.className = 'color selected'
    }else{
      colunaPallete.style.width = '40px';
     colunaPallete.style.height = '40px';
     colunaPallete.style.padding = '1px';
      colunaPallete.style.border = 'black, 1px, solid';
      let cor = 'rgb(' + Math.floor(Math.random(255) * (255+1)) + ',' + Math.floor(Math.random(255) * (255+1)) + ',' + Math.floor(Math.random(255) * (255+1)) + ')' ;
      if (cor !== 'rgb(255,255,255'){
      colunaPallete.style.backgroundColor = `${cor}`;
    }
  }
   
    colorPallette.appendChild(colunaPallete);
   
  } 
}

opcoesCores(10);



function criarTR(param1, param2) {
  for (let i = 0; i < param1 ; i += 1) {
  let paletta = document.querySelector('.pixel-board');
  
    let linhaPaleta = document.createElement('tr');
    paletta.appendChild(linhaPaleta);
      for (let i = 0; i < param1 ; i += 1) {
        let linhaPaleta1 = document.createElement('button');
        linhaPaleta1.id = 'pixel';
        linhaPaleta1.style.border ='1px solid black';
        linhaPaleta1.style.height ='40px';
        linhaPaleta1.style.width ='40px';
        linhaPaleta1.style.padding ='-2px';
        paletta.appendChild(linhaPaleta1);
    
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
  criarTR(c,l);
}

function selectColor() {
  let select = document.querySelector('.color');
  if (select.id == 'black'){
    select.className = ' color selected';
  }
}

/*let mudaCor = document.getElementById('alteraCor');
mudaCor = addEventListener('click',function(){
  let vermelho = document.getElementById('red');
  let azul = document.getElementById('blue');
  let amarelo = document.getElementById('yellow');
  vermelho.style.backgroundColor = 'rgb(' + Math.floor(Math.random(255) * (255+1)) + ',' + Math.floor(Math.random(255) * (255+1)) + ',' + Math.floor(Math.random(255) * (255+1)) + ')' ;
  azul.style.backgroundColor = 'rgb(' + Math.floor(Math.random(255) * (255+1)) + ',' + Math.floor(Math.random(255) * (255+1)) + ',' + Math.floor(Math.random(255) * (255+1)) + ')' ;
  amarelo.style.backgroundColor = 'rgb(' + Math.floor(Math.random(255) * (255+1)) + ',' + Math.floor(Math.random(255) * (255+1)) + ',' + Math.floor(Math.random(255) * (255+1)) + ')' ;

})*/

let corSelecionada=document.querySelectorAll('.color');
corSelecionada.addEventListener('click',selecionaCor);


function selecionaCor(){
  let select=document.querySelectorAll('.color');
  
  if (select.id == 'black'){
    select.className = ' color selected';
  } else if (select.id == 'red'){
    select.className = ' color selected';
  }else if (select.id == 'blue'){
    select.className = ' color selected';
  }



}

window.onload = selectColor();