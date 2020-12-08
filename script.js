function fillColorPalette () {
  const divColor = document.getElementsByClassName('color');
  for (let index = 0; index < divColor.length; index += 1) {
    let randoRgbNumber = Math.ceil(Math.random() * 255);
    let randoRgbNumber1 = Math.ceil(Math.random() * 255);
    let randoRgbNumber2 = Math.ceil(Math.random() * 255);
    let rgb = 'rgb( '+ randoRgbNumber + ' , ' + randoRgbNumber1 + ' , ' + randoRgbNumber2 + ' )';
    divColor[index].style.backgroundColor = rgb;
    console.log(rgb)
  }
}
fillColorPalette ();