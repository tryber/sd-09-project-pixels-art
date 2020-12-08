function drawColorPallets() {
  const pallets = document.querySelectorAll('#color-palette .color');
  const colors = ['black', 'red', 'green', 'blue'];
  for (let index = 0; index < pallets.length; index += 1) {
    pallets[index].style.backgroundColor = colors[index];
    pallets[index].style.border = '1px black solid';
    pallets[index].style.display = 'inline-block';
    pallets[index].style.width = '40px';
    pallets[index].style.height = '40px';
  }

  pallets[0].style.backgroundColor = 'black';
  pallets[1].style.backgroundColor = 'red';
  pallets[2].style.backgroundColor = 'green';
  pallets[3].style.backgroundColor = 'blue';
}

function randomRGB() {
  Math.random;
}

window.onload = function () {
  drawColorPallets();
}
