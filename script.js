const paletaDeCores = document.getElementById('color-palette');
const paletaDePreenchimento = document.getElementById('pixel-board');
const resetaPaleta = document.getElementById('clear-board');
const corPreenchida = document.getElementsByClassName('color');
const corDePintura = document.getElementsByClassName('pixel');
let corDorQuadrado = 'black';

paletaDeCores.addEventListener('click', (event) => {
  for (let i = 0; i <= corPreenchida.length; i += 1) {
    if (corPreenchida[i] === event.target) {
      corPreenchida[i].classList.add('selected');
      corDorQuadrado = corPreenchida[i].classList[1];
    } else if (corPreenchida[i] !== event.target) {
      try {
        corPreenchida[i].classList.remove('selected');
      } catch (e) {
        return e;
      }
    }
  }
  return 0;
},
);

paletaDePreenchimento.addEventListener('click', (event) => {
  for (let i = 0; i <= corDePintura.length; i += 1) {
    if (corDePintura[i] === event.target) {
      try {
        corDePintura[i].className = 'pixel';
        corDePintura[i].classList.add(corDorQuadrado);
      } catch (e) {
        return e;
      }
    }
  }
  return 0;
},
);

resetaPaleta.addEventListener('click', () => {
  for (let i = 0; i < corDePintura.length; i += 1) {
    corDePintura[i].className = 'pixel white';
  }
  return 0;
},
);
