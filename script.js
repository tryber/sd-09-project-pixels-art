function clearPixel () {
  const buttonContainer = document.querySelector('.button-container');
  const button = document.createElement('button');
  button.id = 'clear-board';
  buttonContainer.appendChild(button);

  button.addEventListener('click', function () {
    const allPixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < allPixel.length; index += 1){
      allPixel[index].style.backgroundColor = '';
    }
  });
}
