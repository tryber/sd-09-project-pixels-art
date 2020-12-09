let colorPalette = document.createElement('div');
colorPalette.setAttribute('id', 'color-palette');

let headerBody = document.getElementsByTagName('header')[0];
headerBody.appendChild(colorPalette);

let arrayOfColors = ['black', 'red', 'green', 'blue'];


for (let index in arrayOfColors) {
  let colorDiv = document.createElement('div');
  colorDiv.setAttribute('class', 'color ' + arrayOfColors[index]);
  colorPalette.appendChild(colorDiv);
}

let pixelsBoard