  function selecionaCor() {
    let paleta = document.getElementById('color-palette').children;
    //paleta[0].className += ' selected';
    for(let item of paleta){
      item.addEventListener('click', function (event) {
        for(let index=0;index<paleta.length;index+=1){
          paleta[index].className = "color";
        }
        event.target.className = 'color selected';
    });
    }
  }
  selecionaCor();

  function removeCor() {
    let color = document.querySelectorAll('.selected');
    console.log(color);
  //addEventListener
    for (let index = 0; index < color.length; index += 1) {
      color[index].classList.remove('selected');
    }
  }

  function pixelColorido() {
    let pixels = document.querySelectorAll('.pixel');
  
    for (let index = 0; index < pixels.length; index += 1) {
      let pixelItem = pixels[index];
      pixelItem.addEventListener('click', function (event) {
      event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
      });
    }
  }
  pixelColorido();

function limparQuadro() {
    let totalPixel = document.querySelectorAll(".pixel");
    console.log(totalPixel);
    for (let i = 0; i < totalPixel.length; i += 1) {
        totalPixel[i].style.backgroundColor = "white";
  }
}
let limpa = document.querySelector("#clear-board");
limpa.addEventListener("click", limparQuadro);

function botaPreto(){
    let addPreto = document.querySelectorAll('.color')[0];
    addPreto.style.backgroundColor = "black";
  }
  botaPreto();
  function botaAzul(){
    let addAzul = document.querySelectorAll('.color')[1];
    addAzul.style.backgroundColor = "blue";
  }
  botaAzul();
  function botaVerde(){
    let addVerde = document.querySelectorAll('.color')[2];
    addVerde.style.backgroundColor = "green";
  }
  botaVerde();
  function botaVermelho(){
    let addVermelho = document.querySelectorAll('.color')[3];
    addVermelho.style.backgroundColor = "red";
  }
  botaVermelho();
