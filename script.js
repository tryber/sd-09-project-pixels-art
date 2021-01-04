//requisito 8
function cliquePreto () {
  document.getElementById('vermelho').classList.remove('selected');
  document.getElementById('azul').classList.remove('selected');
  document.getElementById('rosa').classList.remove('selected');
  document.getElementById('preto').classList.add('selected');
};

function cliqueVermelho () {
  document.getElementById('preto').classList.remove('selected');
  document.getElementById('azul').classList.remove('selected');
  document.getElementById('rosa').classList.remove('selected');
  document.getElementById('vermelho').classList.add('selected');
};

function cliqueAzul () {
  document.getElementById('preto').classList.remove('selected');
  document.getElementById('vermelho').classList.remove('selected');
  document.getElementById('rosa').classList.remove('selected');
  document.getElementById('azul').classList.add('selected');
};

function cliqueRosa () {
  document.getElementById('preto').classList.remove('selected');
  document.getElementById('vermelho').classList.remove('selected');
  document.getElementById('azul').classList.remove('selected');
  document.getElementById('rosa').classList.add('selected');
};

//requisito 7
function pintarQuad() {
  event.target.classList.remove('cor1');
  event.target.classList.remove('cor2');
  event.target.classList.remove('cor3');
  event.target.classList.remove('cor4');
  event.target.classList.remove('branco')
  
  if(document.getElementById('preto').classList.contains('selected')){
    event.target.classList.add('cor1');
  } 
  else if (document.getElementById('vermelho').classList.contains('selected')){
    event.target.classList.add('cor2');
  } 
  else if (document.getElementById('azul').classList.contains('selected')){
    event.target.classList.add('cor3');
  }
  else { 
   event.target.classList.add('cor4'); 
  }
}




//requisito 9
let button = document.querySelector('#clear-board');
button.addEventListener('click', botao);

function botao() {
  let cleanBoard = document.getElementsByClassName('pixel');

  for (let index = 0; index < cleanBoard.length; index++) {
    cleanBoard[index].classList.remove('cor1');
    cleanBoard[index].classList.remove('cor2');
    cleanBoard[index].classList.remove('cor3');
    cleanBoard[index].classList.remove('cor4');
    cleanBoard[index].classList.add('branco');
  }
}

//requisito 10
const input = document.getElementById('board-size');
function btnFunction() {
   if (input.value === '0' || input.value === '') {
   alert("Board inválido!");
   }
 }

 const genCollum = document.getElementById('pixel-board')

 function generateCollum(){
   for (let index = 0; index < 5; index++) {
     const collum = document.createElement('tr');
     genCollum.appendChild('collum')
   }
 }
 