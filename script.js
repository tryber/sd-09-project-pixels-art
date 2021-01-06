function clearPixel () {
  let eventClear = document.createElement('button');
  eventClear.id = 'clear-board';

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
clearPixel ();