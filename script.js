// criar paleta
function createPalette() {
  /** vamos armazenar o elemento de id='color-palette em uma constante' **/
  const colorPalette = document.getElementById('color-palette'); // em qual elemento quero criar.
  /** quantas cores queremos?**/
  const numOfColors = 4;

  /* um for para criar  numOfColors divs */
  for (let index = 0; index < numOfColors; index += 1) {
    // criar collection color, cria os elementos, no caso 'div'
    const color = document.createElement('div');
    // adicionar classe color
    color.classList.add('color'); // color aqui é a classe nao a constante
    // adiciona elemento ao colorPalette como filho.
    colorPalette.appendChild(color); // color, variavel que recebeu o elemento criado
  }
  //seleciona a primeira classe color e adiciona a classe selected
  document.querySelector('.color').classList.add('selected');
}

function colorizePalette() {
  // armazena a lista em paletteColor
  const paletteColor = document.querySelectorAll('.color');
  paletteColor[0].style.backgroundColor = 'black';
  paletteColor[1].style.backgroundColor = `rgb(${randomNumbers()} , ${randomNumbers()} , ${randomNumbers()})`;
  paletteColor[2].style.backgroundColor = `rgb(${randomNumbers()} , ${randomNumbers()} , ${randomNumbers()})`;
  paletteColor[3].style.backgroundColor = `rgb(${randomNumbers()} , ${randomNumbers()} , ${randomNumbers()})`;
}

function createPixelBoard(num) { // (num = 5)****
  /** armazena o elemento onde será criado o pixel */  
  const pixelBoard = document.getElementById('pixel-board');
  /* numero de colunas*/
  let numOfCol = num; // nao sei se é necessaria esa linha
  /*for que vai criar as linhas que entrarao as divs */
  for (let line = 0; line < numOfCol; line += 1) {
    /**armazenar elemento */
    let pixelLine = document.createElement('div');
    /**dar uma classe ao elemento */
    pixelLine.classList.add('pixel-line');
    /**for que preenche a linha com divs */
    for (let col = 0; col < numOfCol; col += 1) {
      /* pixel armazena o elemento criado*/
      const pixel = document.createElement('div');
      /**adiciona a classe pixel */
      pixel.classList.add('pixel');
      /**pixelLine recebe */
      pixelLine.appendChild(pixel);
    }
    pixelBoard.appendChild(pixelLine);
  }
} 

createPixelBoard(5); //board default '5'

function getInputValue() {
  // recebendo so o valor do input '.value'
  let input = parseInt(document.querySelector('input').value) // transformar string para Number

  if(input < 5){
    input = 5;
  }else if(input > 50){
    input = 50;
  }
  return input;
}


// let newInput = document.querySelector('input').value;

function novoBoard(){
  // armazena o valor de input com a funcao getInputalue
  let input = getInputValue(); //parseInt(document.querySelector('input').value) 
  if(!input){ // length = 0
    alert('Board inválido!');
    return; // esse retorno sai da funcao
  }
  deletePixels();
  createPixelBoard(input);
  paintPixel();
}

function selectedColor() {
  /**armazena elementos com a classe color */
  const colors = document.getElementsByClassName('color');
  /**for que vai percorrer colors e adicionar eventos */
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', function (event) { // o paramento event vai mostrar qual item foi acionado
      /**nesse for vamos garantir que nenhum elemento tenha a classe selected */
      for (let others = 0; others < colors.length; others += 1) {
        /**retiramos aqui a classe selected de todos os elementos */
        colors[others].classList.remove('selected');
      }
      /** agora adicionamos a classe selected ao elemento que deu target na addEventListener */
      event.target.classList.add('selected');
    });
  }
}

function paintPixel() {
  /* armazenar os elementos com classe .pixel */
  const pixels = document.getElementsByClassName('pixel');
  /**for que adiciona eventos aos elementos .pixel */
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', function (event) {
      /**aqui dizemos que estamos armazenando o elemento com as classes .color e .selected, pq é dele que vamos obter o background */
      const classSelected = document.querySelector('.color.selected');
      /** criamos uma variavel que vai receber o valor da propriedade backgroundColor do elemento de classe .selected */
      const classSelectedColor = window.getComputedStyle(classSelected).getPropertyValue('background-color');
      /**assim como 'event.target', 'this' parece referenciar o elemento clicado */
      event.target.style.backgroundColor = classSelectedColor; // vamos trocar por event.target depois para testar
    });
  }
}

function clearPixelBoard() {
  /** armazenar as classes pixel na let pixels */
  const pixels = document.getElementsByClassName('pixel');
  /** adicionamos um evento ao bottao de classe #clear-board */
  document.querySelector('#clear-board').addEventListener('click', function() {
    /** for que vai percorrer todos os elementos .pixel */
    for (let index = 0; index < pixels.length; index += 1) {
      /** vamos trocar a propriedade de cada elemento pixel */
      pixels[index].style.backgroundColor = 'white';
    }
  });
}

function paletteRandomizer(){
  /** cria evento no botao e chama a funcao colorizePalette novamente */
	document.querySelector('#randomize-palette').addEventListener('click', colorizePalette)
}

function randomNumbers(){
  /** funcao que gera numeros aleatorios para a funcao colorizePalette */
	return Math.round(Math.random()*255)
}

function deletePixels() { 
  // armazena os filhos de #pixel-board
  let lines = document.querySelector('#pixel-board').children
  // armazena a quantidade de linas atual
  let lineLength = lines.length;
  for (let i = 0; i < lineLength; i += 1){
    lines[0].remove();
  }
}

window.onload = function () {
  createPalette();
  colorizePalette();
  createPixelBoard();
  selectedColor();
  paintPixel();
	clearPixelBoard();
	randomNumbers();
	paletteRandomizer();
};

  // function removeBoard() {
  //   const lines = document.getElementsByClassId('pixel-board').children;
  //   const boardChildLength = lines.childElementCount;
  //   for (let index = 0; index < boardChildLength; index += 1){
  //     lines[index].remove();
  //   }
  // }
  // removeBoard();
// function generateBoard(){
//   let input = document.getElementById('board-size').value;
//   const buttonVQV = document.getElementById('generate-board');
//   buttonVQV.addEventListener('click', function(){
//     if(input.length === 0){
//       alert('Board inválido!');
//     }else{
//     alert('oi');}
//   })
// }

// generateBoard();
