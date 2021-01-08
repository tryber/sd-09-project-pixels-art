const color1 = document.getElementsByClassName('first-color')[0];
const color2 = document.getElementsByClassName('second-color')[0];
const color3 = document.getElementsByClassName('third-color')[0];
const color4 = document.getElementsByClassName('fourth-color')[0];

const paletaCores = [color1, color2, color3, color4];

function selectingColor(event) {
  for (let index = 0; index < paletaCores.length; index += 1) {
    if (paletaCores[index].classList.contains('selected')) {
      paletaCores[index].classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
}

color1.addEventListener('click', selectingColor);
color2.addEventListener('click', selectingColor);
color3.addEventListener('click', selectingColor);
color4.addEventListener('click', selectingColor);

let arrayDePixels = document.getElementsByClassName('pixel');

function paintingPixel(event) {
  let corAtual = document.querySelector('.selected');
  console.log(corAtual.style.backgroundColor);
  console.log(getComputedStyle(corAtual).backgroundColor);
  event.target.style.backgroundColor = getComputedStyle(corAtual).backgroundColor;  
  }

  for (let index = 0; index < arrayDePixels.length; index += 1) {
    arrayDePixels[index].addEventListener('click', paintingPixel);
  }
  //event.target.style.backgroundColor = corAtual.style.backgroundColor;
  //for (let index = 0; index < paletaCores.length; index += 1) {
  //  if (paletaCores[index].classList.contains('selected')) {
  //    elementoX.style.backgroundColor = paletaCores[index].style.backgroundColor;
  //  }
  //}

// resolver esta funcao
function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');
   for (let index = 0; index < pixels.length; index +=1) {
     pixels[index].classList.add("color-white");
  }
}

function testEvent() {
  const textToPrint = document.getElementById('teste');
  textToPrint.innerText = 'Hora da verdade. Acho que funcionou!';
}

const clickButton = document.getElementById('clear-board');
clickButton.addEventListener('click', testEvent);
clickButton.addEventListener('click', clearBoard);
