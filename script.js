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
limpar.addEventListener('click', limpaTudo)

function limpaTudo(){
 let pixelIndivid = document.querySelectorAll('.pixel');
 
 for(let i=0; i<pixelIndivid.length; i+=1){
   if(pixelIndivid[i].style.backgroundColor !== 'white'){
      pixelIndivid[i].style.backgroundColor = 'white'
 }
 }
}