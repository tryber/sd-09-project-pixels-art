window.onload = function () {
  const myPixelBoard = document.querySelector('#pixel-board');
  const numberOfLinesAndColumns = 5;
  let colorPalette = document.querySelector('#color-palette');
  let selectedColor = document.getElementsByClassName('selected')[0].innerText;
  let pixelBoard = document.querySelector('#pixel-board')
  let numberOfPixels = 0;

  // inicio das funções de renderização do pixel-board
  function createDiv(nameOfTheClass) {
    const myDiv = document.createElement('div');
    myDiv.className = nameOfTheClass;
    if (nameOfTheClass === 'pixel') {
      numberOfPixels += 1;
      myDiv.id = `pixel-${numberOfPixels}`
    }
    return myDiv;
  }
  // Função inspirada na função de construção de DIV do prof Lucas na pagina de alg do triangulo.
  function insertPixel(columnOfTheTable, lineOfTheLoop) {
    for (let index = 0; index < columnOfTheTable; index += 1) {
      const lineOfPixelBoard = document.querySelectorAll('.line')[lineOfTheLoop];
      lineOfPixelBoard.appendChild(createDiv('pixel'));
    }
  }
  function insertLine(lineOfTheTable) {
    for (let line = 0; line < lineOfTheTable; line += 1) {
      myPixelBoard.appendChild(createDiv('line'));
      insertPixel(numberOfLinesAndColumns, line);
    }
  }
  insertLine(numberOfLinesAndColumns);
  // fim das funções de renderização do pixel-board

  // inicio das funções de remoção/inserção da classe selected e armazenamento da cor selecionada 
  function clearTheSelection() {
    selectedDiv = document.getElementsByClassName('selected')[0];
    if (selectedDiv) {
      selectedDiv.classList.remove('selected');
    }
  }
  
  colorPalette.addEventListener('click', function(event){
    let generatorOfEvent = event.target;
    function insertSelectedClassAndReturnColor() {
      let selectedColoredDiv = generatorOfEvent;
      selectedColoredDiv.classList.add('selected');
      selectedColor = selectedColoredDiv.innerText;
    }
    if (generatorOfEvent.id !== 'color-palette') {
      clearTheSelection();
      insertSelectedClassAndReturnColor()
    }
  } )
  // fim das funções de remoção/inserção da classe selected e armazenamento da cor selecionada 

  // inicio das funções de pintura da pixel-board
  pixelBoard.addEventListener('click', function(event) {
    let selectedId = event.target.id;
    if (selectedId !== 'pixel-board') {
      let selectedPixel = document.getElementById(selectedId);
      selectedPixel.style.background = selectedColor;
    }
  })

   
  


  // fim das funções de pintura da pixel-board

  // inicio da função que colore randomicamente a paleta de cores
  // function (){
  //   document.getElementById("box2").style.color = "rgb(x,x,x)";
  //   document.getElementById("box2").style.backgroundColor = "rgb(x,x,x)";
  // }
  // fim da função que colore randomicamente a paleta de cores
};
