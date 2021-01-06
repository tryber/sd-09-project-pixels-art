function clearPixel () {
  const buttonContainer = document.querySelector('.button-container');
  const button = document.createElement('button');
  button.id = 'clear-board';
  button.innerText = 'limpar';
  container.appendChild(button);

  const body = document.querySelector('body');
  const board = document.querySelector('.pixel-board');
  body.insertBefore(eventClear, board);

  const buttonClear = document.querySelector('#clear-board');
  buttonClear.addEventListener('click', function(){
    const board = document.querySelector('.pixel');

      for (index = 0; index < board.length; index += 1) {
        board[index].style.backgroundColor = 'rgb(255, 255, 255)';
      }
  })
}
