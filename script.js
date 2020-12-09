let colorPalette = document.createElement('div');
colorPalette.setAttribute('id', 'color-palette');

let mainBody = document.getElementsByTagName('main')[0];
mainBody.appendChild(colorPalette);

let arrayOfColors = ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];


for (let index in arrayOfColors) {
  let colorDiv = document.createElement('div');
  // colorDiv.setAttribute('class', 'color');
  colorDiv.setAttribute('class', 'color ' + arrayOfColors[index]);
  colorPalette.appendChild(colorDiv);
}