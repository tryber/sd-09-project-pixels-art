function Aocarregar () {

        let primeiraCorSelecionada = document.getElementsByClassName('color')[0];
         primeiraCorSelecionada.classList.add ('selected')
        console.log(primeiraCorSelecionada)

        

    }

    window.onload = function() {
      Aocarregar ()
    }