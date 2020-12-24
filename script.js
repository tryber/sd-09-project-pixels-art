window.addEventListener('load', start);

function start(){

const colorPainel = document.getElementsByClassName('color');
palletaCores();
colorPainel[0].classList.add('selected');
//teste commit
}

function palletaCores(){
  const colorPainel = document.getElementsByClassName('color');
  let lengthPainel = colorPainel.length;
  let colorSelect = ['black', 'red', 'green', 'blue']

  for (let i = 0; i < lengthPainel; i +=1){
    colorPainel[i].classList.add(colorSelect[i]);
  }
}

function selecionaCor(){
  const painelDeCores = document.getElementsByClassName('pixel');
}

