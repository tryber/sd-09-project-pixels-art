window.onload = function (){
  randomColorsPalette();
}

//Validate color to not be white
function verifyColorWrite (sumNumbersColors, rgbArray) {
  let colorWhiteNumber = 765;
  if(sumNumbersColors === colorWhiteNumber) {
    rgbArray.pop();
    rgbArray.push(Math.random() * 255);
  }
  return rgbArray;
}

//Function of random RGB numbers
function randomRgbNumberColor() {
  let numberColorsRgb = 3;
  let rgbArray = [];
  let sumNumbersColors = 0;
  for (let index = 0; index < numberColorsRgb; index += 1) {
    rgbArray.push(Math.random() * 255);
    sumNumbersColors += rgbArray[index];
    rgbArray = verifyColorWrite(sumNumbersColors, rgbArray);
  }
  return rgbArray;
}

//Put color random on the elements
function randomColorsPalette() {
  let pixelColorSquare = document.querySelectorAll('.color');
  for (let index = 1; index < pixelColorSquare.length; index += 1) {
    let colorNumber = randomRgbNumberColor();
    pixelColorSquare[index].style.backgroundColor = `rgb(${colorNumber[0]}, ${colorNumber[1]}, ${colorNumber[2]})`;
  }
}
