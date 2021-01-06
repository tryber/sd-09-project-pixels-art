function clearPixel () {
  const buttonContainer = document.querySelector('.button-container');
  const button = document.createElement('button');
  button.id = 'clear-board';
  button.innerText = 'Limpar';
  buttonContainer.appendChild(button);

  button.addEventListener('click', function () {
    const allPixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < allPixel.length; index += 1){
      allPixel[index].style.backgroundColor = '';
    }
  });
}

  const size = document.getElementById('board-size');
  if (size.value <= 5) {
    size.value = 5;
  } else if (size.value >= 50) {
    size.value = 50;
  }


window.onload = function () {
  clearPixel();
}
