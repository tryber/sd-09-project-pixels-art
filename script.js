function clearPixel() {
  const buttonContainer = document.querySelector('.button-container');
  const button = document.createElement('button');
  button.id = 'clear-board';
  button.innerText = 'Limpar';
  buttonContainer.appendChild(button);

  button.addEventListener('click', function () {
    const allPixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < allPixel.length; index += 1) {
      allPixel[index].style.backgroundColor = '';
    }
  });
}

function createButton (container) {
  const button = document.createElement('button');
  button.id = 'generate-board';
  button.innerText = 'Enter';
  container.appendChild(button);

  const size = document.getElementById('board-size');
  if (size.value <= 5) {
  size.value = 5;
  } else if (size.value >= 50) {
  size.value = 50;
  } else {
    return;
  }
}

window.onload = function () {
  clearPixel();
  createButton();
};
