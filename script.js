window.onload = function () {
  const father = document.getElementById('pixel-board');
  for (let i = 0; i < 5; i += 1) {
    const son = document.createElement('div');
    father.appendChild(son);
    for (let j = 0; j < 5; j += 1) {
      const grandSon = document.createElement('div');
      grandSon.className = 'pixel color';
      son.appendChild(grandSon);
    }
  }
};

function selectedColor() {
}

selectedColor();
