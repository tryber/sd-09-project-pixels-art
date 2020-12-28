window.addEventListener('load', start);

function start(){

const colorPainel = document.getElementsByClassName('color');


colorPainel[0].classList.add('selected');
palletaCores();
const corSelecionada = 'black';

criaBotao();
cleanSquare();
}

function palletaCores(){
  const colorPainel = document.getElementsByClassName('color');
  let lengthPainel = colorPainel.length;
  let colorSelect = ['black', 'red', 'green', 'blue']

  for (let i = 0; i < lengthPainel; i +=1){
    colorPainel[i].classList.add(colorSelect[i]);
  }

}

function criaBotao(){
  const painelColor = document.getElementById('color-palette');

  painelColor.style.marginBottom = '10px';

  let tagDiv = document.createElement('div');
  tagDiv.setAttribute('id','clear-board');

  painelColor.appendChild(tagDiv);

  let buttomTag = document.createElement('button');
  buttomTag.setAttribute('id', 'botao');
  buttomTag.setAttribute('type', 'submit');
  buttomTag.style.marginTop = '3px';
  buttomTag.textContent = 'Limpar';

  tagDiv.appendChild(buttomTag);
}

function limparPixel(){
  const buttonLimpa = document.getElementById('botao');
  console.log('click');
  buttonLimpa.addEventListener('click',cleanSquare);
  console.log(buttonLimpa.targe);

}

function clickPixel(eventoOrigem){
  const pixelSelected = document.querySelectorAll('pixel');
  let tamanhoPixel = pixelSelected.length;

  for (let i = 0; i < tamanhoPixel; i +=0){
    pixelSelected[i].style.backgroundColor = 'yellow';
  }
}

function cleanSquare(event){
  clickPixel();
}
