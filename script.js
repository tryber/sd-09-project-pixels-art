function fillColorPalette() {
  const divColor = document.getElementsByClassName('color');
  divColor[0].style.backgroundColor = 'black';
  for (let index = 1; index < divColor.length; index += 1) {
    const randoRgbNumber = Math.ceil(Math.random() * 255);
    const randoRgbNumber1 = Math.ceil(Math.random() * 255);
    const randoRgbNumber2 = Math.ceil(Math.random() * 255);
    const rgb = 'rgb( '+ randoRgbNumber + ' , ' + randoRgbNumber1 + ' , ' + randoRgbNumber2 + ' )';
    divColor[index].style.backgroundColor = rgb;
  }
}
fillColorPalette();

const colorPalette = document.querySelector('#color-palette');

function selectedAssigns() {
  colorPalette.addEventListener('click', function (event) {
    let selected = document.querySelector('.selected');
    selected.className = 'color';
    event.target.className = 'color selected';
  })

}
selectedAssigns();

function paintDiv() {

  const pixel = document.querySelector('.linhaColunaContainer')
  pixel.addEventListener('click', function(event) {
    const selectedDiv = document.querySelector('.color.selected');
    let color = selectedDiv.style.backgroundColor;
    event.target.style.background = color;
    console.log(selectedDiv)
  })
}
paintDiv();