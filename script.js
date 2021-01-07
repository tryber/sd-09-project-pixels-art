function generatePixelBoard(size) {
  const boardPixel = document.querySelector("#pixel-board")
  for (let i = 0 ; i < size ; i += 1) {
    const row = document.createElement("div")
    row.className = 'row'
    boardPixel.appendChild(row)
    for (let ii = 0 ; ii < size ; ii += 1) {
      const elementPixel = document.createElement("div")
      elementPixel.className = 'pixel'
      row.appendChild(elementPixel)
    }
  }
}

generatePixelBoard(5)

function createPallets(qty) {
  const colorpalet = document.querySelector("#color-palette")
  console.log(colorpalet)
  for (let i = 0 ; i < qty.length ; i += 1) {
    const color = document.createElement("div")
    color.className = 'color'
    color.style.backgroundColor = qty[i]
    colorpalet.appendChild(color)
    if (qty[i]=== 'black') {
      color.className += ' selected'
    }
  }
}

createPallets(['black','red','blue','green'])
