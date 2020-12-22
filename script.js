
 let linha = ['black', 'red', 'blue', 'yellow'];
function opcoesCores(){
 
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
/*
function VariaCor(){
  let botao = document.getElementById('alteraCor');
  
  
  botao.addEventListener('click', variaTudo)
}
VariaCor();

  function variaTudo(){
    let cores= document.querySelectorAll('.Color');
    let opcoesCores = [];
    for ( i= 1; i < 4 ; i += 1) {
      opcoesCores.push(`rgb(${Math.random() * 255}`);
    }
    if(cores === 'red'){
      cores.style.background = opcoesCores[1];
    }else if(cores === 'blue'){
      cores.style.background = opcoesCores[2];
    }else if(cores === 'yellow'){
      cores.style.background = opcoesCores[3];
  }
  }


/*let paletta = document.querySelector('.pixel-board');
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
  pixelIndivid2.id = [key]
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
}*/


function criarTR(){
  let paletta = document.querySelector('.pixel-board');
  for(let i=0; i<5; i+=1){    
    let linhaPaleta = document.createElement('tr');
    linhaPaleta.id = 'pixel-board';
    paletta.appendChild(linhaPaleta);
    for (let j=0; j<5; j+=1) {
      //let linhasPixel= document.getElementById('pixelBoard'); 
      let pixelIndivid = document.createElement('td');
      pixelIndivid.className = 'pixel';
      pixelIndivid.style.width = '40px';
      pixelIndivid.style.height = '40px';
      pixelIndivid.style.border ='black 1px solid';
      linhaPaleta.appendChild(pixelIndivid);
      
    }
  }
}  
criarTR();
  



/*
 function selectColor(){
   let boxColor = document.getElementsByTagName('th');
   for (i=0; i<boxColor.length; i+=1){
     boxColor[i].addEventListener('click', chosenColor)
 } 

 function chosenColor(){

 }
let colorSelected = 'black';

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
  
 
pixelSelection.style.backgroundColor = 'colorSelected';
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

function pintar(){
  this.style.backgroundColor = 'colorSelected';
 }

 
for (i=0; i < pixel.length; i+=1){
  pixelSelection[i] = document.querySelectorAll('pixel');
  pixelSelection[i].addEventListener('click', pintar);
}
*/
//windows.onload = criarTR(), opcoesCores();




