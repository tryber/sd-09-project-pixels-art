window.onload = function () {
  let cor = document.querySelector('.selected');
  let selectionColor = document.querySelector('#color-palette');
  selectionColor.addEventListener('click', function (event) {
     if (event.target !== selectionColor) {
        cor.classList.remove('selected');
        event.target.classList.add('selected'); 
        cor = document.querySelector('.selected');
        console.log(selectionColor);
        console.log(event); 
      }
    });
  let pixels = document.querySelectorAll('.pixel');
  for (let x = 0; x < pixels.length; x += 1) {
      pixels[x].addEventListener('click', function (event) {
          event.target.style.backgroundColor = cor.classList[1];
      });
  }
  let button = document.querySelector('#clear-board');
  button.addEventListener('click', function (event) {
      for (let x = 0; x < pixels.length; x += 1) {
      pixels[x].style.backgroundColor ='white';
      }
  });
}
