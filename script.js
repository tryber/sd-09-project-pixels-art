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

let table = document.createElement('table');
let tr = document.createElement('tr');
let td = document.createElement('td');
tr.appendChild(td);