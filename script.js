window.onload = function () {

  let box = document.querySelector('#pixel-board');
  let color = document.querySelector('#black');

  function boxColor(event) {
    event.target.style.backgroundColor = 'black';
  }
  box.addEventListener('click', boxColor);
}
