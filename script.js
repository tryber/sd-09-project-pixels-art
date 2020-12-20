function Aocarregar () {
  const primeiraCorSelecionada = document.getElementsByClassName('color')[0];
   primeiraCorSelecionada.classList.add('selected');
    }
    let corNova = document.querySelectorAll('.color');
  for (let i = 0; i < corNova.length; i += 1){;
    corNova[i].addEventListener('click', function () {;
    let corAtual= document.querySelector('.selected');
    corAtual.classList.remove('selected');
    corNova[i].classList.toggle('selected');
    console.log(corAtual);
    })
  }
        function pintandoPixel () {
let pixel = document.getElementsByClassName('pixel');
for (let i = 0 ; i < pixel.length; i += 1) {;
  pixel[i].addEventListener('click', function(event) {;
  let corSelecionada = window.getComputedStyle(document.querySelector('.selected'));
  let corBg = corSelecionada.backgroundColor;
  event.target.style.backgroundColor = corBg;
}
)}
}

window.onload = function () {
 Aocarregar ();
 pintandoPixel ();
  
}
