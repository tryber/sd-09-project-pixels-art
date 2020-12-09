function paletteGenerator(numOfPale) {
  const paletteColors = document.body.querySelector('#color-palette');
  paletteColors.style.width = `${numOfPale * 43}px`;
  for (let index = 0; index < numOfPale; index += 1) {
    const makeDiv = document.createElement('div');
    makeDiv.className = 'color';
    paletteColors.appendChild(makeDiv);
  }
}

function putColor(numColors) {
  const colorsPalette = ['rgb(0 , 0 , 0)'];
  function rgbGenerator() {
    const rgb = [0, 0, 0];
    for (let index = 0; index < 3; index += 1) {
      rgb[index] = (Math.random() * 255 + 1);
      if (index === 2) {
        const colorValue = rgb.reduce((total, currentElement) => total + currentElement);
        if (colorValue > 150 && colorValue < 700) {
          index += 1;
        } else {
          index = 0;
        }
      }
    }
    return `rgb(${rgb[0]} , ${rgb[1]} , ${rgb[2]})`;
  }
  function repeatTest(cores) {
    let repeat = false;
    for (let i = 0; i < cores.length; i += 1) {
      if (cores[i] === cores[i + 1]) {
        repeat = true;
      }
    }
    return repeat;
  }
  for (let index = 1; index < numColors; index += 1) {
    colorsPalette[index] = rgbGenerator();
    if (index === (numColors - 1)) {
      if (repeatTest(colorsPalette) === false) {
        index += 1;
      } else {
        index = 0;
      }
    }
  }
  return colorsPalette;
}

function setColors(numColors) {
  const boxNoColor = document.querySelectorAll('div .color');
  for (let index = 0; index < boxNoColor.length; index += 1) {
    document.querySelectorAll('div .color')[index].style.backgroundColor = putColor(numColors)[index];
  }
}

function whiteFrames(line, column) {
  const panel = document.body.querySelector('#pixel-board');
  panel.style.width = `${column * 40}px`;
  panel.style.height = `${column * 40}px`;
  for (let lIndex = 0; lIndex < line; lIndex += 1) {
    for (let cIndex = 0; cIndex < column; cIndex += 1) {
      const emptyBox = document.createElement('div');
      emptyBox.className = 'pixel';
      panel.appendChild(emptyBox);
    }
  }
}

function selectColor() {
  function getColor(event) {
    const rgb = event.target.style.backgroundColor;
    sessionStorage.setItem('thisColor', rgb);
  }
  const coloredPalette = document.querySelector('#color-palette');
  coloredPalette.addEventListener('click', getColor);
}

function coloring() {
  function coloringFrame(event) {
    const rgb = sessionStorage.getItem('thisColor');
    event.target.style.backgroundColor = rgb;
  }
  const emptyFrame = document.querySelector('#pixel-board');
  emptyFrame.addEventListener('click', coloringFrame);
}

// function clearFrames() {}

window.onload = function () {
  sessionStorage.setItem('thisColor', 'rgb(0 , 0 , 0)');
  const maxColors = 4;
  paletteGenerator(maxColors),
  setColors(maxColors),
  whiteFrames(5, 5),
  selectColor(),
  coloring();
}
