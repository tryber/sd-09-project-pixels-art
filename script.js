/*### **6 - Ao carregar a página, a cor preta da paleta já deve estar selecionada para pintar os pixels.**

- **As seguintes verificações serão feitas:**
    - [ ]  O elemento da cor preta deve possuir, inicialmente, a `classe` `selected`;
    - [ ]  Note que o elemento que deverá receber a classe `selected` deve ser um dos elementos que possuem a classe `color`, como especificado no **requisito 2**.*/


function load() {
  console.log("Evento de carregamento detectado!");
  let element = document.querySelector('.black');
  element.className += ' selected'
}
window.onload = load;
