function opcoesCores(param) {
  let colorPallette = document.querySelector('.tableColor');
  for (let key = 0; key < param; key += 1) {
    const colunaPallete = document.createElement('button');
    colunaPallete.className = 'color';
    if ([key] == 0) {
      colunaPallete.style. backgroundColor = 'black';
      colunaPallete.classList.toogle('selected');
      colunaPallete.id = 'black';
    } else {
      colunaPallete.style.width = '40px';
      colunaPallete.style.height = '40px';
      colunaPallete.style.padding = '1px';
      colunaPallete.style.border = 'black, 1px, solid';
      let cor = 'rgb(' + Math.floor(Math.random(255) * (255 + 1)) + ',' + Math.floor(Math.random(255) * (255 + 1)) + ',' + Math.floor(Math.random(255) * (255 + 1)) + ')';
      if (cor !== 'rgb(255,255,255') {
        colunaPallete.style.backgroundColor = `${cor}`;
        colunaPallete.id =  `${cor}`;
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
    linhaPaleta.className = 'linha';
    paletta.appendChild(linhaPaleta);
    for (let i = 0; i < param1; i += 1) {
      let linhaPaleta1 = document.createElement('button');
      linhaPaleta1.className = 'pixel';
      linhaPaleta1.style.backgroundColor = 'white';
      paletta.appendChild(linhaPaleta1);
    }
  }
}

criarTR(5, 5);

let pixelClear = document.getElementById('clear-board');
let pixels = document.querySelectorAll('.pixel');
pixelClear.addEventListener('click', clear);

function clear(){
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'rgb(255,255,255)';
  }
}
