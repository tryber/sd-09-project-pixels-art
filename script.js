let baseDoQuadro = 5;

for (let idx = 0; idx < baseDoQuadro; idx += 1) {
  let newLine = document.createElement('div');
  newLine.className = 'linha';
  document.querySelector('#pixel-board').appendChild(newLine);
}

let minhasLinhas = document.querySelectorAll('.linha');
for (let item of minhasLinhas) {
  item.style.height = '40px';
  item.style.width = `${baseDoQuadro*40}` + 'px';
}

for ( let item of minhasLinhas){
  for (let idx = 0; idx < baseDoQuadro; idx += 1){
    let newPixel = document.createElement('div');
    newPixel.style.backgroundColor = 'white';
    newPixel.className = 'pixel';
    item.appendChild(newPixel);
  }
}
