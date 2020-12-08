function selectColor() {
    const selectedColors = document.getElementsByClassName('color selected');
    const colors = document.getElementsByClassName('color');

  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener ('click', function (event) {
      for (let index2 = 0; index2 < selectedColors.length; index2 += 1) {
        selectedColors[index].className = 'color';
      }

      event.target.className = 'color selected';
      console.log(event.target.id);

    });
  }
}

selectColor();


function colorPixel() {
  let pixels = document.getElementsByClassName('pixel');
  let selectedColor = document.querySelector('.color.selected');
  let bgColor = selectedColor.backgroundColor;

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', function(event) {

      event.target.backgroundColor = bgColor;

    });
  }
}

colorPixel();