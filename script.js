let linha = ['black', 'red', 'blue', 'yellow']

let colorPallette = document.querySelector('.tableColor');
for (let key = 0; key < 4; key += 1) {
  let linhaItens = linha[key];
  let colunaPallete = document.createElement('th');
  colunaPallete.className = linhaItens;
  
  colorPallette.appendChild(colunaPallete);
}


let paletta = document.querySelector('.pixel-board');
let linhaPaleta = document.createElement('tr');
linhaPaleta.id = 'pixelBoard';
paletta.appendChild(linhaPaleta);

for (let key = 0; key < 5; key += 1) {
  let linhasPixel = document.querySelector('#pixelBoard');
  let pixelIndivid = document.createElement('td');
  pixelIndivid.className = 'pixel';
  linhasPixel.appendChild(pixelIndivid);
}


let paletta1 = document.querySelector('.pixel-board');
let linhaPaleta1 = document.createElement('tr');
linhaPaleta1.id = 'pixelBoard1';
paletta1.appendChild(linhaPaleta1);
let linhasPixel1 = document.querySelector('#pixelBoard1');
for (let key = 0; key < 5; key += 1) {
  //linhaPaleta.innerHTML=[key];
  let pixelIndivid1 = document.createElement('td');
  pixelIndivid1.className = 'pixel';
  linhasPixel1.appendChild(pixelIndivid1)
}

let paletta2 = document.querySelector('.pixel-board');
let linhaPaleta2 = document.createElement('tr');
linhaPaleta2.id = 'pixelBoard2';
paletta2.appendChild(linhaPaleta2);

let linhasPixel2 = document.querySelector('#pixelBoard2');
for (let key = 0; key < 5; key += 1) {
  //linhaPaleta.innerHTML=[key];
  let pixelIndivid2 = document.createElement('td');
  pixelIndivid2.className = 'pixel';
  linhasPixel2.appendChild(pixelIndivid2)
}

let paletta3 = document.querySelector('.pixel-board');
let linhaPaleta3 = document.createElement('tr');
linhaPaleta3.id = 'pixelBoard3';
paletta3.appendChild(linhaPaleta3);

let linhasPixel3 = document.querySelector('#pixelBoard3');
for (let key = 0; key < 5; key += 1) {
  //linhaPaleta.innerHTML=[key];
  let pixelIndivid3 = document.createElement('td');
  pixelIndivid3.className = 'pixel';
  linhasPixel3.appendChild(pixelIndivid3)
}
let paletta4 = document.querySelector('.pixel-board');
let linhaPaleta4 = document.createElement('tr');
linhaPaleta4.id = 'pixelBoard4';
paletta4.appendChild(linhaPaleta4);

let linhasPixel4 = document.querySelector('#pixelBoard4');
for (let key = 0; key < 5; key += 1) {
  //linhaPaleta.innerHTML=[key];
  let pixelIndivid4 = document.createElement('td');
  pixelIndivid4.className = 'pixel';
  linhasPixel4.appendChild(pixelIndivid4)
}


const corBlack = document.querySelector('.black');
corBlack.addEventListener('click',getColor1);

const corRed = document.querySelector('.red');
corRed.addEventListener('click',getColor2);

const corBlue = document.querySelector('.blue');
corBlue.addEventListener('click',getColor3);

const corYellow = document.querySelector('.yellow');
corYellow.addEventListener('click',getColor4);







function getColor1(){
  
  colorSelected = 'black';
  let bloco = document.querySelector('.pixel');

  bloco.addEventListener('click', pintar0)
  
  
 
}
function pintar(){
  bloco.style.backgroundColor = colorDest;
 }


function getColor2(){
  colorSelected = 'red';
  
  
  
}
function getColor3(){
  
  colorSelected = 'blue';
}
function getColor4(){
  colorSelected = 'yellow';
  
  

}



windows.onload = colorDest;

function colorDest(){
  
  var colorSelected = 'black';
} 




