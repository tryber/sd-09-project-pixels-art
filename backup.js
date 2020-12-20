// Criando paleta de Cores
function criarPaleta() {
  let paleta = document.getElementById("color-palette")

  for (let indexPaleta = 0; indexPaleta < 4; indexPaleta +=1) {
    let pixelPaleta = document.createElement('td')

    paleta.appendChild(pixelPaleta)
    pixelPaleta.classList.add("color")
  }
}

// Atribuindo Cores a paleta
function criarCoresPaleta() {

  let atribuirCor = document.querySelectorAll(".color")

  let cor1 = document.querySelectorAll(".color")[0].style.backgroundColor = "black"
  let cor2 = document.querySelectorAll(".color")[1].style.backgroundColor = "red"
  let cor3 = document.querySelectorAll(".color")[2].style.backgroundColor = "green"
  let cor4 = document.querySelectorAll(".color")[3].style.backgroundColor = "blue"

  let corSelected = document.querySelectorAll(".color")[0].classList.add(".selected")
}

// Criando a Tabela - Ok
function criarTabela() {
  const tabela = document.getElementById("pixel-board");

  // Criando Linhas
  for(let indexLinha = 0; indexLinha < 5; indexLinha += 1) {
    const tr = document.createElement('tr')
    tabela.appendChild(tr)
  //Criando Colunas
    for(let indexColun = 0; indexColun < 5; indexColun += 1){
      const td = document.createElement('td')
      tr.appendChild(td)
      td.class = 'pixel'
    }
  }
}


// Selecionador de Cores
function selecionarCores() {

  let paletaDeCores = document.getElementById("color-palette")

  paletaDeCores.addEventListener("click", function(event) {
    if(event.target.className === "color") {
      //apagar selected anterior
      let colorBlack = document.getElementsByClassName(".selected")[0]
      colorBlack.classList.remove(".selected")

      //criar novo selected
      event.target.classList.add(".selected")
    }

  console.log(event.target.className === "color")
  })
}



// Pintando Pixel
function pintarPixel() {
  let corSelecionada = document.getElementsByClassName('.selected')[0]

  let pixel = document.querySelector('#pixel-board')

  pixel.addEventListener("click", function(event) {
    let pixelSelecionado = event.target

    if (pixelSelecionado.className === "pixel .black") {
      pixelSelecionado.classList.remove(".black")
      pixelSelecionado.style.backgroundColor = ""
    } else {
      pixelSelecionado.classList.add(".black")
      pixelSelecionado.style.backgroundColor = "black"
    }
  })
}

window.onload = function () {
  criarPaleta();
  criarCoresPaleta();
  criarTabela();
  selecionarCores();
  pintarPixel();
}

//Funções Complementares

/*let corSelecionada = document.querySelector(".selected")
  let pixelSelecionado = document.querySelector("#pixel-board")

  pixelSelecionado.addEventListener('click', function(event) {
    let pixel = event.target

    if (pixelSelecionado.style.backgroundColor === corSelecionada.style.backgroundColor) {
        pixel.style.backgroundColor = "white"
    } else {
            
    pixel.classList.add(".selected")
    pixel.style.backgroundColor = "black"
    }

    console.log(pixelSelecionado)
*/
