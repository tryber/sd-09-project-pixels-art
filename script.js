function opcoesCores(param) {

  let colorPallette = document.querySelector('.tableColor');
  for (let key = 0; key < param; key += 1) {

    const colunaPallete = document.createElement('button');
    colunaPallete.className = 'color';
    if ([key] == 0) {
      colunaPallete.style.backgroundColor = 'black';
      colunaPallete.style.border = 'black, solid, 1px';
      colunaPallete.style.width = '40px';
      colunaPallete.style.height = '40px';
      colunaPallete.style.padding = '1px';
      colunaPallete.style.margin = '1px';

      colunaPallete.className = 'color selected'
    } else {
      colunaPallete.style.width = '40px';
      colunaPallete.style.height = '40px';
      colunaPallete.style.padding = '1px';
      colunaPallete.style.border = 'black, solid, 1px';
      colunaPallete.style.margin = '1px';

      let cor = 'rgb(' + Math.floor(Math.random(255) * (255 + 1)) + ',' + Math.floor(Math.random(255) * (255 + 1)) + ',' + Math.floor(Math.random(255) * (255 + 1)) + ')';
      if (cor !== 'rgb(255,255,255') {
        colunaPallete.style.backgroundColor = `${cor}`;
      }
    }

    colorPallette.appendChild(colunaPallete);

  }
}

opcoesCores(4);

function criarTR(param1, param2) {
  for (let i = 0; i < param1; i += 1) {
    let paletta = document.querySelector('#pixel-board');

    let linhaPaleta = document.createElement('tr');
    linhaPaleta.style.padding = '-1 px';
    paletta.appendChild(linhaPaleta);
    for (let i = 0; i < param1; i += 1) {
      let linhaPaleta1 = document.createElement('button');
      linhaPaleta1.className = 'pixel';
      linhaPaleta1.style.border = '1px solid black';
      linhaPaleta1.style.height = '40px';
      linhaPaleta1.style.width = '40px';
      linhaPaleta1.style.padding = '-2px';
      linhaPaleta1.style.backgroundColor = 'rgb(255,255,0)';

      paletta.appendChild(linhaPaleta1);

    }
  }
}
criarTR(5, 5);

let pixelClear = document.getElementById('clear-board');
let pixels = document.querySelectorAll('.pixel');
pixelClear.addEventListener('click', clear);

function clear(event){
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'rgb(255,255,255)';
  }
}