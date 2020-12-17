function Aocarregar() {

  const primeiraCorSelecionada = document.getElementsByClassName('color')[0];
   primeiraCorSelecionada.classList.add('selected');
    }
    window.onload = function() {
      Aocarregar();
    }