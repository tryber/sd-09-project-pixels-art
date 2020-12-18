window.onload = function() {
  Aocarregar()

const preta = document.getElementsByClassName('preta');
const azul = document.getElementsByClassName('azul');
const amarelo = document.getElementsByClassName('amarelo');
const vermelho = document.getElementsByClassName('vermelho');


function Aocarregar() {

  const primeiraCorSelecionada = document.getElementsByClassName('color')[0];
   primeiraCorSelecionada.classList.add('selected');
    }

    

 let selecionaCores = document.querySelectorAll('.color');
  for (let i = 0; i < selecionaCores.length; i += 1){
      selecionaCores[i].addEventListener('click', function() {
      selecionaCores[i].classList.toggle('selected')
      
    })
  }

}