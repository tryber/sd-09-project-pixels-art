function selectColor(event) {
    const deselect = document.querySelector('.color.selected');
    deselect.className = 'color';
    event.target.className = 'color selected';
  }

  function paintSquare(event) {
    const paletteColor = document.querySelector('.color.selected');
    event.target.style.backgroundColor = paletteColor.style.backgroundColor;
  }
  