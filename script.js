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



function criarTR() {
  let paletta = document.querySelector('.pixel-board');
  for (let i = 0; i < 5; i += 1) {
    let linhaPaleta = document.createElement('tr');
    linhaPaleta.id = 'pixel-board';
    paletta.appendChild(linhaPaleta);
    for (let j = 0; j < 5; j += 1) {
      //let linhasPixel= document.getElementById('pixelBoard'); 
      let pixelIndivid = document.createElement('td');
      pixelIndivid.className = 'pixel';

      linhaPaleta.appendChild(pixelIndivid);

    }
  }
}
criarTR();


windows.onload = colorDest;

function colorDest() {

  var colorSelected = 'black';
}