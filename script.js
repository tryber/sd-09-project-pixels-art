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

    
    let corNova = document.querySelectorAll('.color');
  for (let i = 0; i < corNova.length; i += 1){
      corNova[i].addEventListener('click', function() {
        let corAtual= document.querySelector('.selected');
        corAtual.classList.remove('selected')
      corNova[i].classList.toggle('selected')
      console.log(corAtual)
    })

  }}
