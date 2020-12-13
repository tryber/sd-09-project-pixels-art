let linha = ['black', 'red', 'blue', 'yellow']

let colorPallette = document.querySelector('.tableColor');
for (let key = 0; key < 4; key +=1){
    let linhaItens = linha[key]
    let colunaPallete = document.createElement('th');
    
    colunaPallete.className = linhaItens;
    colorPallette.appendChild(colunaPallete);
}
