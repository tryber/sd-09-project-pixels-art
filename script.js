let title = document.createElement('h1');
title.setAttribute('id', 'title');
title.innerText = 'Paleta de Cores';

let colorPalette = document.createElement('div');
colorPalette.setAttribute('id', 'color-palette');

let headerBody = document.getElementsByTagName('header')[0];
headerBody.appendChild(title);
headerBody.appendChild(colorPalette);

let arrayOfColors = ['black', 'red', 'green', 'blue'];

for (let index in arrayOfColors) {
  let colorDiv = document.createElement('div');
  colorDiv.setAttribute('class', 'color ' + arrayOfColors[index]);
  colorPalette.appendChild(colorDiv);
}

function tableCreate() {
  let mainBody = document.getElementsByTagName('main')[0];
  let tableArea = document.createElement('table');
  tableArea.setAttribute('id', 'pixel-board');
  let tBody = document.createElement('tbody');
  
  for (let index = 0; index < 5; index += 1) {
    let tr = document.createElement('tr');
    for (let index2 = 0; index2 < 5; index2 += 1) {
      let td = document.createElement('td');
      td.setAttribute('class', 'pixel');
      tr.appendChild(td)
    }
    tBody.appendChild(tr);
  }
  tableArea.appendChild(tBody);
  mainBody.appendChild(tableArea)
}
tableCreate();