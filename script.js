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
  let buttonClean = document.createElement('button');
  buttonClean.id = 'clear-board';
  buttonClean.innerText = 'Limpar';
  const body = document.querySelector('body');
  const pixelBoard = document.querySelector('#pixel-board');
  body.insertBefore(buttonClean, pixelBoard);

  const buttonClearBoard = document.querySelector('#clear-board');
  buttonClearBoard.addEventListener('click', function(){
      const pixelBoardClear = document.querySelectorAll('.pixel');
      for (let indexClear = 0; indexClear < pixelBoardClear.length; indexClear +=1){
          pixelBoardClear[indexClear].style.backgroundColor = 'rgb(255, 255, 255)';        
      }
  })    
}
buttonClear();