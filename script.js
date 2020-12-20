window.onload = function () {
  function Aocarregar() {
  const primeiraCorSelecionada = document.getElementsByClassName('color')[0];
  primeiraCorSelecionada.classList.add('selected');
}
  const corNova = document.querySelectorAll('.color');
  for (let i = 0; i < corNova.length; i += 1) {
    corNova[i].addEventListener('click', function () {
      const corAtual = document.querySelector('.selected');
      corAtual.classList.remove('selected');
      corNova[i].classList.toggle('selected');
    });
  }
  function pintandoPixel() {
    const pixel = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].addEventListener('click', function (event) {
        const corSelecionada = window.getComputedStyle(document.querySelector('.selected'));
        const corBg = corSelecionada.backgroundColor;
        event.target.style.backgroundColor = corBg;
      });
  }
  }
  Aocarregar();
  pintandoPixel();
};
