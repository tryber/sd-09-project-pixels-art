window.onload = function() {
  //Referencia Random Color:
  // https://stackoverflow.com/questions/1484506/random-color-generator
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function createBox(classN, color, father, number) {
    for (let index = 0; index < number; index += 1){
      const boxColor = document.createElement('div');
      boxColor.className = classN;
      boxColor.style.backgroundColor = color;
      father.appendChild(boxColor);
    }    
  }

  function palette(number){
    const divFather = document.querySelector('#color-palette');
    createBox('color selected','rgb(0, 0, 0)', divFather, 1)
    for (let index = 0; index < number; index += 1) {
      createBox('color', getRandomColor(), divFather, 1)
    }
    selectedColorLoop();
  }
  palette(3);

  function createBoard(height, width) {
    const divFather = document.querySelector('#pixel-board');
    for (let indexS = 0; indexS < height; indexS += 1){
      const board = document.createElement('section');
      board.className = 'line'
      divFather.appendChild(board);
      const fatherBox = document.querySelectorAll('.line')
      for (let index = 0; index < width; index += 1) {
        createBox('pixel', 'white', fatherBox[indexS], 1)
      }
    }
  }
  createBoard(5, 5);

  function selectedColorLoop() {
    const colorSelect = document.querySelectorAll('.color')
    for (let index = 0; index < colorSelect.length; index += 1) {
      colorSelect[index].addEventListener('click', selectedColor)
    }
  }
  
  function selectedColorClear() {
    const selectedClear = document.querySelectorAll('.color')
    for (let index = 0; index < selectedClear.length; index += 1) {
      selectedClear[index].className = 'color';
    }
  }

  function selectedColor(origin) {
    if (origin.target.className != 'color selected') {
      selectedColorClear();
      origin.target.className = 'color selected';
    } else {
      origin.target.className = 'color';
      document.querySelectorAll('.color')[0].className = 'color selected'
    }
  }

  function boxLoop() {
    const boxL = document.querySelectorAll('.pixel')
    for (let index = 0; index < boxL.length; index += 1){
      boxL[index].addEventListener('click', colorChange);
    }
  }
  boxLoop();

  function colorChange(origin) {
    const boxColor = document.querySelector('.color.selected')
    if (origin.target.style.backgroundColor != boxColor.style.backgroundColor) {
      origin.target.style.backgroundColor = boxColor.style.backgroundColor;
    } else {
      origin.target.style.backgroundColor = 'white';
    }
  }

  function createButton(idC, name, father) {
    const buttonClear = document.createElement('button');
    buttonClear.id = idC;
    buttonClear.innerText = name;
    const buttonFather = document.querySelector(father)
    buttonFather.appendChild(buttonClear);
  }
  
  createButton('clear-board', 'Limpar', '#button-clear')

  const buttonClear = document.querySelector('#clear-board')
  buttonClear.addEventListener('click', clearBoard)

  function clearBoard() {
    const totalPixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < totalPixels.length; index += 1) {
      totalPixels[index].style.backgroundColor = 'white';
    }
  }
}