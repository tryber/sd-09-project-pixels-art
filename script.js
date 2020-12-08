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
