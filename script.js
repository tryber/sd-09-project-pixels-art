function selectColor(event) {
    const deselect = document.querySelector('.color.selected');
    deselect.className = 'color';
    event.target.className = 'color selected';
  }