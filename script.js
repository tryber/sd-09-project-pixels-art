window.onload = function () {
  const father = document.getElementById('pixel-board');
  for (let i = 0; i < 5; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      const son = document.createElement('div');
      son.className = 'pixel';
      father.appendChild(son);
    }
  }
};

function selectedColor() {
}

selectedColor();
