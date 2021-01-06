function clearPixel () {
  const buttonContainer = document.querySelector('.button-container');
  const button = document.createElement('button');
  button.id = 'clear-board';
  button.innerText = 'VQV';
  buttonContainer.appendChild(button);

  button.addEventListener('click', function () {
    const allPixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < allPixel.length; index += 1){
      allPixel[index].style.backgroundColor = '';
    }
  });
}

function firstSelected(){
  let firstSelected = document.querySelector('#black');
  firstSelected.classList.add('selected');
}
firstSelected();


function colorSelected(){
  let classColor = document.querySelectorAll('.color');
  for(let i=0; i<classColor.length; i+=1){
      classColor[i].addEventListener('click', function(){
          let classSelected = document.querySelectorAll('.selected')[0];
          classSelected.classList.remove('selected');
          classColor[i].classList.add('selected');
      });
  }
}
colorSelected();

function buttonClear(){
  let createButtonClean = document.createElement('button');
  createButtonClean.className = 'clear-board';
  createButtonClean.innerText = 'Limpar';
  const body = document.querySelector('body');
  const pixelBoard = document.querySelector('#pixel-board');
  body.insertBefore(createButtonClean, pixelBoard);
}
buttonClear(); 

window.onload = function () {
  clearPixel();
}
